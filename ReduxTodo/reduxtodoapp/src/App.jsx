import React from "react";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

const App = () => {
  return (
      <div>
        <h1>Todo App</h1>
        <TodoInput />
        <Filter />
        <TodoList />
      </div>
  );
};

export default App;
