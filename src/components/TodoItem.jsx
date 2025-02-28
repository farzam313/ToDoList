import React from "react";
import EditTodo from "./EditTodo";
import DeletTodo from "./DeletTodo";

const TodoItem = () => {
  return (
    <div>
      <li className="relative flex items-center justify-between px-2 py-6 border-b">
        <div>
          <input type="checkbox" className="" />
          <p className="inline-block mt-1 ml-2 text-gray-600">
            Eating breakfast at 7:00{" "}
          </p>
        </div>

        <button
          type="button"
          className="absolute right-0 flex items-center space-x-1"
        >
          <DeletTodo />
          <EditTodo />
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
