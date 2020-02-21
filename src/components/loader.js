import React from "react"

const Loader = () => {
  return (
    <>
      <div id="overlayer">
        <span
          className="spinner-grow spinner-grow-lg loader"
          role="status"
          aria-hidden="true"
        ></span>
      </div>
    </>
  )
}

export default Loader
