import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</span>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
    </li>
  );
};

export default TodoItem;
