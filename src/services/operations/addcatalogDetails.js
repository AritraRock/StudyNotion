import { toast } from "react-hot-toast"

// import { updateCompletedLectures } from "../../slices/viewCourseSlice"
// import { setLoading } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector"
import { categories } from "../apis"
const {
  ADD_CATEGORIES_API,
} = categories

export const addCatalogDetails = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", ADD_CATEGORIES_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("CREATE CATALOG API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Add Catalog")
    }
    toast.success("Catalog Added Successfully")
    result = response?.data
  } catch (error) {
    console.log("CREATE CATALOG API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}
