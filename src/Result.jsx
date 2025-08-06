// import React from 'react'
// import { useState } from "react";


// const Result = () => {

//     const [name, setName] = useState("");
//   const [sub1, setSub1] = useState("");
//   const [sub2, setSub2] = useState("");
//   const [sub3, setSub3] = useState("");
//   const [list, setList] = useState([]);
//   const [editId, setEditId] = useState(null);

//   const handleData = () => {
//     const obj = { name, sub1, sub2, sub3 };

//     if (editId != null) {
//       let copyData = [...list];
//       copyData[editId] = obj;
//       setList(copyData);
//       setEditId(null);
//     } else {
//       setList([...list, obj]);
//     }

//     setList([...list, obj]);
//     setName("");
//     setSub1("");
//     setSub2("");
//     setSub3("");
//   };

//   const deleteData = (index) => {
//     let copy = [...list];
//     copy.splice(index, 1);
//     setList(copy);
//   };
//   const editData = (data, index) => {
//     setName(data.name);
//     setSub1(data.sub1);
//     setSub2(data.sub2);
//     setSub3(data.sub3);

//     setEditId(index);
//   };
//   return (
//     <>
//        <input
//         type="text"
//         name=""
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       ></input><br></br><br></br>
//       <input
//         type="number"
//         name=""
//         value={sub1}
//         onChange={(e) => setSub1(e.target.value)}
//       ></input><br></br><br></br>
//       <input
//         type="number"
//         name=""
//         value={sub2}
//         onChange={(e) => setSub2(e.target.value)}
//       ></input><br></br><br></br>
//       <input
//         type="number"
//         name=""
//         value={sub3}
//         onChange={(e) => setSub3(e.target.value)}
//       ></input><br><br></br></br>
//       <button onClick={handleData}>Submit</button><br></br>

//       <table border={1}>
//         <tr>
//           <td>name</td>
//           <td>sub1</td>
//           <td>sub2</td>
//           <td>sub3</td>
//           <td>total</td>
//           <td>percentage</td>
//           <td>min</td>
//           <td>max</td>
         
//         </tr>
//         {list.map((i, index) => (
//           <tr>
//             <td>{i.name}</td>
//             <td>{i.sub1}</td>
//             <td>{i.sub2}</td>
//             <td>{i.sub3}</td>
//             <td>{i.sub1 + i.sub2 + i.sub3}</td>
//             <td>{(i.sub1 + i.sub2 + i.sub3) / 3}%</td>
//             <td>{Math.min(i.sub1, i.sub2, i.sub3)}</td>
//             <td>{Math.max(i.sub1, i.sub2, i.sub3)}</td>
//             <td>
//               <button onClick={() => deleteData(index)}>Delete</button>
//             </td>
//             <td>
//               <button onClick={() => editData(i, index)}>Edit</button>
//             </td>
//           </tr>
//         ))}
//       </table>
//     </>
//   )
// }

// export default Result




import React, { useState } from 'react'

const Result = () => {
  const [name, setname] = useState("")
  const [state, setstate] = useState("")
  const [eco, seteco] = useState("")
  const [acount, setacount] = useState("")
  var [total, settotal] = useState("")
  var [per, setper] = useState("")
  var [min, setmin] = useState("")
  var [max, setmax] = useState("")
  const [list, setlist] = useState([])
   const [editId,setEditId] = useState(null)

  const MyFanction = () => {
    console.log(name)
    console.log(state)
    console.log(eco)
    console.log(acount)

    Total()
    Per()
    Min()
    Max()

    const obj = { name, state, eco, acount, total, per, min, max }
    setlist([...list, obj])

    if (!name) {
      document.getElementById('name-error').innerHTML = "enter your name"
    }
    else {
      document.getElementById('name-error').innerHTML = ""
    }

    if (!state) {
      document.getElementById('state-error').innerHTML = "enter your state marksh"
    }
    else {
      document.getElementById('state-error').innerHTML = ""
    }


    if (!eco) {
      document.getElementById('eco-error').innerHTML = "enter your eco marksh"
    }
    else {
      document.getElementById('eco-error').innerHTML = ""
    }


    if (!acount) {
      document.getElementById('acount-error').innerHTML = "enter your acount marksh"
    }
    else {
      document.getElementById('acount-error').innerHTML = ""
    }

    if (name && state && eco && acount) {

    }
    else {
      setlist([...list, obj])

    }

    setname("")
    setstate("")
    seteco("")
    setacount("")



  }

  const DeleteData = (index) => {
    let copy = [...list]
    copy.splice(index, 1)
    setlist(copy)

  }

  const Total = () => {
    total = parseInt(state) + parseInt(eco) + parseInt(acount)
    return total;

  }
  const Per = () => {
    total = parseInt(state) + parseInt(eco) + parseInt(acount)
    per = ((total / 300) * 100)
    return per;
  }
  const Min = () => {
    min = Math.min(state, eco, acount);
    return min;
  }
  const Max = () => {
    max = Math.max(state, eco, acount);
    return max
  }
   const editData = (data , index) => {
        setname(data.name)
        setstate(data.state)
        seteco(data.eco)
        setacount(data.acount)
        setEditId(index)
      }


  return (
    <>
      <h1 >-:student result:-</h1>
      name <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
      <p className='color' id='name-error'></p>
      state<input type="text" value={state} onChange={(e) => setstate(e.target.value)} />
      <p className='color' id='state-error'></p>
      eco <input type="text" value={eco} onChange={(e) => seteco(e.target.value)} />
      <p className='color' id='eco-error'></p>
      acount<input type="text" value={acount} onChange={(e) => setacount(e.target.value)} />
      <p className='color' id='acount-error'></p>
      <button onClick={MyFanction}>submit</button>
      <table border={1}>
        <tr>
          <td>name</td>
          <td>state</td>
          <td>eco</td>
          <td>acount</td>
          <td>total</td>
          <td>pre</td>
          <td>min</td>
          <td>max</td>
          <td>delete</td>
          <td>edit</td>
        </tr>
        {
          list.map((i, index) => (
            <tr>
              <td>{i.name}</td>
              <td>{i.state}</td>
              <td>{i.eco}</td>
              <td>{i.acount}</td>
              <td>{i.total}</td>
              <td>{i.per}</td>
              <td>{i.min}</td>
              <td>{i.max}</td>
              <td><button onClick={() => DeleteData(index)}>delete</button></td>
              <td>
                <button onClick={() => editData(i, index)}>EDIT</button>
              </td>

            </tr>

          ))
        }
      </table>
    </>
  )
}

export default Result;