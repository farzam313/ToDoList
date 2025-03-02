import React from "react";
import EditToDoIcon from "./EditToDoIcon";
import DeletToDoIcon from "./DeletToDoIcon";

const TodoItem = ({ todo, statusHandler, removeTodoHandler }) => {
  return (
    <div>
      <li className="relative flex items-center justify-between px-2 py-6 border-b">
        <div>
          <input
            type="checkbox"
            className=""
            checked={todo.status}
            onChange={() => {
              statusHandler(todo.id);
            }}
          />
          <p
            className={`inline-block mt-1 ml-2 text-gray-600 ${
              todo.status ? "line-through" : " "
            }`}
          >
            {todo.title}
          </p>
        </div>

        <button
          type="button"
          className="absolute right-0 flex items-center space-x-1"
        >
          <DeletToDoIcon removeTodoHandler={removeTodoHandler} todo={todo} />
          <EditToDoIcon />
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
