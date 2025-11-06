document.getElementById('newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const mensaje = document.getElementById('mensaje');

  // Simula el envío de correo (puedes conectar con un backend real después)
  mensaje.textContent = `¡Gracias, ${nombre}! Te has suscrito correctamente. Revisa tu correo (${correo}) para más detalles.`;
  mensaje.classList.remove('hidden');
  this.reset();
});
