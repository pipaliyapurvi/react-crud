

import axios from 'axios'
import React, { useEffect, useState } from 'react'

/*

api => application pro. interface
user < = > server => data

http request
=> post => create
=> get => read[view]
=> delete => delete
=> patch => update
=> put => update

*/

const BesicApi = () => {

    const [list, setList] = useState([])

    const [no, setNo] = useState(0)

    // try {

    // } catch (error) {

    // }

    // dependency
    // [] => one time [load]
    // [no] => no[state] => value change
    // [one , two] => multi dependency


    useEffect(() => {
        viewData()
    },[])

    function viewData() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setList(res.data)
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);

            })
    }


    return (
        <div>
            <table border={1}>
                <tr>
                    <td>userId</td>
                    <td>id</td>
                    <td>title</td>
                    <td>body</td>
                </tr>
                {
                    list.map((i, index) => (
                        <tr>
                            <td>{i.userId}</td>
                            <td>{i.id}</td>
                            <td>{i.title}</td>
                            <td>{i.body}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default BesicApi