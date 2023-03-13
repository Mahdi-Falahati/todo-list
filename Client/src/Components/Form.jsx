import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { createTodo } from "../API/TodoApi";
import "./Form.css";

export default function Form(props) {
  const [todo, setTodo] = useState("");

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (todo.trim()) {
      props.data({text:todo,_id:uuidv4()});
      createTodo(todo);
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
