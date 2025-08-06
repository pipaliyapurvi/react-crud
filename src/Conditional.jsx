
import React, { useState } from 'react'

const First = () => {
    return (
        <>
            <h1>First</h1>
        </>
    )
}

const Second = () => {
    return (
        <>
            <h1>Second</h1>
        </>
    )
}

const Conditional = () => {

    const [no , setNo] = useState(2)

  return (
  
    <div>
          <h1>-:Conditional rendering :-</h1>
        {
            (no%2 == 0) ? <Second></Second> : <First></First>
        }
    </div>
  )
}

export default Conditional
 