import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  removeTodo,
  toggleTodo,
  Todo,
} from "../state/features/todos/todosSlice";

const TodoList = () => {
  const todos = useSelector((state: Todo[]) => state);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo({ id: Date.now(), text: "New Todo", completed: false }));
  };
  const handleRemoveTodo = (id: number) => dispatch(removeTodo(id));
  const handleToggleTodo = (id: number) => dispatch(toggleTodo(id));

  return (
    <div>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}: {todo.completed ? "Completed" : "Not Completed"}
            <button onClick={() => handleToggleTodo(todo.id)}>
              Change Status
            </button>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
