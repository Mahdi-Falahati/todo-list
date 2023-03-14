import Todo from "./Todo";

import "./Output.css";
import { useContext, useEffect, useState } from "react";

import { getAllTodo, updateTodo } from "../API/TodoApi";
import { deleteTodo } from "../API/TodoApi";

import { StoreContext } from "../StoreContext";
import EditModal from "./EditModal";

export default function Output() {
  const [allTodo, setTodo] = useState([]);
  const [text, setText] = useState({});
  const ctx = useContext(StoreContext);

  useEffect(() => {
    getAllTodo().then((data) => {
      setTodo(data.data);
    });
    ctx.storeSetterToggle(false);
  }, [ctx]);

  const deleteTodoHandler = (e) => {
    const todo = e.target.parentElement.parentElement;
    deleteTodo(todo.id);
    todo.classList.value += " remove";

    const result = allTodo.filter((data) => {
      return todo.id !== data["_id"];
    });
    setTodo(result);

    setTimeout(() => {
      todo.remove();
    }, 1500);
  };

  const editTodoHandler = (e) => {
    setText({
      text: e.target.parentElement.parentElement.firstChild.innerHTML,
      id: e.target.parentElement.parentElement.id,
    });
    ctx.setModalToggle();
  };

  const updateTodoHandler = (todo) => {
    updateTodo(todo.id, todo.text);
  };

  return (
    <section className="output">
      {allTodo?.map((data) => (
        <Todo
          delete={deleteTodoHandler}
          edit={editTodoHandler}
          data={data.text}
          id={data["_id"]}
          key={data["_id"]}
        />
      ))}
      {ctx.modal && <EditModal data={text} update={updateTodoHandler} />}
    </section>
  );
}
