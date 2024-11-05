import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item d-flex align-items-center">
      <input
        className="form-control me-2"
        defaultValue={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
      <button
        onClick={() => dispatch(addTodo(todo))}
        id="wd-add-todo-click"
        className="btn btn-success"
      >
        {" "}
        Add{" "}
      </button>
      <button
        onClick={() => dispatch(updateTodo(todo))}
        id="wd-update-todo-click"
        className="btn btn-secondary me-2"
      >
        {" "}
        Update{" "}
      </button>
    </li>
  );
}

// export default function TodoForm({
//   todo,
//   setTodo,
//   addTodo,
//   updateTodo,
// }: {
//   todo: { id: string; title: string };
//   setTodo: (todo: { id: string; title: string }) => void;
//   addTodo: (todo: { id: string; title: string }) => void;
//   updateTodo: (todo: { id: string; title: string }) => void;
// }) {
//   return (
//     <li className="list-group-item d-flex align-items-center">
//       <input
//         className="form-control me-2"
//         value={todo.title}
//         onChange={(e) => setTodo({ ...todo, title: e.target.value })}
//         placeholder="Enter task"
//       />

//       <button
//         onClick={() => updateTodo(todo)}
//         id="wd-update-todo-click"
//         className="btn btn-secondary me-2"
//       >
//         Update
//       </button>

//       <button
//         onClick={() => addTodo(todo)}
//         id="wd-add-todo-click"
//         className="btn btn-success"
//       >
//         Add
//       </button>
//     </li>
//   );
// }
