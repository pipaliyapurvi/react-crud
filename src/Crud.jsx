import React from 'react'
 import { useState } from 'react';

 function Crud() {
      const [name , setName] = useState("")
      const [surname , setSurname] = useState("")
      const [number ,setNumber] = useState("")
      const [address,setAddress]= useState("")
      const [list , setList] = useState([])
      const [editId,setEditId] = useState(null)
      
    
      const myFunction = () => {
          // console.log(name);
          // console.log(surname);
    
          const obj = {name , surname ,number ,address}
         
          // console.log(obj);
    
          if(editId != null)
          {
              let copyData = [...list]
              copyData[editId] = obj
              setList(copyData)
              setEditId(null)
          }
          else
          {
            setList([...list , obj])
          }
          setName('')
          setSurname('')  
          setNumber('')  
          setAddress('')  
         
      }
      const deleteData = (index) => {
          let copy = [...list]
          copy.splice(index , 1)
          setList(copy)
      }
      const editData = (data , index) => {
        setName(data.name)
        setSurname(data.surname)
        setNumber(data.number)
        setAddress(data.address)
        setEditId(index)
      }
    
      return (
        <>
        <h1>-:react crud:-</h1>
        name<input type="text" name="" value={name} id="" onChange={(e) => setName(e.target.value)} /> <br /><br />
        surname<input type="text" name="" value={surname} id="" onChange={(e) => setSurname(e.target.value)} /> <br /><br />
        number<input type="text" name="" value={number} id="" onChange={(e) => setNumber(e.target.value)}></input><br/><br />
        address<input type="text" name="" value={address} id="" onChange={(e) => setAddress(e.target.value)}></input><br/><br />
        <button onClick={myFunction}>Submit</button> <br/><br/>
        <table border={1}>
          <tr>
            <td>name</td>
            <td>surname</td>
            <td>number</td>
            <td>address</td>
            <td>DELETE</td>
            <td>EDIT</td>
          </tr>
          {
            list.map((i , index) => (
              <tr>
                <td>{i.name}</td>
                <td>{i.surname}</td>
                <td>{i.number}</td>
                <td>{i.address}</td>
                <td>
                  <button onClick={() => deleteData(index)}>DELETE</button>
                </td>
                <td>
                  <button onClick={() => editData(i , index)}>EDIT</button>
                </td>
              </tr>
            ))
          
          }
        </table>
          {/* <input type="text" name="" id="" onChange={(e) => console.log(e.target.value)
          } />
    
            <button value="cdmi" onClick={(e) => console.log(e.target.value)
            }>click</button> */}
        </>
      
    
  )
}
export default Crud;
