import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    // useEffect => return => not
    // useMemo => return

    const [no, setNo] = useState(0)
    const counter = useMemo(() => {
        return no * no
    }, [no])

    return (
        <div>
            <h1>-:UseMemo:-</h1>
            <h1>{no}</h1>
            <h2>{counter}</h2>
            <button onClick={() => setNo(no + 1)}>++++++</button>
        </div>
    )
}

export default UseMemo