import React, { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  let [todo, setTodo] = useState([]);

  function addTodo(event) {
    if (event.target.value == " ") {
    } else if (event.key == "Enter") {
      let newTodo = { id: uuidv4(), title: event.target.value, status: false };
      setTodo([...todo, newTodo]);
      event.target.value = "";
    }
  }

  function statusHandler(id) {
    let updatedTodo = todo.map((item) => {
      if (item.id == id) {
        return { ...item, status: !item.status };
      }
      return item;
    });
    setTodo(updatedTodo);
  }

  function removeTodoHandler(id) {
    // console.log(id);
    let NewTodo = todo.filter((item) => {
      return (item.id = !id);

      setTodo(NewTodo);
    });
  }
  return (
    <div>
      <div className="bg-gray-100">
        <div className="flex items-center justify-center h-screen">
          <div className="w-full px-4 py-8 mx-auto shadow lg:w-2/4  bg-white">
            <div className="flex items-center mb-6">
              <h3 className=" m-auto text-4xl font-bold text-blue-600 ">
                {" "}
                To-Do List
              </h3>
            </div>
            <div className="relative">
              <input
                type="text"
                onKeyDown={addTodo}
                placeholder="Write down your task then Enter"
                className="w-full px-2 py-3 border rounded outline-none border-grey-600"
              />
            </div>
            <TodoList
              todo={todo}
              statusHandler={statusHandler}
              removeTodoHandler={removeTodoHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
