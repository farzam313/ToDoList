import React, { useContext, useState } from "react";
import EditToDoIcon from "./EditToDoIcon";
import DeletToDoIcon from "./DeletToDoIcon";
import { NewContext } from "./NewContext";

const TodoItem = ({ todo }) => {
  let [editMode, setEditMode] = useState();
  let { statusHandler, titleUpdater } = useContext(NewContext);

  function closeInput(event) {
    if (event.key == "Enter") {
      titleUpdater(todo.id, event.target.value);
      setEditMode(false);
    }
  }

  return (
    <div>
      <li className="relative flex items-center justify-between px-2 py-6 border-b">
        {editMode ? (
          <input
            type="text"
            onKeyDown={(event) => {
              closeInput(event);
            }}
            defaultValue={todo.title}
            className="w-full px-2 py-3 border rounded outline-none border-grey-600"
          />
        ) : (
          <div>
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
              <DeletToDoIcon todo={todo} />
              <EditToDoIcon
                setEditMode={setEditMode}
                titleUpdater={titleUpdater}
              />
            </button>
          </div>
        )}
      </li>
    </div>
  );
};

export default TodoItem;
