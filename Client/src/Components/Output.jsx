import Todo from "./Todo";

import "./Output.css";
import { useContext, useEffect, useState } from "react";
import { getAllTodo } from "../API/TodoApi";
import { StoreContext } from "../StoreContext";

export default function Output() {
  const [allTodo, setTodo] = useState([]);
  const ctx = useContext(StoreContext);

  useEffect(() => {
    getAllTodo().then((data) => {
      setTodo(data.data);
    });
    if (ctx.store) {
      getAllTodo().then((data) => {
        setTodo(data.data);
      });
    }
  }, [ctx]);

  return (
    <section className="output">
      {allTodo?.map((data) => (
        <Todo data={data.text} id={data["_id"]} key={data["_id"]} />
      ))}
    </section>
  );
}
