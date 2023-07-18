import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todoSlice = useSelector((state) => state.todoSlice);

  const status = useSelector((state) => state.uiSlice.status);
  const filterStatus = {
    all: () => true,
    active: (item) => !item.isCompleted,
    completed: (item) => item.isCompleted,
  };

  return (
    <ul>
      {todoSlice.filter(filterStatus[status]).map((item, index) => (
        <TodoItem key={index} data={item} index={index} />
      ))}
    </ul>
  );
}
