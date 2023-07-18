import { createSlice } from "@reduxjs/toolkit";

let DUMMY_TODOS = [
  {
    content: "Learn Javascript",
    isCompleted: true,
    isEditing: false,
  },
  {
    content: "Learn ReactJS",
    isCompleted: false,
    isEditing: false,
  },
];

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: DUMMY_TODOS,
  reducers: {
    addTodo(state, action) {
      if (action.payload.content) {
        state.push(action.payload);
      }
    },
    toggleComplete(state, action) {
      const id = action.payload.id;
      state[id].isCompleted = action.payload.checked;
    },
    toggleAll(state, action) {
      state.forEach((item) => (item.isCompleted = action.payload));
    },
    deleteTodo(state, action) {
      const id = action.payload;
      state.splice(id, 1);
    },
    replaceTodo(state, action) {
      const newState = action.payload;
      state = [...newState];
    },
    clearCompleted(state) {
      const newState = DUMMY_TODOS.filter((item) => !item.isCompleted) || [];
      state = newState;
    },
    editTodo(state, action) {
      const id = action.payload;

      state[id].isEditing = true;
    },
    changingTodo(state, action) {
      const id = action.payload.id;
      state[id].content = action.payload.content;
    },
    changedTodo(state, action) {
      const id = action.payload.id;
      state[id].content = action.payload.content;
      state[id].isEditing = false;
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
