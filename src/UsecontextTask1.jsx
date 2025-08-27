import React, { useContext } from "react";
import { dataContext } from "./UsecontextTask";

const UsecontextTask1 = () => {
    const { list, deleteData, editData } = useContext(dataContext);

    return (
        <div>
            <table border={1}>

                <tr>
                    <td>Name</td>
                    <td>Surname</td>
                    <td>Address</td>
                    <td>Delete</td> 
                    <td>Edit</td>
                </tr>


                {list.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.surname}</td>
                        <td>{item.add}</td>
                        <td>
                            <button onClick={() => deleteData(index)}>Delete</button>
                        </td>
                        <td>
                            <button onClick={() => editData(item, index)}>Edit</button>
                        </td>
                    </tr>
                ))}

            </table>
        </div>
    );
};

export default UsecontextTask1;