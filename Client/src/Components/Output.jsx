import Todo from "./Todo";

import "./Output.css";
import { useEffect, useState } from "react";
import { getAllTodo } from "../API/TodoApi";

export default function Output({ todoes }) {
  const [allTodo, setTodo] = useState([]);

  useEffect(() => {
    getAllTodo().then((data) => {
      setTodo(data.data);
    });
  }, []);

  return (
    <section className="output">
      {todoes?.map((data) => (
        <Todo data={data.text} id={data['_id']} key={data['_id']}/>
      ))}
      
    </section>
  );
}
