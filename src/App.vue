<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    

    
      

      <nav>
        <RouterLink to="/Inicio">Inicio</RouterLink>
        <RouterLink to="/Contacto">Contacto</RouterLink>
        <RouterLink to="/Producto">Producto</RouterLink>
        <RouterLink to="/Registro">Registros</RouterLink>

      </nav>
    
  </header>

  <RouterView />
</template>

<style scoped>
header {
  background: linear-gradient(90deg, #1C4BC2, #008ec6); 
  padding: 1rem; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
}

nav {
  display: flex; 
  justify-content: center; 
  gap: 2rem; 
}

nav a {
  color: white; 
  text-decoration: none; 
  font-size: 1.2rem; 
  font-weight: bold; 
  transition: color 0.3s ease, transform 0.3s ease; 
}

nav a:hover {
  color: #f0a500; 
  transform: scale(1.1); 
}

  RouterView {
  margin-top: 2rem;
}

</style>
