import "./Todo.css";

export default function Todo(props) {
  return (
    <section className="todo" id={props.id}>
      <span>{props.data}</span>
      <div className="btns">
        <button className="btn-edit" onClick={props.edit}>Edit</button>
        <button className="btn-delete" onClick={props.delete}>
          X
        </button>
      </div>
    </section>
  );
}
