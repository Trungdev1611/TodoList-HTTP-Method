import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modifyTodoRequest, DeleteTodoRequest } from '../redux/action'
const Showtodo = () => {

    const dispatch = useDispatch()
    const selector = useSelector(state => state)

    function deletetodo(id) {
        dispatch(DeleteTodoRequest(id))
    }

    function changetodo(id) {
        dispatch(modifyTodoRequest(id))
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

                {selector.data.map((ele, index) => {
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