import React, { useRef, useState } from "react";
import "./App.css";
import InputField from "./Components/InputField";
import Todo from "./Model/model";
import TodoList from "./Components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  /* const autofocus = useRef(null) */
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
      //autofocus.current.focus()
    }
  };
  
  console.log(todos);
  
  return (
    <div className="App">
      <span className="heading">Task List</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
   {/*    {todos.map((t) => (
        <li> {t.todo} </li>
      ))} */}
    </div>
  );
};

export default App;
