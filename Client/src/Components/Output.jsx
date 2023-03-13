import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

export default function Output({ todoes }) {
  return (
    <section>
      {todoes?.map((data) => (
        <Todo data={data} key={uuidv4()} />
      ))}
    </section>
  );
}
