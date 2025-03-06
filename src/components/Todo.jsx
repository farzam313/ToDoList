import React, { useContext, useState } from "react";
import TodoList from "./TodoList";
import { NewContext } from "./NewContext";

const Todo = () => {
  let { addTodo } = useContext(NewContext);
  return (
    <div>
      <div className="bg-gray-100">
        <div className="flex items-center justify-center h-screen">
          <div className="w-full px-4 py-8 mx-auto shadow lg:w-2/4  bg-white">
            <div className="flex items-center mb-6">
              <h3 className=" m-auto text-4xl font-bold text-blue-600 ">
                To-Do List
              </h3>
            </div>
            <div className="relative">
              <input
                type="text"
                onKeyDown={addTodo}
                placeholder="Write down your task then Enter 🏹"
                className="w-full px-2 py-3 border rounded outline-none border-grey-600"
              />
            </div>
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
