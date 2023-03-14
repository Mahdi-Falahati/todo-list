import Todo from "./Todo";

import "./Output.css";
import { useContext, useEffect, useState } from "react";

import { getAllTodo } from "../API/TodoApi";
import { deleteTodo } from "../API/TodoApi";

import { StoreContext } from "../StoreContext";

export default function Output() {
  const [allTodo, setTodo] = useState([]);
  const ctx = useContext(StoreContext);

  useEffect(() => {
    getAllTodo().then((data) => {
      setTodo(data.data);
    });
    ctx.storeSetterToggle(false);
  }, [ctx]);

  const deleteTodoHandler = (e) => {
    const todo = e.target.parentElement.parentElement;
    deleteTodo(todo.id);
    todo.classList.value += " remove";

    const result = allTodo.filter((data) => {
      return todo.id !== data["_id"];
    });
    setTodo(result);

    setTimeout(() => {
      todo.remove();
    }, 1500);
  };
  console.log(allTodo);

  return (
    <section className="output">
      {allTodo?.map((data) => (
        <Todo
          delete={deleteTodoHandler}
          data={data.text}
          id={data["_id"]}
          key={data["_id"]}
        />
      ))}
    </section>
  );
}
