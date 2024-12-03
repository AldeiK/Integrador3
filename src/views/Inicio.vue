<template>
  <div class="background">
  
    
    <div class="texto-container" v-html="texto"></div>
  </div>
</template>

<script setup>


let texto = `
  <h1 class="titulo">Bienvenido al Futuro de la Seguridad</h1>
  <p class="descripcion">
    Simplifica tu vida y protege lo que más importa con nuestras cerraduras inteligentes.
    Olvídate de las llaves tradicionales y disfruta de un acceso seguro y personalizado a tu hogar u oficina con solo un toque.
    Nuestras soluciones combinan tecnología avanzada con un diseño intuitivo para ofrecerte la máxima comodidad, conectividad y protección.
  </p>
  <h2 class="subtitulo">Tu seguridad, ahora más inteligente.</h2>
`;
</script>

<style scoped>
.background {
  background-image: url('/public/DALL·E\ 2024-10-25\ 10.37.43\ -\ A\ stylish\,\ high-tech\ background\ for\ a\ smart\ lock\ webpage.\ The\ focus\ is\ on\ a\ modern\,\ digital\ smart\ lock\ with\ a\ sleek\ design\ on\ a\ smooth\ dark\ door.\ Soft.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden; 
}

.logo {
  width: 135px;
  height: auto;
  position: absolute;
  top: 20px; 
  left: 20px; 
}

.texto-container {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2rem;
  border-radius: 8px;
  color: white;
  max-width: 600px;
  text-align: center;
}

.titulo {
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-family: 'Arial', sans-serif;
}

.descripcion {
  color: #f0f4f8;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.subtitulo {
  color: #00d4ff;
  font-size: 1.8rem;
  margin-top: 1rem;
  font-family: 'Arial', sans-serif;
}
</style>

<style>
body {
  overflow: hidden;
  margin: 0;
  padding: 0;
}
</style>
