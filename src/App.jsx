import { useState } from "react";
import "./App.css";
import { TiDelete } from "react-icons/ti";


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const inputChangeHandle = (e) => {
    setInput(e.target.value);
    // e.preventDefault();
  };

  const addTodoHandle = () => {
    setTodos([...todos, input]);
    setInput("");
  };
  
  const deleteTodoHandle = (todo)=> {
    setTodos(todos.filter((task)=> todo !== task ));
  }

  // const id = Math.random()*10;

  return (
    <>
      <div className="main-container">
        <div className="add-todo">
          <input onChange={inputChangeHandle} type="text" />
          <button onClick={addTodoHandle}>Add Task</button>
          {/* {todos} */}
        </div>
        <div className="todo-list">
          <ul>
            {
              todos.map((todo) => (
                <div  className="todo-conatiner">
                  <li>{todo}</li>
                  <div onClick={()=>deleteTodoHandle(todo)}><TiDelete /></div>
                </div>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
