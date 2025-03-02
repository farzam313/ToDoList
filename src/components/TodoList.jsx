import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todo, statusHandler, removeTodoHandler }) => {
  return (
    <div>
      <ul>
        {todo.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            statusHandler={statusHandler}
            removeTodoHandler={removeTodoHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
