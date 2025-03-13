import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, SET_FILTER } from "./actions";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  filter: "ALL",
};

export const todoReducer = (state = initialState, action) => {
  let newTodos;
  switch (action.type) {
    case ADD_TODO:
      newTodos = [...state.todos, { id: Date.now(), text: action.payload, completed: false }];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { ...state, todos: newTodos };

    case DELETE_TODO:
      newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { ...state, todos: newTodos };

    case TOGGLE_TODO:
      newTodos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { ...state, todos: newTodos };

    case SET_FILTER:
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};
