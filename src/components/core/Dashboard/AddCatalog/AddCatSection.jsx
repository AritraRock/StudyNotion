import { useState } from "react"
import { useForm } from "react-hook-form"
import IconBtn from "../../../Common/IconBtn"
import { useSelector, useDispatch } from "react-redux"
import { addCatalogDetails } from "../../../../services/operations/addcatalogDetails"
import { addToCatalog } from "../../../../slices/catalogSlice"
// import { AddCatalog } from "./AddCatalog"

export default function AddCatSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const {token} = useSelector((state)=>state.auth)
  const [loading, setLoading] = useState(false)
  // const {catalogs} = useSelector((state) => state.catalog)
  const dispatch = useDispatch()
  const submitHandler = async (data) => {
    setLoading(true)
    console.log("Catalog data submitted:", data)
    console.log("Token:", token)
    const result = await addCatalogDetails(data, token)
    console.log(result)
    if(result.success){
      dispatch(addToCatalog(result.data))
      reset()
    }
    // Add your catalog creation logic here (API call, etc.)
    setLoading(false)
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="space-y-8 rounded-md border border-richblack-700 bg-richblack-800 p-6"
    >
      {/* Catalog Title */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="catalogTitle">
          Catalog Title <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="catalogTitle"
          placeholder="Enter Catalog Title"
          {...register("name", { required: true })}
          className="form-style w-full"
        />
        {errors.catalogTitle && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Catalog title is required
          </span>
        )}
      </div>

      {/* Catalog Description */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="catalogDescription">
          Catalog Description <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="catalogDescription"
          placeholder="Enter Catalog Description"
          {...register("description", { required: true })}
          className="form-style w-full"
        />
        {errors.catalogDescription && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Catalog description is required
          </span>
        )}
      </div>

      <div className="flex justify-end gap-x-2">
        <IconBtn
          disabled={loading}
          text={"Add"}
          type="submit"
        />
      </div>
    </form>
  )
}
