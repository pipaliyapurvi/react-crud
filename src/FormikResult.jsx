// import { useFormik } from 'formik'
// import React, { useState } from 'react'
// import * as Yup from 'yup';

// const FormikResult = () => {

//     const [list, setList] = useState([])
//     const [state, setenglish] = useState("")
//       const [eco, setgujrati] = useState("")
//       const [acount, sethindi] = useState("")
//       var [total, settotal] = useState("")
//       var [per, setper] = useState("")
//       var [min, setmin] = useState("")
//       var [max, setmax] = useState("")
//     const [ini, setIni] = useState({
//         name: '',
//         english: '',
//         gujrati: '',
//         hindi: ''
       

//     })
//     const [editId, setEditId] = useState(null)

//     const formik = FormikResult({
//         enableReinitialize: true,
//         initialValues: ini,
//         validationSchema: Yup.object({
//             name: Yup.string()
//                 .required('Enter name'),
//             surname: Yup.string()
//                 .required('Enter Surname')
//         }),
//         onSubmit: (values) => {
//             console.log(values);
//             if (editId != null) {
//                 let copyData = [...list]
//                 copyData[editId] = values
//                 setList(copyData)
//                 setEditId(null)
//                 setIni({
//                     name: '',
//                     english: '',
//                     gujrati: '',
//                     hindi: ''
//                 })
//             }
//             else {
//                 setList([...list, values])
//             }


//             formik.handleReset()
//         }

//     })
    
//     const deleteData = (index) => {
//         let copy = [...list]
//         copy.splice(index, 1)
//         setList(copy)
//     }
//     const editData = (item, index) => {
//         setIni(item)
//         setname(item.name)
//         setenglish(item.english)
//         setgujrati(item.gujrati)
//         sethindi(item.hindi)
//         setEditId(index)
//     }
//     const Total = () => {
//     total = parseInt(english) + parseInt(gujrati) + parseInt(hindi)
//     return total;

//   }
//   const Per = () => {
//     total = parseInt(english) + parseInt(gujrati) + parseInt(hindi)
//     per = ((total / 300) * 100)
//     return per;
//   }
//   const Min = () => {
//     min = Math.min(english, gujrati, hindi);
//     return min; 
//   }
//   const Max = () => {
//     max = Math.max(english, gujrati, hindi);
//     return max
//   }
  
//     return (
//         <>
//             <h1>-:Formik Result:-</h1>
//             <div>
//                 <form action="" onSubmit={formik.handleSubmit}>
//                     name <input type="text" name="name" value={formik.values.name} id="" onChange={formik.handleChange} />
//                     {
//                         formik.touched.name && formik.errors.name ? <p style={{ color: 'red' }}>{formik.errors.name}</p> : null
//                     }
//                     <br />
//                     english<input type="text" name="english" value={formik.values.english} id="" onChange={formik.handleChange} />
//                     {
//                         formik.touched.english && formik.errors.english ?
//                             <p style={{ color: 'red' }}> {formik.errors.english} </p> : null
//                     }
//                     <br />
//                     gujarati<input type="text" name="gujarati" value={formik.values.gujarati} id="" onChange={formik.handleChange} />
//                     {
//                         formik.touched.gujarati && formik.errors.gujarati ?
//                             <p style={{ color: 'red' }}> {formik.errors.gujarati} </p> : null
//                     }
//                     <br />
//                     hindi<input type="text" name="hindi" value={formik.values.hindi} id="" onChange={formik.handleChange} />
//                     {
//                         formik.touched.hindi && formik.errors.hindi ?
//                             <p style={{ color: 'red' }}> {formik.errors.hindi} </p> : null
//                     }
//                     <br />
//                     <button type='submit'>Submit</button>
//                 </form>

//                 <table border={1}>
//                     <tr>
//                         <td>name</td>
//                         <td>english</td>
//                         <td>gujarati</td>
//                         <td>hindi</td>
//                         <td>total</td>
//                         <td>per</td>
//                         <td>min</td>
//                         <td>max</td>
//                     </tr>
//                     {
//                         list.map((i, index) => (
//                             <tr>
//                                 <td>{i.name}</td>
//                                 <td>{i.english}</td>
//                                 <td>{i.gujarati}</td>
//                                 <td>{i.hindi}</td>
//                                 <td>{i.total}</td>
//                                 <td>{i.per}</td>
//                                 <td>{i.min}</td>
//                                 <td>{i.max}</td>
//                                 <td>
//                                     <button onClick={() => deleteData(index)}>DELETE</button>
//                                 </td>
//                                 <td><button onClick={() => editData(i, index)}>UPDATE</button></td>

//                             </tr>
//                         ))
//                     }
//                 </table>

//             </div>

//         </>
//     )
// }
// export default FormikResult
