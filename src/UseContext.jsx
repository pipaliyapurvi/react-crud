import React, { createContext, useState } from 'react'


import First from './First'
import Second from './Second'
/*

=> useContext
=> component / props drilling break

*/


export const dataContext = createContext()

const UseContext = () => {

    const [data, setData] = useState('Hello')

    return (
        <div>
            <h1>-:UseContext:-</h1>
            <dataContext.Provider value={data}>
                <First></First>
                <Second></Second>
            </dataContext.Provider>
        </div>
    )
}

export default UseContext
