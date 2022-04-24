import "./style.css";
import Todo from "../Model/model";
import SingleToDo from "./SingleToDo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="container">
      <div className="todos">
        
        <span className="todos__heading">Open Tasks</span>

        {todos.map((todo) => (
          <SingleToDo
            todo={todo}
            todos={todos}
            key={todo.id}
            setTodos={setTodos}
          />
        ))}
      </div>
      
      <div className="todos remove">
      <span className="todos__heading">Completed Tasks</span>

{todos.map((todo) => (
  <SingleToDo
    todo={todo}
    todos={todos}
    key={todo.id}
    setTodos={setTodos}
  />
))}
      </div>
    </div>
  );
};

export default TodoList;

// another approach of solving the problem:
/* const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return <div className="todos">{}</div>;
};
 */
