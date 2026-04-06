// src/services/authService.js
//Temporalmente se deja el servicio de autenticación en el frontend, pero se recomienda moverlo a un backend para mayor seguridad y control.
//console.log("URL:", process.env.REACT_APP_AUTH_URL);
//console.log("KEY:", process.env.REACT_APP_API_KEY);
    
const ALLOWED_DOMAINS = ['estudiantec.cr', 'itcr.ac.cr'];
const ADMIN_EMAILS = ['admin@itcr.ac.cr', 'profesor@itcr.ac.cr'];
// Agrega aquí los correos de admins que defina el equipo


export function validateEmail(email) {
  if (!email || !email.includes('@')) {
    return { valid: false, error: 'Correo invalido' };
  }
  const domain = email.split('@')[1];
  if (!ALLOWED_DOMAINS.includes(domain)) {
    return { valid: false, error: 'Solo se permiten correos @estudiantec.cr o @itcr.ac.cr' };
  }
  return { valid: true, error: null };
}


export function getRole(email) {
  return ADMIN_EMAILS.includes(email) ? 'admin' : 'estudiante';
}


export async function sendVerificationCode(email) {
  const response = await fetch(`${process.env.REACT_APP_AUTH_URL}/send-code`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': process.env.REACT_APP_API_KEY
    },
    body: JSON.stringify({ email })
  });
  return response.json();
}


export async function verifyCode(email, code) {
  const response = await fetch(`${process.env.REACT_APP_AUTH_URL}/verify-code`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': process.env.REACT_APP_API_KEY
    },
    body: JSON.stringify({ email, code })
  });
  const data = await response.json();
  if (data.success && data.token) {
    // Guardamos el token y datos del usuario en localStorage
    localStorage.setItem('auth_token', data.token);
    localStorage.setItem('user_email', data.user.email);
    localStorage.setItem('user_role', data.user.role);
  }
  return data;
}


export function getCurrentUser() {
  const token = localStorage.getItem('auth_token');
  if (!token) return null;
  return {
    token,
    email: localStorage.getItem('user_email'),
    role: localStorage.getItem('user_role'),
    isAdmin: localStorage.getItem('user_role') === 'admin'
  };
}


export function logout() {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('user_email');
  localStorage.removeItem('user_role');
}


export function isAuthenticated() {
  return !!localStorage.getItem('auth_token');
}
