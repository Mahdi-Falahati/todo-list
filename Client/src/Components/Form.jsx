import { useState } from "react";

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
    <form onSubmit={submitFormHandler}>
      <input
        type="text"
        placeholder="Wrtie your todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
}
