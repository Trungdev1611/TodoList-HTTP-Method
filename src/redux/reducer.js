const initialState = { data: [], loading: false, error: '' }
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'LOADING':
            state = { ...state, loading: true }
            return { ...state }
        case 'GETTODO':
            state = { ...state, data: action.payload, loading: false }
            return { ...state }

        case 'ADDTODO':
            let newState = { ...state, data: [...state.data, action.payload], loading: false }
            return { ...newState }

        case 'MODIFY-TODO':
            let indexFind = [...state.data].findIndex((ele) => ele.id === action.payload.id)
            state.data[indexFind] = action.payload
            return { ...state, loading: false }

        case 'Delete-TODO':
            let indexFinddelte = [...state.data].findIndex((ele) => ele.id === action.payload.id)
            let newState1 = [...state.data]
            newState1.splice(indexFinddelte, 1)
            return { ...state, data: [...newState1], loading: false }
        default:
            return state
    }
}
export default reducer