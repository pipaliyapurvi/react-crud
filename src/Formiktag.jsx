import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';

const Formiktag = () => {

    const [ini, setIni] = useState({
        name: '',
        surname: ''
    })

    const [list, setList] = useState([])
    const [editId, setEditId] = useState(null)


    const handleSubmit = (values, { resetForm }) => {
        // console.log(values);

        if (editId != null) {
            let copyData = [...list]
            copyData[editId] = values
            setList(copyData)
            setEditId(null)
            setIni({
                name: '',
                surname: ''
            })
        }
        else {
            setList([...list, values])
        }
        resetForm()

    }

    const editData = (i, index) => {
        setIni(i)
        setEditId(index)
    }
    const deleteData = (index) => {
          let copy = [...list]
          copy.splice(index , 1)
          setList(copy)
      }
     

    return (
        <div>
            <h1>-:Formik Tag crud:-</h1>
            <Formik
                enableReinitialize
                initialValues={ini}
                onSubmit={handleSubmit}
            >
                <Form>
                   name <Field name="name"></Field> <br /><br />
                   surname<Field name="surname"></Field> <br /><br />
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>

            <table border={1}>
                <tr>
                    <td>Name</td>
                    <td>Surname</td>
                    <td>DELETE</td>
                    <td>UPDATE</td>
                </tr>
                {
                    list.map((i, index) => (
                        <tr key={index}>
                            <td>{i.name}</td>
                            <td>{i.surname}</td>
                            <td><button onClick={() => deleteData(index)}>DELETE</button></td>
                            <td><button onClick={() => editData(i, index)}>UPDATE</button></td>
                        </tr>
                    ))
                }
            </table>

        </div>
    )
}

export default Formiktag