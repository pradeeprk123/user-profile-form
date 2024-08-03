import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import UserForm from './components/UserForm.vue'
import UserProfile from './components/UserProfile.vue'

const routes = [
    { path: '/', component: UserForm },
    { path: '/profile', component: UserProfile }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')