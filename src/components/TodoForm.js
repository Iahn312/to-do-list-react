import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { todoActions } from "../store/todoSlice";

export default function TodoForm() {
  const dispatch = useDispatch();

  const toggleAll = (e) => {
    dispatch(todoActions.toggleAll(e.target.checked));
  };

  const inputTodoHandler = (e) => {
    if (e.keyCode === 13) {
      dispatch(
        todoActions.addTodo({
          content: e.target.value.trim(),
          isCompleted: false,
          isEditing: false,
        })
      );
      e.target.value = "";
    }
  };
  return (
    <div className="relative flex w-full mb-2 items-center border-b-[1px] border-gray-200">
      <input
        type="checkbox"
        className="appearance-none w-[32px] h-[32px] z-10 cursor-pointer"
        onChange={toggleAll}
      />
      <FontAwesomeIcon
        icon={faChevronDown}
        className="absolute p-2 pr-3 text-sm text-gray-500 cursor-pointer hover:translate-y-1 transition ease-in-out"
      />
      <input
        type="text"
        className="bg-transparent w-full active:border-gray-400"
        placeholder="What needs to be done?"
        onKeyUp={inputTodoHandler}
        autoFocus
      />
    </div>
  );
}
