import React from "react";

export const ImcompleteTodo = (props) => {
  const { todos, onClickComplete, onClickDel } = props;
  return (
    <div className="imcomplete-area">
      <p className="title">未完了のtodo</p>
      <ul>
        {todos.map((todos, index) => {
          return (
            <div key={todos} className="list-row">
              <li>{todos}</li>　
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDel(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
