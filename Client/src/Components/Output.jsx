import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

import "./Output.css"

export default function Output({ todoes }) {
  return (
    <section className="output">
      {todoes?.map((data) => (
        <Todo data={data} key={uuidv4()} />
      ))}
    </section>
  );
}
