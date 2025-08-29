import React, { useState, createContext } from 'react';
import UsecontextTask1 from "./UsecontextTask1";

export const dataContext = createContext();

const UsecontextTask = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [add, setAdd] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleData = () => {
    const obj = { name, surname, add };
    if (editIndex !== null) {
      const copy = [...list];
      copy[editIndex] = obj;
      setList(copy);
      setEditIndex(null);
    } else {
      setList([...list, obj]);
    }
    setName("");
    setSurname("");
    setAdd("");
  };
  const editData = (item, index) => {
    setName(item.name);
    setSurname(item.surname);
    setAdd(item.add);
    setEditIndex(index);
  };
  const deleteData = (index) => {
    const copy = [...list];
    copy.splice(index, 1);
    setList(copy);
  };

  return (
    <div>
      <h3>Usecontext crud</h3>
      <div>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />
        Surname:
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <br /><br />
        Address:
        <input
          type="text"
          value={add}
          onChange={(e) => setAdd(e.target.value)}
        />
        <br /><br />
        <button onClick={handleData}>
          {editIndex !== null ? "Update" : "Submit"}
        </button>
      </div>
      <br /><br />
      <dataContext.Provider value={{ list, deleteData, editData }}>
        <UsecontextTask1 />
      </dataContext.Provider>
    </div>
  );
};

export default UsecontextTask;
