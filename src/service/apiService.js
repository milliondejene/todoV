// apiService.js

import axios from "axios";

const baseURL = "http://localhost:8000"; // Replace with your Django backend URL

// Function to add a new todo
export const addTodo = async (title, description, completed = false) => {
  try {
    const response = await axios.post(`${baseURL}/tasks/`, {
      title: title.trim(),
      description: description.trim(),
      completed: false, // Set default value to false
      created_at: new Date().toISOString(), // Add current timestamp
    });
    return response.data; // Assuming your backend returns the added todo
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error; // Throw the error to handle it in the component
  }
};

// Function to fetch todos
export const fetchTodos = async () => {
  try {
    const response = await axios.get(`${baseURL}/tasks/`);
    return response.data; // Assuming your backend returns the list of todos
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error; // Throw the error to handle it in the component
  }
};

// Function to delete a todo
export const deleteTodo = async (todoId) => {
  try {
    const response = await axios.delete(`${baseURL}/tasks/${todoId}/`);
    return response.data; // Assuming your backend returns a success message
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error; // Throw the error to handle it in the component
  }
};

// Function to update a todo
export const updateTodo = async (todoId, title, description, completed) => {
  try {
    const response = await axios.put(`${baseURL}/tasks/${todoId}/`, {
      title: title.trim(),
      description: description.trim(),
      completed: completed,
    });
    return response.data; // Assuming your backend returns the updated todo
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error; // Throw the error to handle it in the component
  }
};
