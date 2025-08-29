import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'

const Api = () => {
    const [list, setList] = useState([])
    const [no, setNo] = useState(0)
    const [editId, setEditId] = useState(null)


    const token = "8UYSz2TSJqBArKn0"
    const [ini, setIni] = useState({
        name: "",
        price: ""
    })
    useEffect(() => {
        viewData()
    }, [])


    function viewData() {
        axios.get(' https://generateapi.techsnack.online/api/product', {
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                setList(res.data.Data)
                console.log(res.data.Data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    const handleSubmit = (values, { resetForm }) => {
        // console.log(values);
        const { _id, ...rest } = values
        if (editId != null) {
            axios.patch(`https://generateapi.techsnack.online/api/product/${editId}`, rest, {
                headers: {
                    Authorization: token
                }
            })
                .then(() => {
                    viewData()
                    setIni({
                        name: '',
                        price: ''
                    })

                })
                .catch((error) => {
                    console.log(error);
                })
        }
        else {
            axios.post('https://generateapi.techsnack.online/api/product', values, {
                headers: {
                    Authorization: token
                }
            })
                .then(() => {
                    viewData()
                    resetForm()
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }
    const deleteData = (id) => {
        axios.delete(`https://generateapi.techsnack.online/api/product/${id}`, {
            headers: {
                Authorization: token
            }
        })
            .then(() => {
                viewData()
            })
            .catch((error) => {
                console.log(error);
            })
    }
    const editData = (item) => {
        setIni(item)
        setEditId(item._id)
    }
    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={ini}
                onSubmit={handleSubmit}>
                <Form>
                    Name<Field type="text" name="name"></Field> <br /><br />
                    Price<Field type="number" name="price"></Field> <br /><br />
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
            <table border={1}>
                <tr>
                    <td>name</td>
                    <td>price</td>
                    <td>DELETE</td>
                    <td>EDIT</td>

                </tr>
                {
                    list.map((i, index) => (
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.price}</td>
                            <td>
                                <button onClick={() => deleteData(i._id)}>DELETE</button>
                            </td>
                            <td>
                                <button onClick={() => editData(i)}>EDIT</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
export default Api
