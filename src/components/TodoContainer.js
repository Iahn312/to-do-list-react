import React from "react";
import { useSelector } from "react-redux";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

export default function TodoContainer() {
  const todoSlice = useSelector((state) => state.todoSlice);
  return (
    <div className=" mt-3 mb-1 mr-2 ml-2">
      <TodoForm />
      {todoSlice.length > 0 && <TodoList />}
      {todoSlice.length > 0 && <TodoFooter />}
    </div>
  );
}
