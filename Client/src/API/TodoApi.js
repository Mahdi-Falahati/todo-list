import axios from "axios";

const baseUrl = "https://fullstackserver-zw0m.onrender.com/";

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
    await axios.patch(baseUrl + id, { "text": todo });
  } catch (error) {
    console.log(error);
  }
}

export async function createTodo(todo) {
  try {
    await axios.post(baseUrl + "save", { "text": todo });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTodo(id) {
  try {
    await axios.delete(baseUrl + id);
  } catch (error) {
    console.log(error);
  }
}
