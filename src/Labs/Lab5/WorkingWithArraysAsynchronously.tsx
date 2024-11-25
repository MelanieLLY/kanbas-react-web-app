import React, { useState, useEffect } from "react";
import * as client from "./client";

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);

  // 从服务器加载 todos
  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };

  // 组件加载时调用 fetchTodos
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      <h4>Todos</h4>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <input
              type="checkbox"
              className="form-check-input me-2"
              defaultChecked={todo.completed}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
