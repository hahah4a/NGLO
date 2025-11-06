// Inicializar EmailJS con tu Public Key
(function() {
  emailjs.init("TU_PUBLIC_KEY"); // 👈 REEMPLAZA ESTO
})();

function sendEmail(event) {
  event.preventDefault();

  const params = {
    user_name: document.getElementById("name").value,
    user_email: document.getElementById("email").value,
  };

  emailjs.send("TU_SERVICE_ID", "TU_TEMPLATE_ID", params) // 👈 REEMPLAZA ESTO TAMBIÉN
    .then(function(response) {
      alert("✅ ¡Gracias por registrarte! Revisa tu correo electrónico.");
      document.getElementById("form").reset();
    }, function(error) {
      alert("❌ Ocurrió un error al enviar el correo. Inténtalo nuevamente.");
      console.error(error);
    });
}

// Simula la opción de "darse de baja"
document.getElementById("unsubscribe").addEventListener("click", function(event) {
  event.preventDefault();
  alert("Te has dado de baja de la newsletter.");
});
