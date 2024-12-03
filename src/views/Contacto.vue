<template>
  <div class="background">
    <div class="texto-container">
      <h1 class="titulo">Contáctanos</h1>
      <div class="card">
        <h3 class="subtitulo">Información de Contacto</h3>
        <div class="contact-info">
          <p><strong>Email:</strong> locksafe399@gmail.com</p>
          <p><strong>Teléfono:</strong> 3311290064</p>
        </div>
      </div>

      <div class="card">
        <h3 class="subtitulo">Formulario de Contacto</h3>
        <form action="http://localhost:3000/send-email" method="POST">
          <div class="input-group">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
          </div>
          <div class="input-group">
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div class="input-group">
            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>

      <div class="card">
        <h3 class="subtitulo">Redes Sociales</h3>
        <p class="social-links">
          <a href="https://facebook.com" target="_blank">Facebook</a> |
          <a href="https://twitter.com" target="_blank">Twitter</a> |
          <a href="https://instagram.com" target="_blank">Instagram</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>

.background {
  background-image: url('/public/Servidores.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
  min-height: 100vh;
}


.texto-container {
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 1.5rem;
  max-width: 500px;
  width: 100%;
  text-align: center;
  color: #fff;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}


.titulo {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.subtitulo {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}


.card {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  text-align: left;
  font-size: 0.9rem;
}


.contact-info p {
  margin: 0.4rem 0;
  line-height: 1.4;
}


form {
  display: flex;
  flex-direction: column;
  gap: 1rem; 
}

.input-group {
  text-align: left;
}

label {
  font-weight: bold;
  color: #ddd;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
}

input[type="text"],
input[type="email"],
textarea {
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  width: 95%;
  font-size: 0.9rem;
  outline: none;
  transition: all 0.3s ease;
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
  background-color: rgba(255, 255, 255, 0.15);
  border: 1px solid #80d0ff;
  box-shadow: 0 0 5px rgba(128, 208, 255, 0.4);
}

textarea {
  resize: vertical;
  min-height: 80px;
}

button[type="submit"] {
  background-color: #80d0ff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #66c0f4;
  transform: translateY(-2px);
  box-shadow: 0 3px 8px rgba(128, 208, 255, 0.3);
}

/* Redes sociales */
.social-links {
  font-size: 0.9rem;
}

.social-links a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  margin: 0 0.5rem;
}

.social-links a:hover {
  color: #80d0ff;
  text-decoration: underline;
}

/* Flujo natural: Contenido adaptable */
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  overflow-x: hidden; /* Evitar scroll lateral */
}

</style>
