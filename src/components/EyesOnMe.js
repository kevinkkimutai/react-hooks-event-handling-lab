import React from 'react'

function EyesOnMe() {


    const hundleFocus = () => {
        console.log("Good!")
    }
    const hundleBlur = () => {
        console.log("Hey! Eyes on me!")
    }
  return (
   <button onFocus={hundleFocus} onBlur={hundleBlur}>Eyes on me</button>
  )
}

export default EyesOnMe;