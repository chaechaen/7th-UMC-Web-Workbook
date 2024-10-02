import React, { useState } from "react";

export default function Input ({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 이벤트를 막음
    if (inputValue.trim()) { // 입력 값이 있을 경우만 추가
      addTodo(inputValue); // 입력한 값을 addTodo 함수로 전달
      setInputValue(""); // 입력 후 창 초기화
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') { // Enter 키를 눌렀을 때 할 일 추가
      handleSubmit(e); // handleSubmit 함수 호출
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="input-field"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // 입력할 때마다 inputValue 상태 업데이트
        onKeyDown={handleKeyDown} // 엔터 키 이벤트
        placeholder="스터디 계획을 작성해보세요!"
      />
    </form>
  );
};
