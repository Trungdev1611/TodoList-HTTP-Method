const initialState = []
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GETTODO':
            state = action.payload
            return [...state]
        case 'ADDTODO':
            let newState = [...state, action.payload]
            return [...newState]
        case 'MODIFY-TODO':
            let indexFind = [...state].findIndex((ele) => ele.id === action.payload.id)
            state[indexFind] = action.payload
            return [...state]
        case 'Delete-TODO':
            console.log(action)
            let indexFinddelte = [...state].findIndex((ele) => ele.id === action.payload.id)
            let newState1 = [...state]
            newState1.splice(indexFinddelte, 1)
            return [...newState1]
        default:
            return state
    }
}
export default reducer