import Showtodo from "./Components/Showtodo";
import Addtodo from "./Components/Addtodo";
import React, { useState } from 'react'
function App() {
  const [todo, setTodo] = useState([])
  return (
    <div className="App">
      <Addtodo settodo={setTodo} todo={todo} />
      <Showtodo settodo={setTodo} todo={todo} />
    </div>
  );
}

export default App;
