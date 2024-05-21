document.getElementById('loginForm').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  
    if (!email || !password) {
      event.preventDefault(); // Evita el envío del formulario
      errorMessage.textContent = 'Por favor, complete todos los campos.';
    } else {
      errorMessage.textContent = ''; // Limpia el mensaje de error
    }
  });