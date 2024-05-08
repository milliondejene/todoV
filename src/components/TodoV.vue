<template>
  <div class="bg-gray-100 min-h-screen flex justify-center items-center">
    <div class="max-w-md w-full p-6 bg-white rounded-md shadow-md">
      <h1 class="text-3xl font-bold text-center mb-6">My Todo List</h1>
      <!-- Title Input -->
      <div class="mb-4">
        <input v-model.trim="newTitle" @keyup.enter="addTodo"
          class="flex-1 py-2 px-4 rounded-md border border-gray-300 outline-none mb-2 w-full"
          placeholder="Enter title">
        <!-- Description Input -->
        <textarea v-model.trim="newDescription" @keyup.enter="addTodo"
          class="flex-1 py-2 px-4 rounded-md border border-gray-300 outline-none resize-none w-full"
          placeholder="Enter description"></textarea>
      </div>
      <!-- Add Todo Button -->
      <button @click="addTodo" class="py-2 px-4 bg-blue-500 text-white rounded-md w-full mb-4">
        Add Todo
      </button>
      <!-- Todo List -->
      <ul>
        <li v-for="(todo, index) in todos" :key="index"
          class="flex items-center justify-between py-2 px-4 bg-gray-200 mb-2 rounded-md">
          <span class="text-gray-800">{{ todo.title }}</span>
          <button @click="deleteTodo(index)" class="text-red-500">
            <svg class="h-4 w-4" fill="none" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path
                d="M6 18L18 6M6 6l12 12">
              </path>
            </svg>
          </button>
        </li>
        <li v-if="todos.length === 0" class="text-gray-500 py-2 px-4 text-center">No todos yet!</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTitle: '',
      newDescription: '',
      todos: []
    };
  },
  methods: {
    addTodo() {
      if (this.newTitle.trim() !== '' && this.newDescription.trim() !== '') {
        this.todos.push({ title: this.newTitle.trim(), description: this.newDescription.trim() });
        this.newTitle = '';
        this.newDescription = '';
      }
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    }
  }
};
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
