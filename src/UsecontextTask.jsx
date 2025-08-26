import React from 'react'
import { useState, createContext } from 'react';
import UsecontextTask1 from "./UsecontextTask1";



export const dataContext = createContext();

const UsecontextTask = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [add, setAdd] = useState("");
  const [list, setList] = useState([]);

  const handleData = () => {
    const obj = { name, surname, add };

    setList([...list, obj]);
    setName("");
    setSurname("");
    setAdd("");
  };
  return (
    <>
      <div>
        name<input
          type="text"
          name=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />

        surname<input
          type="text"
          name=""
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <br />
        <br />

        address<input
          type="text"
          name=""
          value={add}
          onChange={(e) => setAdd(e.target.value)}
        />
        <br />
        <br />

        <button onClick={handleData}>Submit</button>
        <br />
        <br />

        <dataContext.Provider value={{ list }}>
          <UsecontextTask1></UsecontextTask1>
        </dataContext.Provider>
      </div>

    </>
  )
}


export default UsecontextTask
