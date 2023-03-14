import { useContext, useState } from "react";
import "./EditModal.css";
import { StoreContext } from "../StoreContext";

export default function EditModal({ data }) {
  const [todo, setTodo] = useState(data);
  const ctx = useContext(StoreContext);
  const submitHandler = (e) => {
    e.preventDefault();
    ctx.setModalToggle();
  };

  const closeModalHandler = (e) => {
    e.stopPropagation();
    ctx.setModalToggle();
  };

  return (
    <section className="modal">
      <div>
        <p className="preview">
          Preview : <span>{todo}</span>
        </p>
      <div className="closeWrap">
        <button className="close" onClick={closeModalHandler}>
          X
        </button>
      </div>
        <form className="from__edit-todo" onSubmit={submitHandler}>
          <textarea
            type="text"
            placeholder="Wrtie your todo..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="input__edit-todo"
          />
          <button className="btn__edit-submit">Edit Todo</button>
        </form>
      </div>
    </section>
  );
}
