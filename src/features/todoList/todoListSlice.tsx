import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoListState {
  todoList: Todo[];
}

const initialState: TodoListState = {
  todoList: [],
};

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<{ text: string }>) {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
        completed: false,
      };
      state.todoList.push(todo);
    },
    updateTodo(state, action: PayloadAction<Todo>) {
      const updatedTodo = state.todoList.find((todo) => todo.id === action.payload.id);
      if (updatedTodo) {
        updatedTodo.text = action.payload.text;
      }
    },
    deleteTodo(state, action: PayloadAction<{ id: string }>) {
      state.todoList = state.todoList.filter((todo) => todo.id !== action.payload.id);
    },
    toggleCompleteTodo(state, action: PayloadAction<{ id: string }>) {
      const toggledTodo = state.todoList.find((todo) => todo.id === action.payload.id);
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, toggleCompleteTodo } = todoListSlice.actions;
export default todoListSlice.reducer;
