import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobileMenuOpen : false
}

const mobileUiSlice= createSlice({
  name: "mobileUi",
  initialState,
  reducers:{
    setMobileMenuOpen: (state, action)=>{
      state.isMobileMenuOpen= action.payload;
    }
  }
})

export const {setMobileMenuOpen} = mobileUiSlice.actions;

export default mobileUiSlice.reducer
