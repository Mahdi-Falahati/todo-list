import Todo from "./Todo";

import "./Output.css";
import { useContext, useEffect, useState } from "react";

import { getAllTodo, updateTodo } from "../API/TodoApi";
import { deleteTodo } from "../API/TodoApi";

import { StoreContext } from "../StoreContext";
import EditModal from "./EditModal";

export default function Output() {
  const [allTodo, setTodo] = useState([]);
  const [validate, setValidate] = useState(false);
  const [text, setText] = useState({});
  const ctx = useContext(StoreContext);

  useEffect(() => {
    getAllTodo().then((data) => {
      setValidate(true);
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

    setTimeout(() => {
      setTodo(result);
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

    const result = allTodo.map((data) => {
      if (todo.id === data["_id"]) {
        return {
          text: todo.text,
          _id: todo.id,
        };
      } else {
        return data;
      }
    });
    setTodo(result);
  };

  const resultTodo = allTodo?.map((data) => (
    <Todo
      delete={deleteTodoHandler}
      edit={editTodoHandler}
      data={data.text}
      id={data["_id"]}
      key={data["_id"]}
    />
  ));

  return (
    <section className="output">
      {!validate && <p className="loading">Is Loading...</p>}
      {validate && resultTodo}
      {ctx.modal && <EditModal data={text} update={updateTodoHandler} />}
    </section>
  );
}
