import React, { useContext } from "react";
import UsecontextTask, { dataContext } from "./UsecontextTask";

const UsecontextTask1 = () => {
    const { list } = useContext(dataContext);

    return (
        <div>
            <table border={1}>
                <tr>
                    <td>name</td>
                    <td>surname</td>
                    <td>add</td>
                </tr>

                {list.map((i, index) => (
                    <tr>
                        <td>{i.name}</td>
                        <td>{i.surname}</td>
                        <td>{i.add}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default UsecontextTask1;
