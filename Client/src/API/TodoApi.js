import axios from "axios";

const baseUrl = "http://localhost:5000/";

export const getAllTodo = async () => {
  try {
    const todo = axios.get(baseUrl);
    return todo;
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (id, todo) => {
  try {
    console.log(baseUrl + id);
    await axios.patch(baseUrl + id, todo);
  } catch (error) {
    console.log(error);
  }
};

export const createTodo = async (todo) => {
  try {
    await axios.post(baseUrl+"save", todo);
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (id) => {
  try {
    console.log(baseUrl + id);
    await axios.delete(baseUrl + id);
  } catch (error) {
    console.log(error);
  }
};