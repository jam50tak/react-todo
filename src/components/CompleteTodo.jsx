import React from "react";

export const CompleteTodo = (props) => {
  const { todos, onclickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のtodo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>　
              <button
                onClick={() => {
                  onclickBack(index);
                }}
              >
                戻す
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
