import axios from "axios";

const baseUrl = "http://localhost:5000/";

export async function getAllTodo() {
  try {
    const todo = axios.get(baseUrl);
    return todo;
  } catch (error) {
    console.log(error);
  }
}

export async function updateTodo(id, todo) {
  try {
    console.log(baseUrl + id);
    await axios.patch(baseUrl + id, todo);
  } catch (error) {
    console.log(error);
  }
}

export async function createTodo(todo) {
  try {
    await axios.post(baseUrl + "save", todo);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTodo(id) {
  try {
    console.log(baseUrl + id);
    await axios.delete(baseUrl + id);
  } catch (error) {
    console.log(error);
  }
}
