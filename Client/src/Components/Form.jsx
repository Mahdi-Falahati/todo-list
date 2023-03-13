import { useState } from "react";
import './Form.css';

export default function Form(props) {
  const [todo, setTodo] = useState("");

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (todo.trim()) {
      props.data(todo);
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
