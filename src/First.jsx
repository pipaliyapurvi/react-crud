
import React, { useContext } from 'react'
import { dataContext } from './UseContext'

const First = () => {

    const st = useContext(dataContext)

    return (
        <div>
            <h1>{st}</h1>
        </div>
    )
}

export default First