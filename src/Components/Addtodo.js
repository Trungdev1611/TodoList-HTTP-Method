import React, { useState } from 'react'

import { addtodoPostRequest } from '../redux/action'
import { useDispatch } from 'react-redux'
const Addtodo = () => {
    const dispatch = useDispatch()
    const [valueinput, setValueinput] = useState('')

    function handleChange(e) {
        setValueinput(e.target.value)
    }
    function handleClick() {
        if (valueinput.trim()) {
            dispatch(addtodoPostRequest({
                todo: valueinput,
                status: 'true',
                price: 6666
            }))
        }
    }
    return (
        <div className='addtodo'>
            <input type="text" placeholder='type todo' onChange={handleChange} value={valueinput} />
            <button onClick={handleClick}>Addtodo</button>
        </div>
    )
}

export default Addtodo