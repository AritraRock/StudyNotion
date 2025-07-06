import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiConnector } from "../services/apiConnector"
import { categories } from "../services/apis"

export const fetchCatalogs = createAsyncThunk(
  "catalog/fetchCatalogs",
  async (_, thunkAPI) => {
    try {
      const response = await apiConnector("GET", categories.CATEGORIES_API)
      const data = response?.data?.data || []
      return data
    } catch (err) {
      console.error("Error fetching catalogs:", err)
      return thunkAPI.rejectWithValue("Failed to fetch catalogs")
    }
  }
)

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    catalogs: [],
    loading: false,
    error: null,
  },
  reducers: {
    addToCatalog: (state, action) => {
      state.catalogs.push(action.payload)
      localStorage.setItem("catalogs", JSON.stringify(state.catalogs))
    },
    setCatalogs: (state, action) => {
      state.catalogs = action.payload
      localStorage.setItem("catalogs", JSON.stringify(state.catalogs))
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalogs.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCatalogs.fulfilled, (state, action) => {
        state.catalogs = action.payload
        state.loading = false
        localStorage.setItem("catalogs", JSON.stringify(action.payload))
      })
      .addCase(fetchCatalogs.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { addToCatalog, setCatalogs } = catalogSlice.actions
export default catalogSlice.reducer
