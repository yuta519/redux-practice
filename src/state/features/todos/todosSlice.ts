import { createSlice } from "@reduxjs/toolkit";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type Action<T> = {
  type: string;
  payload: T;
};

const todosSlice = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state: Todo[], action: Action<Todo>) => {
      state.push(action.payload);
    },
    removeTodo: (state: Todo[], action: Action<number>) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) state.splice(index, 1);
    },
    toggleTodo: (state: Todo[], action: Action<number>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
