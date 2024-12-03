<template>
  <div class="background">
    <div class="texto-container">
      <h1 class="titulo">Cerradura Inteligente</h1>
      <p class="descripcion">
        ¡No esperes más! Mejora la seguridad de tu hogar o negocio con nuestra cerradura inteligente. ¡Haz tu vida más fácil y segura hoy mismo!
      </p>
      <button class="btn ver-mas" @click="toggleDetalles">
        {{ mostrarDetalles ? 'Ver Menos' : 'Ver Más' }}
      </button>

      <div v-if="mostrarDetalles" class="detalles">
        <h2 class="subtitulo">Detalles de Membresías</h2>
        <div class="membresias">
          <div class="membresia">
            <h3>Membresía Básica</h3>
            <p class="precio">Free/Gratis</p>
            <ul>
              <li>Monitoreo de acceso limitado: Historial de los últimos 7 días de ingresos y salidas.</li>
              <li>Notificaciones básicas: Alertas de ingreso y salida enviadas por correo electrónico.</li>
              <li>Acceso compartido: Permite compartir la cerradura con hasta 2 usuarios adicionales.</li>
            </ul>
            <button class="btn comprar" @click="comprar('Básica')">Posees</button>
          </div>
          
          <div class="membresia">
            <h3>Membresía Premium</h3>
            <p class="precio">$20/mes</p>
            <ul>
              <li>Historial extendido: Registro de acceso de los últimos 30 días.</li>
              <li>Notificaciones avanzadas: Alertas en tiempo real enviadas por correo electrónico y notificaciones push en la app.</li>
              <li>Acceso compartido ampliado: Hasta 5 usuarios adicionales.</li>
              <li>Control de acceso programado: Configuración de horarios específicos para permitir el acceso.</li>
            </ul>
            <div v-if="mostrarPaypal === 'Premium'" id="paypal-button-container-premium"></div>
            <button class="btn comprar" @click="mostrarBotonPaypal('Premium')">Comprar</button>
          </div>

          <div class="membresia">
            <h3>Membresía VIP</h3>
            <p class="precio">$30/mes</p>
            <ul>
              <li>Historial completo: Registro de acceso sin límite de tiempo.</li>
              <li>Notificaciones y alertas personalizables: Opciones avanzadas de configuración de notificaciones y alertas de seguridad.</li>
              <li>Acceso compartido extendido: Hasta 10 usuarios adicionales con permisos personalizados.</li>
              <li>Control remoto total: Posibilidad de bloquear/desbloquear la cerradura desde cualquier lugar.</li>
              <li>Reportes de actividad detallados: Descarga de informes en formato PDF o CSV con datos de uso.</li>
              <li>Soporte prioritario: Acceso a atención al cliente preferencial 24/7.</li>
            </ul>
            <div v-if="mostrarPaypal === 'VIP'" id="paypal-button-container-vip"></div>
            <button class="btn comprar" @click="mostrarBotonPaypal('VIP')">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const mostrarDetalles = ref(false);
const mostrarPaypal = ref(null);

const toggleDetalles = () => {
  mostrarDetalles.value = !mostrarDetalles.value;
};

const mostrarBotonPaypal = (tipo) => {
  mostrarPaypal.value = tipo;
  
  document.querySelectorAll("#paypal-button-container-premium, #paypal-button-container-vip")
    .forEach(el => el.style.display = 'none');
  
  const containerId = tipo === 'Premium' ? '#paypal-button-container-premium' : '#paypal-button-container-vip';
  document.querySelector(containerId).style.display = 'block';

  renderPaypalButton(tipo);
};

const renderPaypalButton = (tipo) => {
  const containerId = tipo === 'Premium' ? '#paypal-button-container-premium' : '#paypal-button-container-vip';
  document.querySelector(containerId).innerHTML = '';

  paypal.Buttons({
    style: {
      layout: 'vertical',
      color: 'blue',
      shape: 'rect',
      label: 'paypal',
    },
    createOrder: (data, actions) => {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: tipo === 'Premium' ? '20.00' : '30.00'
          }
        }]
      });
    },
    onApprove: (data, actions) => {
      return actions.order.capture().then((details) => {
        alert(`Pago completado por ${details.payer.name.given_name} para la membresía ${tipo}`);
      });
    },
    onError: (err) => {
      console.error('Error en el pago:', err);
    }
  }).render(containerId);
};

onMounted(() => {
  if (!window.paypal) {
    const script = document.createElement('script');
    script.src = "https://www.sandbox.paypal.com/sdk/js?client-id=AaH_rRczg3KOTuc_icvM2Jz2FZ7js_Q78-aPcY-jbygCrpUTJruxctY9gvL_17YOulaYstd76-lrn7XU&currency=USD";
    script.onload = () => {
      console.log("PayPal SDK cargado");
    };
    document.head.appendChild(script);
  }
});
</script>

<style scoped>

.background {
  background-image: url('/public/DALL·E 2024-11-04 11.39.42 - A close-up of a modern smart lock on a wooden door featuring an NFC reader instead of a digital keypad. The lock has a sleek metallic finish, with a s.webp'); 
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
  background-color: rgba(0, 0, 0, 0.8); 
  padding: 2rem;
  border-radius: 8px;
  color: white;
  max-width: 800px;
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

.btn {
  background-color: #00d4ff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.btn:hover {
  background-color: #0099cc;
}

.detalles {
  margin-top: 1rem;
  max-height: 60vh; 
  overflow-y: auto; 
}

.membresias {
  display: flex;
  flex-direction: column; 
  gap: 1rem; 
}

@media(min-width: 600px) {
  .membresias {
    flex-direction: row; 
    justify-content: space-around;
  }
}

.membresia {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1rem;
  width: 100%; 
  max-width: 220px; 
  text-align: center;
  transition: transform 0.3s;
}

.membresia:hover {
  transform: scale(1.05);
}

.precio {
  font-size: 1.5rem;
  color: #00d4ff;
  margin: 0.5rem 0;
}

#paypal-button-container-premium,
#paypal-button-container-vip {
  margin-top: 1rem;
  display: none; 
}
</style>
