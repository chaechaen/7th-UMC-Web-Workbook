import React, { useState } from "react";
import Input from "../components/Input";
import TodoList from "../components/TodoList";
import DoneList from "../components/DoneList";
import '../pages/TodoPage.css';

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [dones, setDones] = useState([]);

  // 새로운 todo를 추가하는 함수
  const addTodo = (content) => {
    const newTodo = {
      id: Date.now(), // 고유 ID 생성
      content, // 전달받은 content를 새로운 할 일 객체에 저장
      isDone: false, // 새로 추가된 할 일은 아직 완료되지 않았으므로 false로 설정
    };
    setTodos([...todos, newTodo]); // 기존 할 일 목록에 새로운 할 일 추가
  };

  // 해야 할 일을 완료했을 때 done 리스트로 이동시키는 함수
  const completeTodo = (id) => { // 할 일을 완료했을 때
    const completedTodo = todos.find((todo) => todo.id === id); // 완료할 할 일 찾기
    setTodos(todos.filter((todo) => todo.id !== id)); // 완료된 할 일을 할 일 목록에서 제거
    setDones([...dones, { ...completedTodo, isDone: true }]); // 완료된 할 일을 완료 목록에 추가
  };

  // 해낸 일을 삭제하는 함수
  const deleteTodo = (id) => {
    setDones(dones.filter((done) => done.id !== id)); // 해당 id의 완료된 할 일 제거
  };

  return (
    <div className="container">
      <h1 className="title">UMC Study Plan</h1>
      <Input addTodo={addTodo} />
      <div className="list-container">
        <div className="todo-element">
          <TodoList todos={todos} completeTodo={completeTodo} />
        </div>
        <div className="done-element">
          <DoneList dones={dones} deleteTodo={deleteTodo} />
        </div>
      </div>
    </div>
  );
}
