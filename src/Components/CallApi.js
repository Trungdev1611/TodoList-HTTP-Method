import axios from 'axios'
let url = 'https://6282ebc592a6a5e4621b5ab9.mockapi.io/todotest/listtodo'

export async function getData() {
    let res = await axios.get(url)

    let data = await res.data
    console.log('data', data)
    return data
}

export async function postData(data) {
    let config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    let body = JSON.stringify(data)
    let res = await axios.post(url, body, config)
    let data1 = await res.data
    return data1

}

export async function DeleteData(id) {
    // let config = {
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }
    // }
    let url = `https://6282ebc592a6a5e4621b5ab9.mockapi.io/todotest/listtodo/${id}`
    let res = await axios.delete(url)
    console.log(res)
    let data1 = await res.data
    return data1
}

export async function ChangeTodo(id) {
    let config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    let body = JSON.stringify({ id: 100, todo: 'PUT-TO-DO', status: 'true', price: 999 })
    let url = `https://6282ebc592a6a5e4621b5ab9.mockapi.io/todotest/listtodo/${id}`
    let res = await axios.put(url, body, config)
    let data1 = await res.data
    return data1
}