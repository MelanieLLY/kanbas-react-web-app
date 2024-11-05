import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
export default function TodoItem({
  todo,
}: {
  todo: { id: string; title: string };
}) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item d-flex align-items-center">
      {todo.title}
      <div className="ms-auto">
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          id="wd-delete-todo-click"
          className="btn btn-danger me-2"
        >
          {" "}
          Delete{" "}
        </button>
        <button
          onClick={() => dispatch(setTodo(todo))}
          id="wd-set-todo-click "
          className="btn btn-primary me-2"
        >
          {" "}
          Edit{" "}
        </button>
      </div>
    </li>
  );
}

// export default function TodoItem({
//   todo,
//   deleteTodo,
//   setTodo,
// }: {
//   todo: { id: string; title: string };
//   deleteTodo: (id: string) => void;
//   setTodo: (todo: { id: string; title: string }) => void;
// }) {
//   return (
// <li key={todo.id} className="list-group-item d-flex align-items-center">
//   {todo.title}
//   <div className="ms-auto">
//     <button
//       onClick={() => setTodo(todo)}
//       id="wd-set-todo-click"
//       className="btn btn-primary me-2"
//     >
//       Edit
//     </button>
//     <button
//       onClick={() => deleteTodo(todo.id)}
//       id="wd-delete-todo-click"
//       className="btn btn-danger"
//     >
//       Delete
//     </button>
//   </div>
// </li>

//   );
// }
