import * as callapi from './../Components/CallApi'

export const loading = () => {
    return {
        type: 'LOADING',
        payload: true
    }
}
export const getTodo = (listtodo) => {
    return {
        type: "GETTODO",
        payload: listtodo
    }
}

export const getTodoRequest = () => {
    return (dispatch) => {
        dispatch(loading()) //
        callapi.getData().then(data => dispatch(getTodo(data))) //sau khi get du lieu tu sever thi dispatch them mot action len store decap nhat du lieu
    }
}
//start Addtodo
export const addTodo = (todo) => {
    return {
        type: 'ADDTODO',
        payload: todo
    }
}

export const addtodoPostRequest = (data1) => {
    return (dispatch) => {
        callapi.postData(data1).then(data => dispatch(addTodo(data)))  //sau khi post du lieu len sever thi dispatch them mot action len store decap nhat du lieu
    }
}

//End Addtodo

//start Modify todo

export const modifyTodo = (data) => {
    return {
        type: 'MODIFY-TODO',
        payload: data
    }
}

export const modifyTodoRequest = (id) => {

    return (dispatch) => {
        //dispatchloading truoc trong khi cho doi ket qua
        //goi API xong thi cho loading la false
        callapi.ChangeTodo(id)
            .then(data => dispatch(modifyTodo(data)))
    }
}

export const deleteTodo = (data) => {
    return {
        type: 'Delete-TODO',
        payload: data
    }
}

export const DeleteTodoRequest = (id) => {
    return (dispatch) => {
        callapi.DeleteData(id)
            .then(data => dispatch(deleteTodo(data)))
    }
}
