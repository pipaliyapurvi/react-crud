import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';

const UseFormik = () => {

const [list , setList] = useState([])
 const [ini, setIni] = useState({
        name: '',
        surname: ''
    })
 const [editId, setEditId] = useState(null)

const formik = useFormik({
    enableReinitialize: true,
        initialValues: ini,
        validationSchema : Yup.object({
            name : Yup.string()
            .required('Enter name'),
            surname : Yup.string()
            .required('Enter Surname')
        }),
    onSubmit : (values) => {
        console.log(values);
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
            else{
                 setList([...list , values])
            }


        formik.handleReset()
    }
    
})
const deleteData = (index) => {
          let copy = [...list]
          copy.splice(index , 1)
          setList(copy)
      }
      const editData = (item, index) => {
        setIni(item)
        setEditId(index)
    }

  return (
    <div>
        <h1>-:UseFormik crude:-</h1>
        <form action="" onSubmit={formik.handleSubmit}>
           name <input type="text" name="name" value={formik.values.name} id="" onChange={formik.handleChange} />
             {
                    formik.touched.name && formik.errors.name ? <p style={{color : 'red'}}>{formik.errors.name}</p> : null
                }
            <br />
           surname <input type="text" name="surname" value={formik.values.surname} id="" onChange={formik.handleChange} />
             {
                        formik.touched.surname && formik.errors.surname ?
                        <p style={{color : 'red'}}> {formik.errors.surname} </p> : null
                    } 
            <br />
            <button type='submit'>Submit</button>
        </form>    

        <table border={1}>
            <tr>
                <td>name</td>
                <td>surname</td>
                <td>DELETE</td>
                <td>UPDATE</td>
            </tr>
            {
                list.map((i , index) => (
                    <tr>
                        <td>{i.name}</td>
                        <td>{i.surname}</td>
                        <td>
                  <button onClick={() => deleteData(index)}>DELETE</button>
                  </td>
                  <td><button onClick={() => editData(i, index)}>UPDATE</button></td>
                
                    </tr>
                ))
            }
        </table>

    </div>
  )
}

export default UseFormik;