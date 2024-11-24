import { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithArrays() {
  const API = `${REMOTE_SERVER}/lab5/todos`;
  const [todo, setTodo] = useState({
    id: "1",
    title: "New Title",
    description: "New Description",
    completed: false,
  });
  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos
      </a>
      <hr />
      <h4>Retrieving an Item from an Array by ID</h4>
      <a
        id="wd-retrieve-todo-by-id"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}`}
      >
        Get Todo by ID
      </a>
      <input
        id="wd-todo-id"
        defaultValue={todo.id}
        className="form-control w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />
      <h3>Filtering Array Items</h3>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>
      <hr />
      <h3>Creating new Items in an Array</h3>
      <a id="wd-create-todo" className="btn btn-primary" href={`${API}/create`}>
        Create Todo
      </a>
      <hr />
      <h3>Deleting from an Array</h3>
      <a
        id="wd-delete-todo"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/delete`}
      >
        Delete Todo with ID = {todo.id}
      </a>
      <input
        id="wd-todo-id-delete"
        className="form-control w-50"
        defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />
      <h3>Updating an Item in an Array</h3>

      
            {/* 设置任务 ID */}
            <div className="mb-4">
        <label className="form-label">Task ID</label>
        <input
          defaultValue={todo.id}
          className="form-control w-25"
          onChange={(e) => setTodo({ ...todo, id: e.target.value })}
        />
        <small className="text-muted">Enter the Task ID to update its properties</small>
      </div>

      {/* 更新任务标题 */}
      <div className="card mb-4">
        <div className="card-body">
          <h3 className="card-title">
            Update Task Title 
            <small className="text-muted ms-2">(Current ID: {todo.id})</small>
          </h3>
          <div className="mb-3">
            <label className="form-label">Task Title</label>
            <input
              defaultValue={todo.title}
              className="form-control"
              onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            />
          </div>
          <a
            href={`${API}/${todo.id}/title/${todo.title}`}
            className="btn btn-primary"
          >
            Update Title
          </a>
        </div>
      </div>

      {/* 更新任务完成状态 */}
      <div className="card mb-4">
        <div className="card-body">
          <h3 className="card-title">
            Update Task Completed Status
            <small className="text-muted ms-2">(Current ID: {todo.id})</small>
          </h3>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="completed-checkbox"
              checked={todo.completed}
              onChange={(e) =>
                setTodo({ ...todo, completed: e.target.checked })
              }
            />
            <label htmlFor="completed-checkbox" className="form-check-label">
              Task Completed
            </label>
          </div>
          <a
            href={`${API}/${todo.id}/completed/${todo.completed}`}
            className="btn btn-primary"
          >
            Update Completed Status
          </a>
        </div>
      </div>

      {/* 更新任务描述 */}
      <div className="card mb-4">
        <div className="card-body">
          <h3 className="card-title">
            Update Task Description
            <small className="text-muted ms-2">(Current ID: {todo.id})</small>
          </h3>
          <div className="mb-3">
            <label className="form-label">Task Description</label>
            <input
              defaultValue={todo.description}
              className="form-control"
              onChange={(e) =>
                setTodo({ ...todo, description: e.target.value })
              }
            />
          </div>
          <a
            href={`${API}/${todo.id}/description/${todo.description}`}
            className="btn btn-primary"
          >
            Update Description
          </a>
        </div>
      </div>
    </div>
  );
}
