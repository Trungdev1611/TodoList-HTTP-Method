import React, { useEffect } from 'react'
import * as callapi from './CallApi'

const Showtodo = ({ todo, settodo }) => {
    console.log(todo)


    useEffect(() => {
        callapi.getData().then(data => settodo(data))

    }, [])
    console.log(todo)

    function deletetodo(id) {
        callapi.DeleteData(id)
            //vi tra ra 1 promise nen ta .then duoc --sau khi delete tren sever xong thi ta lai goi len server de lay data
            .then(data => callapi.getData()
                //     {
                //     let indexfind = todo.findIndex((ele) => ele.id === data.id)
                //     todo.splice(indexfind, 1)
                //     settodo([...todo])
                // }
            ).then(data => settodo(data))
    }

    function changetodo(id) {
        callapi.ChangeTodo(id)
            //vi tra ra 1 promise nen ta .then duoc---sau khi PUT tren sever xong thi ta lai goi len server de lay data
            .then(data => callapi.getData()).then(data => settodo(data))
    }
    return (

        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Ten cong viec</th>
                    <th>Trang thai</th>
                    <th>Gia tien</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>

                {todo.map((ele, index) => {
                    return <tr key={index}>
                        <td>{index}</td>
                        <td>{ele.todo}</td>
                        <td>{ele.status ? 'true' : 'false'}</td>
                        <td>{ele.price}</td>
                        <td>
                            <button onClick={() => changetodo(ele.id)}>Sua</button>
                            <button onClick={() => deletetodo(ele.id)}>Xoa</button>
                        </td>

                    </tr>
                })}


            </tbody>
        </table>

    )
}

export default Showtodo