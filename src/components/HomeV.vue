<template>
    <div class="bg-gray-100 min-h-screen flex justify-center items-center">
      <div class="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h1 class="text-3xl font-bold text-center mb-6">Welcome to Todo App</h1>
        <p class="text-center text-gray-600 mb-6">Start organizing your tasks today!</p>
        <router-link to="/todo" class="block w-full text-center py-2 px-4 bg-blue-500 text-white rounded-md
          hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Go to Todo List
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Your script logic can go here
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here if needed */
  </style>
  