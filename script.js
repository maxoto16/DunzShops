// Datos de productos de ejemplo
const productos = [
  {
    id: 1,
    nombre: "Cyberpunk 2077",
    descripcion: "Un RPG de mundo abierto ambientado en Night City, una megalópolis obsesionada con el poder, el glamour y las modificaciones corporales.",
    precio: "$59.99",
    imagen: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
    trailer: "https://www.youtube.com/embed/8X2kIfS6fb8",
    detalles: "Cyberpunk 2077 es un juego de rol de acción de mundo abierto que se desarrolla en Night City. Personaliza tu personaje y tu estilo de juego mientras exploras una ciudad futurista llena de posibilidades."
  },
  {
    id: 2,
    nombre: "The Witcher 3",
    descripcion: "Embárcate en una aventura épica como Geralt de Rivia, un cazador de monstruos en busca de su hija adoptiva.",
    precio: "$39.99",
    imagen: "https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=400",
    trailer: "https://www.youtube.com/embed/c0i88t0Kacs",
    detalles: "The Witcher 3: Wild Hunt es un juego de rol de mundo abierto con una narrativa rica y decisiones que afectan el mundo que te rodea."
  },
  {
    id: 3,
    nombre: "Red Dead Redemption 2",
    descripcion: "Vive la vida de un forajido en el salvaje oeste americano en esta épica aventura de mundo abierto.",
    precio: "$49.99",
    imagen: "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=400",
    trailer: "https://www.youtube.com/embed/gmA6MrX81z4",
    detalles: "Red Dead Redemption 2 es la precuela del aclamado Red Dead Redemption, con una historia profunda y un mundo increíblemente detallado."
  },
  {
    id: 4,
    nombre: "Grand Theft Auto V",
    descripcion: "Experimenta las vidas entrelazadas de tres criminales únicos mientras planean una serie de atracos audaces.",
    precio: "$29.99",
    imagen: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=400",
    trailer: "https://www.youtube.com/embed/QkkoHAzjnUs",
    detalles: "GTA V ofrece un mundo abierto masivo con tres protagonistas jugables y una historia llena de acción y humor negro."
  },
  {
    id: 5,
    nombre: "Minecraft",
    descripcion: "Construye, explora y sobrevive en un mundo infinito hecho de bloques donde la creatividad es tu única limitación.",
    precio: "$26.95",
    imagen: "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=400",
    trailer: "https://www.youtube.com/embed/MmB9b5njVbA",
    detalles: "Minecraft es un juego sandbox que permite a los jugadores construir con una variedad de bloques en un mundo 3D generado proceduralmente."
  },
  {
    id: 6,
    nombre: "Fortnite",
    descripcion: "Battle Royale gratuito donde 100 jugadores luchan por ser el último en pie en una isla que se reduce constantemente.",
    precio: "Gratis",
    imagen: "https://images.pexels.com/photos/1293269/pexels-photo-1293269.jpeg?auto=compress&cs=tinysrgb&w=400",
    trailer: "https://www.youtube.com/embed/2gUtfBmw86Y",
    detalles: "Fortnite es un juego battle royale gratuito con elementos de construcción únicos y eventos especiales regulares."
  }
];

// Carrito de compras
let carrito = [];

// Función para cargar productos
function cargarProductos() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.innerHTML = '';
  
  productos.forEach(producto => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-image">
        <img src="${producto.imagen}" alt="${producto.nombre}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <i class="fas fa-gamepad" style="display: none;"></i>
      </div>
      <div class="product-info">
        <h3 class="product-name">${producto.nombre}</h3>
        <p class="product-description">${producto.descripcion}</p>
        <div class="product-price">${producto.precio}</div>
        <div class="product-buttons">
          <button class="btn btn-primary" onclick="verMas(${producto.id})">
            <i class="fas fa-info-circle"></i>
            Ver Más
          </button>
          <button class="btn btn-secondary" onclick="añadirAlPedido(${producto.id})">
            <i class="fas fa-cart-plus"></i>
            Añadir al Pedido
          </button>
          <button class="btn btn-outline" onclick="verTrailer(${producto.id})">
            <i class="fas fa-play"></i>
            Ver Trailer
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Función para ver más detalles
function verMas(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;

  const modal = document.getElementById('productModal');
  const details = document.getElementById('productDetails');
  
  details.innerHTML = `
    <div style="text-align: center;">
      <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 100%; max-width: 300px; border-radius: 15px; margin-bottom: 1rem;" onerror="this.style.display='none';">
      <h2 style="color: #667eea; margin-bottom: 1rem;">${producto.nombre}</h2>
      <p style="color: #666; margin-bottom: 1rem; line-height: 1.6;">${producto.detalles}</p>
      <div style="font-size: 1.5rem; font-weight: bold; color: #667eea; margin-bottom: 1.5rem;">${producto.precio}</div>
      <button class="btn btn-secondary" onclick="añadirAlPedido(${producto.id}); cerrarModal('productModal');" style="margin-right: 1rem;">
        <i class="fas fa-cart-plus"></i>
        Añadir al Pedido
      </button>
      <button class="btn btn-outline" onclick="verTrailer(${producto.id}); cerrarModal('productModal');">
        <i class="fas fa-play"></i>
        Ver Trailer
      </button>
    </div>
  `;
  
  modal.style.display = 'block';
}

// Función para añadir al pedido
function añadirAlPedido(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;

  const existente = carrito.find(item => item.id === id);
  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  // Mostrar notificación
  mostrarNotificacion(`${producto.nombre} añadido al pedido!`);
  console.log('Carrito actual:', carrito);
}

// Función para ver trailer
function verTrailer(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;

  const modal = document.getElementById('trailerModal');
  const video = document.getElementById('trailerVideo');
  
  video.src = producto.trailer;
  modal.style.display = 'block';
}

// Función para cerrar modal
function cerrarModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
  
  if (modalId === 'trailerModal') {
    document.getElementById('trailerVideo').src = '';
  }
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje) {
  // Crear elemento de notificación
  const notificacion = document.createElement('div');
  notificacion.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 1rem 2rem;
    border-radius: 25px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    z-index: 3000;
    animation: slideInRight 0.3s ease;
  `;
  notificacion.innerHTML = `
    <i class="fas fa-check-circle" style="margin-right: 0.5rem;"></i>
    ${mensaje}
  `;

  document.body.appendChild(notificacion);

  // Remover después de 3 segundos
  setTimeout(() => {
    notificacion.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => {
      document.body.removeChild(notificacion);
    }, 300);
  }, 3000);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Cargar productos si estamos en la página de ventas
  cargarProductos();

  // Event listeners para cerrar modales
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('close')) {
      const modal = e.target.closest('.modal');
      if (modal) {
        cerrarModal(modal.id);
      }
    }

    // Cerrar modal al hacer clic fuera
    if (e.target.classList.contains('modal')) {
      cerrarModal(e.target.id);
    }
  });

  // Cerrar modal con tecla Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const modals = document.querySelectorAll('.modal');
      modals.forEach(modal => {
        if (modal.style.display === 'block') {
          cerrarModal(modal.id);
        }
      });
    }
  });
});

// Añadir estilos para las animaciones de notificación
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

console.log('GameStore cargado correctamente!');