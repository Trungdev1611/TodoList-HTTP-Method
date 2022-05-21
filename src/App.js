import Showtodo from "./Components/Showtodo";
import Addtodo from "./Components/Addtodo";
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTodoRequest } from './redux/action'
function App() {
  const selector = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTodoRequest())
    console.log('useEffect')

  }, [dispatch])


  if (selector.loading) {
    return <h1>Loading...</h1>
  }

  return (

    <div className="App">
      <Addtodo />
      <Showtodo />
    </div>
  );
}

export default App;
