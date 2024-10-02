import React from "react";

export default function DoneList ({ dones, deleteTodo }) {
  return (
    <div className="list-column">
      <h3 className="list-title">해낸 일</h3>
      <ul>
        {dones.map((done) => (
          <li key={done.id}>
            <span className="todo-text">{done.content}</span>
            <button className="donebtn" onClick={() => deleteTodo(done.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
