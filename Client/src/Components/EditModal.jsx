import { useContext, useState } from "react";
import "./EditModal.css";
import { StoreContext } from "../StoreContext";

export default function EditModal(props) {
  const [todo, setTodo] = useState(props.data);
  const ctx = useContext(StoreContext);

  const submitHandler = (e) => {
    e.preventDefault();
    ctx.setModalToggle();
    props.update(todo);
  };

  const closeModalHandler = (e) => {
    ctx.setModalToggle();
  };

  return (
    <section className="modal">
      <div>
        <p className="preview">
          Preview : <span>{todo.text}</span>
        </p>
        <div className="closeWrap">
          <button className="close" onClick={closeModalHandler}>
            X
          </button>
        </div>
        <form className="from__edit-todo" id={todo.id} onSubmit={submitHandler}>
          <textarea
            type="text"
            placeholder="Wrtie your todo..."
            value={todo.text}
            onChange={(e) => setTodo({text:e.target.value,id:todo.id})}
            className="input__edit-todo"
          />
          <button className="btn__edit-submit">Edit Todo</button>
        </form>
      </div>
    </section>
  );
}
