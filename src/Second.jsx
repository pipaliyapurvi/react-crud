
import React, { useContext } from 'react'
import { dataContext } from './UseContext'

const Second = () => {

    const st = useContext(dataContext)

    return (
        <div>
            <h2>{st}</h2>
        </div>
    )
}

export default Second