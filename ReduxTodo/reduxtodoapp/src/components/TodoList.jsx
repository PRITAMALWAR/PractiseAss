import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, filter } = useSelector((state) => state);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "COMPLETED") return todo.completed;
    if (filter === "PENDING") return !todo.completed;
    return true;
  });

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
