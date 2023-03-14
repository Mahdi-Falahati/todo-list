import { useContext, useState } from "react";

import { createTodo } from "../API/TodoApi";
import { StoreContext } from "../StoreContext";
import "./Form.css";

export default function Form(props) {
  const [todo, setTodo] = useState("");
  const ctx = useContext(StoreContext);
  const submitFormHandler = (e) => {
    e.preventDefault();

    if (todo.trim()) {
      createTodo(todo);
      ctx.storeSetterToggle(true);
      setTodo("");
    }
  };

  return (
    <form onSubmit={submitFormHandler} className="from-todo">
      <textarea
        type="text"
        placeholder="Wrtie your todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="input-todo"
      />
      <button className="btn-submit">Add Todo</button>
    </form>
  );
}
