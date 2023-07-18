import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/uiSlice";
import { todoActions } from "../store/todoSlice";

export default function TodoFooter() {
  const dispatch = useDispatch();
  const todoSlice = useSelector((state) => state.todoSlice);
  const uiSlice = useSelector((state) => state.uiSlice);
  const itemLeft = todoSlice.filter(
    (item) => item.isCompleted === false
  ).length;

  const filterStatus = {
    all: () => true,
    active: (item) => !item.isCompleted,
    completed: (item) => item.isCompleted,
  };

  const switchStatusHandler = (e) => {
    dispatch(uiActions.switchStatus(e.target.id));
    dispatch(
      todoActions.replaceTodo(todoSlice.filter(filterStatus[e.target.id]) || [])
    );
  };

  const clearCompleteHandler = () => {
    dispatch(todoActions.clearCompleted());
  };

  return (
    <div className="flex justify-between items-center mt-2 text-gray-500">
      <p className="ml-1">
        <strong>{itemLeft}</strong> item left
      </p>
      <div className="flex gap-4">
        <p
          id="all"
          className={`py-[2px] px-[5px] border-[2px] cursor-pointer rounded-xl hover:border-red-200 transition ease-in-out ${
            uiSlice.status === "all"
              ? "border-red-500 hover:border-red-500"
              : "border-transparent"
          }`}
          onClick={switchStatusHandler}
        >
          All
        </p>
        <p
          id="active"
          className={`py-[2px] px-[5px] border-[2px] cursor-pointer rounded-xl hover:border-red-200 transition ease-in-out ${
            uiSlice.status === "active"
              ? "border-red-500 hover:border-red-500"
              : "border-transparent"
          }`}
          onClick={switchStatusHandler}
        >
          Active
        </p>
        <p
          id="completed"
          className={`py-[2px] px-[5px] border-[2px] cursor-pointer rounded-xl hover:border-red-200 transition ease-in-out ${
            uiSlice.status === "completed"
              ? "border-red-500 hover:border-red-500"
              : "border-transparent"
          }`}
          onClick={switchStatusHandler}
        >
          Completed
        </p>
      </div>
      <p className="cursor-pointer" onClick={clearCompleteHandler}>
        Clear completed
      </p>
    </div>
  );
}
