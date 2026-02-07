
# 🌌 Proyecto Neón - Tu Biblioteca Personal de YouTube

Este proyecto es el **Trabajo Final Integrador** para el curso de **Desarrollo en React JS (UTN 2026)**. Se trata de una aplicación web que permite a los usuarios gestionar su propia colección de videos de YouTube, aplicando conceptos avanzados de componentes, hooks, estado global y persistencia de datos.

## 📝 Descripción General

**Proyecto Neón** permite a los usuarios registrarse e iniciar sesión para acceder a un panel personal (Dashboard). En este panel, los usuarios pueden:

* 
**Agregar** videos mediante URLs de YouTube.


* 
**Visualizar** su colección personal.


* 
**Editar** metadatos como el título o la descripción.


* 
**Eliminar** registros de su biblioteca.



## 🚀 Tecnologías Utilizadas

Para el desarrollo de esta aplicación se utilizaron las siguientes herramientas:

* 
**React JS**: Librería principal para la interfaz.


* 
**React Router DOM**: Para la navegación SPA y protección de rutas.


* 
**Firebase Authentication**: Gestión de usuarios y sesiones.


* 
**Firebase Firestore**: Base de datos NoSQL para el almacenamiento del CRUD.


* 
**CSS Nativo**: Estilos personalizados utilizando Flexbox y Grid sin frameworks externos.



## 📂 Estructura del Proyecto

El proyecto está organizado de manera modular para separar la lógica de la interfaz:

* `src/components`: Componentes reutilizables (Botones, Formularios, Cards).
* 
`src/contexts`: Contiene el **AuthContext** para el manejo global de la sesión.


* `src/pages`: Vistas principales de la aplicación (Login, Registro, Dashboard, About).
* `src/services`: Configuración de Firebase y funciones de base de datos.
* 
`src/styles`: Archivos de CSS nativo.


* 
`src/routes`: Definición de rutas públicas y privadas.



## 🔐 Manejo del AuthContext y Sesión

El corazón de la aplicación es el `AuthContext`. Este proveedor global:

1. Escucha el estado de autenticación de Firebase.


2. Provee la información del usuario a toda la aplicación.


3. Permite proteger las rutas del **Dashboard**, redirigiendo a usuarios no autenticados a la página de Login.



## 🛠️ Instalación y Ejecución

Para correr este proyecto localmente, sigue estos pasos:

1. **Clonar el repositorio:**
```bash
git clone https://github.com/terminedev/neon-2026 

```


2. **Instalar dependencias:**
```bash
npm install

```


3. **Configurar Firebase:**
* Crea un proyecto en [Firebase Console](https://console.firebase.google.com/).
* Copia tus credenciales en un archivo `.env` o directamente en el archivo de configuración de Firebase.


4. **Iniciar la aplicación:**
```bash
npm start

```



## ⚠️ Consideraciones sobre el Desarrollo

Debido a los tiempos de entrega, el proyecto se centró en ofrecer una experiencia de usuario robusta y funcional (MVP). Se implementó un límite de **20 videos por usuario** para garantizar un rendimiento óptimo en la sincronización con Firestore. Se ha mantenido código estructurado para futuras implementaciones, como el sistema de listas de reproducción y filtrado avanzado.

---

**Desarrollado por:** Gastøn Términe ♱
**Curso:** React JS UTN
