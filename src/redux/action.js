import * as callapi from './../Components/CallApi'
import { loading, addTodo, getTodo, deleteTodo, modifyTodo } from './reducer'

export const getTodoRequest = () => {
    return (dispatch) => {
        dispatch(loading()) //
        callapi.getData().then(data => dispatch(getTodo(data))) //sau khi get du lieu tu sever thi dispatch them mot action len store decap nhat du lieu
            .catch(err => dispatch(err()))
    }
}

export const addtodoPostRequest = (data1) => {
    return (dispatch) => {
        callapi.postData(data1).then(data => dispatch(addTodo(data)))  //sau khi post du lieu len sever thi dispatch them mot action len store decap nhat du lieu
    }
}


export const modifyTodoRequest = (id) => {

    return (dispatch) => {

        callapi.ChangeTodo(id)
            .then(data => dispatch(modifyTodo(data)))
    }
}


export const DeleteTodoRequest = (id) => {
    return (dispatch) => {
        callapi.DeleteData(id)
            .then(data => dispatch(deleteTodo(data)))
    }
}
