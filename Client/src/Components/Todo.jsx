import { deleteTodo } from "../API/TodoApi";
import "./Todo.css";

export default function Todo({ data,id }) {
  const deleteTodoHandler =(e)=>{
    const todo = e.target.parentElement.parentElement
    deleteTodo(todo.id)
  }

  return (
    <section className="todo" id={id}>
      <span>{data}</span>
      <div className="btns">
        <button className="btn-edit">Edit</button>
        <button className="btn-delete" onClick={deleteTodoHandler}>X</button>
      </div>
    </section>
  );
}
