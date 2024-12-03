import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Inicio from '../views/Inicio.vue'
import contacto from '../views/Contacto.vue'
import producto from '../views/Producto.vue'
import Registro from '../views/Registro.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Inicio',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/Contacto',
      name: 'Contacto',
      component: contacto
    },
    {
      path: '/Producto',
      name: 'Producto',
      component: producto
    },
    {
      path: '/Registro',
      name: 'Registro',
      component: Registro
    }
  ]
})

export default router
