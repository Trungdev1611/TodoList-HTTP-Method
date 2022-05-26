import { createSlice } from "@reduxjs/toolkit"
import { getTodoRequest } from "./action"
const initialState = { data: [], loading: false, error: '' }

const todoslice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        loading: (state, action) => {
            console.log(action)
            return { ...state, loading: true }
        },
        // getTodo: (state, action) => {
        //     console.log('getToolkit')
        //     return { ...state, data: action.payload, loading: false }
        // },
        addTodo: (state, action) => {
            return { ...state, data: [...state.data, action.payload], loading: false }
        },
        modifyTodo: (state, action) => {
            let indexFind = [...state.data].findIndex((ele) => ele.id === action.payload.id)
            state.data[indexFind] = action.payload
            return state
        },
        deleteTodo: (state, action) => {
            let indexFinddelte = [...state.data].findIndex((ele) => ele.id === action.payload.id)
            let newState1 = [...state.data]
            newState1.splice(indexFinddelte, 1)
            return { ...state, data: [...newState1], loading: false }
        },
        error: (state, action) => {
            return { ...state, loading: false, error: action.error }
        },



    },
    extraReducers: (builder) => {
        builder.addCase(getTodoRequest.pending, (state, action) => {  //pending: dang cho fetch du lieu
            console.log('getTodoRequest pending', action)

            return { ...state, loading: true }

        })
            .addCase(getTodoRequest.fulfilled, (state, action) => {
                //data tu creatAsyncthunk se nam trong action,payload. Neu resolve thi se duoc dispatch den addCase fullfilled
                console.log('fullfilled', action.payload)
                return { ...state, data: action.payload, loading: false }

            })
            .addCase(getTodoRequest.rejected, (state, action) => {
                console.log('getTodoRequest rejected', action)

            })
    }
})
export const { loading, getTodo, modifyTodo, addTodo, deleteTodo, error } = todoslice.actions
export default todoslice.reducer

