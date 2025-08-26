import React from 'react'
import { createContext, useState } from 'react'
import Task from './Task';

export const dataContext = createContext()

const IncreDecre = () => {

    const [data, setData] = useState(0)

    const increment = () => {
        setData(data + 1)
    }

    const decrement = () => {
        setData(data - 1)
    }

    return (
        <div>
            <h1>-:Use Context task:-</h1>
            <dataContext.Provider value={{ data, increment, decrement }}>
                <Task></Task>
            </dataContext.Provider>
        </div>
    )
}

export default IncreDecre





