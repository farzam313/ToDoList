import { createContext } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export let NewContext = createContext();
export function AppDataProvider({ children }) {
  let [todo, setTodo] = useState([]);

  function addTodo(event) {
    if (event.target.value == "") {
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
      return item.id != id;
    });
    setTodo(NewTodo);
  }
  function titleUpdater(todoId, newTitle) {
    let updatedTitle = todo.map((item) => {
      if (item.id == todoId) {
        item.title = newTitle;

        return item;
      }
      return item;
    });
    setTodo(updatedTitle);
  }
  return (
    <NewContext.Provider
      value={{ todo, addTodo, statusHandler, removeTodoHandler, titleUpdater }}
    >
      {children}
    </NewContext.Provider>
  );
}
