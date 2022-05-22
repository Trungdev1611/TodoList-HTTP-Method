import { createSlice } from "@reduxjs/toolkit"
const initialState = { data: [], loading: false, error: '' }

const todoslice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        loading: (state, action) => {
            return { ...state, loading: true }
        },
        getTodo: (state, action) => {
            return { ...state, data: action.payload, loading: false }
        },
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


    }
})
export const { loading, getTodo, modifyTodo, addTodo, deleteTodo, error } = todoslice.actions
export default todoslice.reducer

// const reducer = (state = initialState, action) => {

//     switch (action.type) {
//         case 'LOADING':
//             state = { ...state, loading: true }
//             return { ...state }
//         case 'GETTODO':
//             state = { ...state, data: action.payload, loading: false }
//             return { ...state }

//         case 'ADDTODO':
//             let newState = { ...state, data: [...state.data, action.payload], loading: false }
//             return { ...newState }

//         case 'MODIFY-TODO':
//             let indexFind = [...state.data].findIndex((ele) => ele.id === action.payload.id)
//             state.data[indexFind] = action.payload
//             return { ...state, loading: false }

//         case 'Delete-TODO':
//             let indexFinddelte = [...state.data].findIndex((ele) => ele.id === action.payload.id)
//             let newState1 = [...state.data]
//             newState1.splice(indexFinddelte, 1)
//             return { ...state, data: [...newState1], loading: false }

//         case 'error':
//             console.log('error')
//             return { ...state, loading: false, error: action.error }
//         default:
//             return state
//     }
// }
// export default reducer