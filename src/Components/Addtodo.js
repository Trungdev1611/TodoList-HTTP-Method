import React, { useState } from 'react'
import * as callapi from './CallApi'

const Addtodo = ({ todo, settodo }) => {
    const [valueinput, setValueinput] = useState('')

    function handleChange(e) {
        setValueinput(e.target.value)
    }
    function handleClick() {
        if (valueinput.trim()) {


            callapi.postData({ id: Math.random(), todo: valueinput, status: 'false', "price": 1222228 })
                //vi tra ra 1 promise nen ta .then duoc  -- sau khi post data xong thi ta lai goi len server de getdata
                .then(data => {
                    return callapi.getData()
                    // settodo([...todo, data]) -- cach nay cung duoc
                })
                .then(data => settodo(data))





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