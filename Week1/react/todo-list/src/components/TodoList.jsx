import React from "react";

export default function TodoList ({ todos, completeTodo }) {
  return (
    <div className="list-column">
      <h3 className="list-title">해야 할 일</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span className="todo-text">{todo.content}</span>
            <button className="todobtn" onClick={() => completeTodo(todo.id)}>완료</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
