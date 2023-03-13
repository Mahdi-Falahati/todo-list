import { useState } from "react";
import Form from "./Components/Form";
import Output from "./Components/Output";

function App() {
  const [data, setData] = useState([]);

  const todoHandler = (todo) => {
    setData((prev) => [...prev, todo]);
  };

  return (
    <div>
      <Form data={todoHandler} />
      <Output todoes={data} />
    </div>
  );
}

export default App;
