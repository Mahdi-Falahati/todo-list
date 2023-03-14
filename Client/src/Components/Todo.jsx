import { deleteTodo } from "../API/TodoApi";
import "./Todo.css";

export default function Todo({ data, id }) {
  const deleteTodoHandler = (e) => {
    const todo = e.target.parentElement.parentElement;
    deleteTodo(todo.id);
    todo.classList.value += " remove";
    setTimeout(() => {
      todo.remove();
    }, 1500);
  };

  return (
    <section className="todo" id={id}>
      <span>{data}</span>
      <div className="btns">
        <button className="btn-edit">Edit</button>
        <button className="btn-delete" onClick={deleteTodoHandler}>
          X
        </button>
      </div>
    </section>
  );
}
