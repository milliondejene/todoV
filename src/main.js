import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/HomeV.vue'
import About from './components/TodoV.vue'
import '../src/style.css'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/todo', component: About },

  ]
})

createApp(App).use(router).mount('#app')
