// Inicializar EmailJS con tu Public Key
(function() {
  emailjs.init("c2UGVmDUBJY4hl7Rv"); // Public key de EmailJS
})();

function sendEmail(event) {
  event.preventDefault();

  const params = {
    user_name: document.getElementById("name").value,
    user_email: document.getElementById("email").value,
  };

  emailjs.send("service_u0ljikz", "template_hm3e8sd", params) // Template Id y Service Id
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
