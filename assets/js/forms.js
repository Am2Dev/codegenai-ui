// Form Handling
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Demo-Login (in der Produktion würde hier eine echte Authentifizierung erfolgen)
    if (email === 'demo@codegenai.de' && password === 'demo123') {
        errorMessage.style.display = 'none';
        // Erfolgreicher Login
        alert('Login erfolgreich!');
        window.location.href = 'dashboard.html';
        return false;
    } else {
        errorMessage.style.display = 'block';
        return false;
    }
}

function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    // Validierung
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Die Passwörter stimmen nicht überein.';
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        return false;
    }

    if (password.length < 8) {
        errorMessage.textContent = 'Das Passwort muss mindestens 8 Zeichen lang sein.';
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        return false;
    }

    // Demo-Registrierung (in der Produktion würde hier eine echte Registrierung erfolgen)
    errorMessage.style.display = 'none';
    successMessage.style.display = 'block';

    // Simulierte Verzögerung
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);

    return false;
}

function handleContact(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    // Demo-Submit (in der Produktion würde hier eine echte Formularverarbeitung erfolgen)
    errorMessage.style.display = 'none';
    successMessage.style.display = 'block';

    // Formular zurücksetzen
    document.getElementById('contact-form').reset();

    // Simulierte Verzögerung
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);

    return false;
}

// Initialize forms
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const contactForm = document.getElementById('contact-form');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
    if (contactForm) {
        contactForm.addEventListener('submit', handleContact);
    }
}); 