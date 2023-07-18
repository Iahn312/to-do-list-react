import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faX } from "@fortawesome/free-solid-svg-icons";
import { faCircle, faCircleCheck } from "@fortawesome/free-regular-svg-icons";

import { todoActions } from "../store/todoSlice";

export default function TodoItem({ data, index }) {
  const dispatch = useDispatch();

  const editTodoHandler = (e) => {
    dispatch(todoActions.editTodo(e.target.id));
  };

  const deleteTodoHandler = (e) => {
    dispatch(todoActions.deleteTodo(e.target.id));
  };

  const toggleCompletedHandler = (e) => {
    // dispatch(todoActions.toggleComplete(e.target));
    dispatch(
      todoActions.toggleComplete({ id: e.target.id, checked: e.target.checked })
    );
  };

  const changingTodoHandler = (e) => {
    dispatch(
      todoActions.changingTodo({ id: e.target.id, content: e.target.value })
    );
  };

  const changedTodoHandler = (e) => {
    if (e.keyCode === 13) {
      dispatch(
        todoActions.changedTodo({
          id: e.target.id,
          content: e.target.value.trim(),
        })
      );
      e.target.value = "";
    }
  };

  const onBlurHandler = (e) => {
    dispatch(
      todoActions.changedTodo({
        id: e.target.id,
        content: e.target.value.trim(),
      })
    );
    e.target.value = "";
  };

  return (
    <li
      className="relative w-full pb-1 flex justify-start items-center mb-1 text-xl font-medium text-gray-800 border-b-[1px] border-gray-200"
      key={index}
    >
      <input
        id={index}
        className="appearance-none z-10 h-[32px] w-[32px] cursor-pointer"
        type="checkbox"
        checked={data.isCompleted}
        onChange={toggleCompletedHandler}
      />
      <FontAwesomeIcon
        className={`absolute hover:text-green-400 p-1 mr-2 ${
          data.isCompleted ? "text-green-500" : "text-gray-500"
        }`}
        icon={data.isCompleted ? faCircleCheck : faCircle}
      />
      <p
        id={index}
        className={`w-full cursor-pointer text-start transition ease-in ${
          data.isCompleted ? "line-through text-gray-400" : ""
        } ${data.isEditing ? "hidden" : ""}`}
        onDoubleClick={editTodoHandler}
      >
        {data.content}
      </p>
      <button
        id={index}
        className="absolute mb-auto mt-auto mr-0 ml-0 right-5 bottom-2 text-red-600 text-[15px] transition ease-in-out hover:transform hover:scale-150"
        onClick={deleteTodoHandler}
      >
        {/* <FontAwesomeIcon
            className="absolute right-5 bottom-4 text-red-600 text-[15px]"
            icon={faX}
          /> */}
        X
      </button>
      <input
        id={index}
        className={`${data.isEditing ? "" : "hidden"}`}
        value={data.content}
        onChange={changingTodoHandler}
        onKeyUp={changedTodoHandler}
        onBlur={onBlurHandler}
        autoFocus
      />
    </li>
  );
}
