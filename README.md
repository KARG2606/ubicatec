# UbicaTEC — Auth Service

## Descripción

El Auth Service de UbicaTEC permite gestionar la autenticación de usuarios mediante un sistema basado en códigos de verificación enviados al correo institucional. El servicio valida correos, genera códigos temporales y devuelve un token JWT simulado para la autenticación del usuario.

---

## Tecnologías

* Azure API Management
* React
* JSON Web Token (JWT)

---

## Endpoints

| Método | Ruta         | Descripción                                 |
| ------ | ------------ | ------------------------------------------- |
| POST   | /send-code   | Envía un código de verificación al correo   |
| POST   | /verify-code | Verifica el código y retorna un JWT         |
| GET    | /user        | Obtiene información del usuario autenticado |

---

## Flujo de autenticación

1. El usuario ingresa su correo institucional
2. Se envía un código de verificación al correo
3. El usuario ingresa el código recibido
4. El sistema valida el código
5. Se retorna un token JWT simulado
6. El usuario queda autenticado

---

## Variables de ambiente

El proyecto requiere las siguientes variables (NO incluir valores reales):

* REACT_APP_AUTH_URL
* REACT_APP_API_KEY

---

## Cómo probar localmente

1. Clonar el repositorio:

```bash
git clone https://github.com/KARG2606/proyecto-dise-o-auth.git
```

2. Entrar al proyecto:

```bash
cd proyecto-diseno
```

3. Instalar dependencias:

```bash
npm install
```

4. Crear archivo `.env.local` en la raíz:

```bash
REACT_APP_AUTH_URL= https://kevinapimanagment.azure-api.net/auth/v1
REACT_APP_API_KEY= API_KEY
```

5. Ejecutar el proyecto:

```bash
npm start
```

6. Probar los endpoints:

* Desde el frontend
* O usando Postman

---

## Capturas de pantalla

* Azure API Management (Mock configurado)
* Pruebas en Postman (200 OK)
* Interfaz del frontend

*(Agregar aquí las imágenes)*

---

## Créditos

* Azure API Management
* Postman
* React
* GitHub
