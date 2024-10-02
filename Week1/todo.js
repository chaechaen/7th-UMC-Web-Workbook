document.addEventListener("DOMContentLoaded", () => {
  // 필요한 요소들 가져오기
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");
  const doneList = document.getElementById("done-list");

  // 폼 제출 시 할 일 추가
  todoForm.addEventListener("submit", (event) => {

      event.preventDefault(); // 기본 폼 제출 동작 막기

      // --할 일을 입력하고 새로운 목록 항목 만들기--

      const content = todoInput.value.trim(); // 사용자가 입력한 할 일을 앞뒤 공백 제거하고 가져옴
      
      if (content) {

          const newTodoItem = document.createElement("li"); // 새로운 <li> 태그를 생성
          
          const textSpan = document.createElement("span");  // <span> 태그 생성
          textSpan.textContent = content; // <span> 태그에 사용자가 입력한 할 일 텍스트 추가
          textSpan.classList.add("todo-text"); // <span> 태그에 'todo-text' 클래스 추가해 스타일 적용
          
          // '완료' 버튼 생성
          const completeButton = document.createElement("button"); // 새로운 <button> 태그 생성
          completeButton.textContent = "완료"; // 버튼에 표시되는 텍스트 '완료'
          completeButton.classList.add("todobtn"); // 'todobtn' 클래스를 추가해 스타일 적용

          // '완료' 버튼 클릭 시, 할 일을 완료 목록으로 이동
          completeButton.addEventListener("click", () => {
              todoList.removeChild(newTodoItem); // 할 일을 할 일 목록에서 삭제
              createDoneItem(content);  // 해낸 일로 복제 (아래 해당 함수 있음)
          });

          // <li> 태그에 <span>과 <button>을 자식으로 추가
          newTodoItem.appendChild(textSpan);
          newTodoItem.appendChild(completeButton);
          
          todoList.appendChild(newTodoItem); // 만들어진 <li> 요소를 할 일 목록 <ul id="todo-list"> 안에 추가

          // 입력 필드 초기화
          todoInput.value = "";
      }
  });

  // --완료된 할 일을 해낸 일 목록에 추가하는 함수--

  function createDoneItem(content) {

      const doneItem = document.createElement("li"); // 새로운 <li> 태그 생성
      
      const textSpan = document.createElement("span"); // <span> 태그 생성
      textSpan.textContent = content; // <span> 태그에 해낸 일 텍스트 추가
      textSpan.classList.add("todo-text"); // <span> 태그에 'todo-text' 클래스 추가해 스타일 적용

      // '삭제' 버튼 생성
      const deleteButton = document.createElement("button"); // 새로운 <button> 태그 생성
      deleteButton.textContent = "삭제"; // 버튼에 표시되는 텍스트 '삭제'
      deleteButton.classList.add("donebtn"); // 'todobtn' 클래스를 추가해 스타일 적용

      // '삭제' 버튼 클릭 시, 완료된 일 삭제
      deleteButton.addEventListener("click", () => {
          doneList.removeChild(doneItem);  // 해낸 일 목록에서 삭제
      });

      // <li> 태그에 <span>과 <button>을 자식으로 추가
      doneItem.appendChild(textSpan);
      doneItem.appendChild(deleteButton);

      doneList.appendChild(doneItem);  // 완료된 항목을 '해낸 일' 목록 <ul id="done-list">에 추가
  }
});
