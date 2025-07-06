import React from 'react'
// import RenderSteps from "./RenderSteps"
// import RenderSteps from '../AddCourse/RenderSteps'
import AddCatSection from './AddCatSection'

// export const AddCatalog = () => {
//   return (
//     <div className=' text-richblack-5'>Add Catalog</div>
//   )
// }


export const AddCatalog = () =>{
  return (
    <>
      <div className="flex w-full items-start gap-x-6">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-14 text-3xl font-medium text-richblack-5">
            Add Catalog
          </h1>
          <div className="flex-1">
            <AddCatSection />
          </div>
        </div>
        {/* Course Upload Tips */}
        <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 xl:block">
          <p className="mb-8 text-lg text-richblack-5">⚡ Key Points about Catalog</p>
          <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
            <li>Created catalog will be visible to all users.</li>
            <li>Keep the title standard and short (2-3 words) and explain it description.</li>
            <li>Please add at least one course for your created catalog.</li>
          </ul>
        </div>
      </div>
    </>
  )
}
