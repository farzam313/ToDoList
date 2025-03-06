import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { NewContext } from "./NewContext";

const TodoList = () => {
  let { todo } = useContext(NewContext);
  return (
    <div>
      <ul>
        {todo.map((item, index) => (
          <TodoItem key={index} todo={item} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
