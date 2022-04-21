import "./style.css";
import Todo from "../Model/model";
import SingleToDo from "./SingleToDo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleToDo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;

// another approach of solving the problem:
/* const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return <div className="todos">{}</div>;
};
 */
