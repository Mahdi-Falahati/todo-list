import "./Todo.css";

export default function Todo({ data,id }) {
  return (
    <section className="todo" id={id}>
      <span>{data}</span>
      <div className="btns">
        <button className="btn-edit">Edit</button>
        <button className="btn-delete">X</button>
      </div>
    </section>
  );
}
