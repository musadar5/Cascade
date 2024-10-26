import React from 'react'

const EditPreviewButton = ({showportion,setshowportion}) => {
  return (
    <div className='md:hidden m-0.5 bg-blue-600 rounded-lg flex fixed top-6 left-40 sm:left-72 z-40'>
      <button onClick={()=>{setshowportion("edit")}} className={`${showportion==="edit"?"bg-blue-500 ": "bg-white"} text-xs flex-1 w-12`} >Edit</button>
      <button onClick={()=>{setshowportion("preview")}} className={`${showportion==="preview"?"bg-blue-500": "bg-white"} text-xs flex-1 w-12`}>Preview</button>
    </div>
  )
}

export default EditPreviewButton
