<template>
    <div class="background">
      <div class="texto-container">
        <h1 class="titulo">Registros de Actividad</h1>
  
        <table v-if="registros.length > 0" class="registro-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha y Hora</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="registro in registros" :key="registro.id">
              <td>{{ registro.id }}</td>
              <td>{{ registro.timestamp }}</td>
              <td>{{ registro.action }}</td>
            </tr>
          </tbody>
        </table>
  
        <p v-else class="no-registros">No hay registros disponibles.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        registros: [] 
      };
    },
    mounted() {
      
      this.obtenerRegistros();
    },
    methods: {
      async obtenerRegistros() {
        try {
          
          const response = await fetch('http://localhost:3001/registros');
          
         
          if (!response.ok) {
            throw new Error('Error al obtener los registros');
          }
          
          
          this.registros = await response.json();
        } catch (error) {
          console.error('Error al obtener los registros:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  
  .background {
    background-image: url('/public/45.jpg'); 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  
  .texto-container {
    background-color: rgba(0, 0, 0, 0.7); 
    padding: 2rem;
    border-radius: 8px;
    color: white;
    max-width: 800px;
    width: 100%;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }
  
 
  .titulo {
    color: #fff;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-family: 'Arial', sans-serif;
  }
  
 
  .registro-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    color: #fef9f9;
  }
  
  .registro-table th, .registro-table td {
    padding: 10px 15px;
    border: 1px solid #1e3a8a; 
    text-align: center;
  }
  
  .registro-table th {
    background-color: #1d6ea8; 
    color: white;
  }
  
  .registro-table tr:nth-child(even) {
    background-color: #1d6ea8; 
  }
  
  .registro-table tr:hover {
    background-color: #213d42; 
  }
  
  
  .no-registros {
    color: #f0f4f8;
    font-size: 1.5rem;
    margin-top: 20px;
    text-align: center;
  }
  
  
  .btn {
    background-color: #00d4ff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    margin-top: 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
  }
  
  .btn:hover {
    background-color: #0099cc;
  }
  </style>
  