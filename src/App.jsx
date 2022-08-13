import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { ImcompleteTodo } from "./components/ImcompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [imcompleteTodos, setImcompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...imcompleteTodos, todoText];
    setImcompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDel = (index) => {
    const newTodos = [...imcompleteTodos];
    newTodos.splice(index, 1);
    setImcompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const finTodos = [...completeTodos, imcompleteTodos[index]];
    setCompleteTodos(finTodos);
    const imcompTodos = [...imcompleteTodos];
    imcompTodos.splice(index, 1);
    setImcompleteTodos(imcompTodos);
  };

  const onclickBack = (index) => {
    const imcompTodos = [...imcompleteTodos, completeTodos[index]];
    setImcompleteTodos(imcompTodos);

    const compTodos = [...completeTodos];
    compTodos.splice(index, 1);
    setCompleteTodos(compTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <ImcompleteTodo
        todos={imcompleteTodos}
        onClickComplete={onClickComplete}
        onClickDel={onClickDel}
      />
      <CompleteTodo todos={completeTodos} onclickBack={onclickBack} />
    </>
  );
};
