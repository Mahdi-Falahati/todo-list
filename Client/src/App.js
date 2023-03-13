import Form from "./Components/Form";

function App() {
  const todoHandler = (todo)=>{
    console.log(todo);
  }
  return (
    <div>
      <Form data={todoHandler}/>
    </div>
  );
}

export default App;
