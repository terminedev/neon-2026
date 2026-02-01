### Concepto: "Proyecto Neón" - Tu Biblioteca Multimedia Personal

En lugar de ser solo una lista, será un **Dashboard** donde el usuario gestiona su propia colección de música o videos.

# ÍNDICE: 
1. ¿Qué podrías implementar?.
2. Estructura Técnica Sugerida.
3. Check-list de Requisitos Críticos.
4. Propuesta de Página Informativa.
5. Cómo obtener los datos automáticamente (YouTube OEmbed).
6. Integración con los requisitos del trabajo.
7. Estructura sugerida para el Dashboard de música.


---


1. ¿Qué podrías implementar?:

	* Gestión de Tracks (CRUD):
		El usuario podrá **crear** una ficha de canción, **leer** su lista, **editar** los detalles y **eliminar** lo que ya no le guste.

	* Multimedia: YouTube:
		Puedes guardar el link en Firebase  y usar un `<iframe>` para que se reproduzca directamente en tu aplicación.

	* Campos de la Entidad:
		Título, Artista, Género, URL del video/audio y una breve descripción o "mood".

	* Entrada:
		Página de Login, Página de Registro.


---


2. Estructura Técnica Sugerida:

Para obtener la máxima puntuación en **Organización del código**, te sugiero esta estructura de carpetas:

```text
src/
[cite_start]├── components/          # Componentes reutilizables (Navbar, Card, Loader) [cite: 47, 61]
[cite_start]├── context/             # AuthContext.js para el manejo de sesión [cite: 12, 16, 47, 61]
[cite_start]├── pages/               # Login, Registro, Dashboard, Info [cite: 9, 30, 47]
[cite_start]├── routes/              # Configuración de React Router y Rutas Privadas [cite: 19, 38]
[cite_start]├── services/            # Configuración de Firebase (firebaseConfig.js) [cite: 60]
[cite_start]└── styles/              # Archivos .css nativos por componente o página [cite: 39, 62]

```


---


3. Check-list de Requisitos Críticos: 

	No olvides estos puntos que el profesor evaluará rigurosamente.

		**AuthContext Global:** El estado de si el usuario está logueado o no debe estar en un contexto, no disperso en componentes.
 
		**Rutas Protegidas:** Si intento entrar al `/dashboard` sin loguearme, la app debe redirigirme al login automáticamente usando React Router.

		**CSS Nativo:** Está prohibido usar librerías como Tailwind, Bootstrap o Material UI. Usa **Flexbox** o **Grid** para que sea responsive.

		**Commits Progresivos:** ¡Muy importante! No subas todo el proyecto de una vez. Haz un commit por cada avance (ej: "feat: add AuthContext", "feat: implement CRUD").


---


4. Propuesta de Página Informativa

Como el trabajo pide una **página estática informativa** , podrías usarla para explicar que elegiste la temática musical para demostrar cómo manejar flujos de datos multimedia y estados complejos en React.

**Dato clave:** Recuerda que al finalizar debes desplegar la app en **Vercel** o **Netlify** y que el link sea público para la corrección.


---


5. Cómo obtener los datos automáticamente (YouTube OEmbed)

¡Es totalmente posible! No necesitas registrarte en la complicada API de Google. Puedes usar el endpoint de **OEmbed** de YouTube. Cuando el usuario pegue la URL, tu aplicación puede hacer una petición y obtener el título y la miniatura.

#### El flujo sería así:

1. El usuario pega la URL en un `input`.
2. Usas un `useEffect` o un evento `onBlur` para detectar el cambio.
3. Llamas a la API de YouTube: `https://www.youtube.com/oembed?url=URL_DEL_VIDEO&format=json`.
4. Recibes un JSON con: `title`, `author_name`, y `thumbnail_url`.
5. **Magia:** Seteas esos valores en el estado de tu formulario de React y el usuario solo tiene que darle a "Guardar".


---


6. Integración con los requisitos del trabajo

	**Validaciones:** Puedes usar la respuesta de esa API para validar si la URL es realmente un video de YouTube, cumpliendo con el requisito de dar "feedback visual".

	**Decisiones Técnicas:** Usar OEmbed en lugar de la API oficial es una excelente "decisión técnica relevante" para explicar en tu **Página estática informativa**.

	**CRUD:** En tu Dashboard , cuando el usuario guarde la canción, estarás haciendo el "Create" en Firestore.


---


7. Estructura sugerida para el Dashboard de música

	**Lista de canciones** | "Read" de Firestore mapeado en componentes Card.
	
	**Botón "Agregar"** | Formulario que dispare la lógica de OEmbed y el "Create" de Firebase.

	**Edición/Borrado** | Botones en cada Card para actualizar o eliminar el documento en Firestore.

	**Reproductor** | Un modal o sección fija que reciba la URL y use un `<iframe>`.

**Recuerda:** Todo el estilo de estas tarjetas y formularios debe ser con **CSS nativo** (sin librerías como Bootstrap) para cumplir con la consigna.



** Usuario NO Logueado (Público): Según la consigna, un usuario que entra por primera vez **no debería poder ver ni crear álbumes**. Solo debe tener acceso a:

	**Página de Login:** Formulario para ingresar email/password.

	**Página de Registro:** Formulario para crear cuenta nueva.

	**Página Informativa (About):** Una página estática que explique qué tecnologías usaste (React, Firebase, CSS puro), tus dificultades y decisiones.

	**Idea:* Aquí puedes poner capturas de pantalla de cómo se ve la app por dentro para "antojar" al usuario a registrarse.


** Usuario Logueado (Dashboard / Privado): Aquí es donde ocurre toda la magia y donde aplicas el **CRUD**.

#### Funciones Esenciales (Para Aprobar) Estas son las que *tienen* que estar sí o sí:

	**Crear Canción/Álbum (Create):** Un formulario donde pegas el link de YouTube, pones el título y el género.

	**Ver Biblioteca (Read):** Una grilla o lista mostrando todas las canciones guardadas en Firebase.

	**Modificar Datos (Update):** Un botón "Editar" en cada tarjeta para corregir el nombre o cambiar la categoría.

	**Eliminar (Delete):** Un botón para borrar esa canción que ya no te gusta.

	**Cerrar Sesión:** Un botón en el menú que limpie el `AuthContext` y te mande al Login.


#### Tus Funciones "Extra" (Evaluación de viabilidad)

Aquí evaluamos tus ideas bajo la lupa de los requisitos técnicos:

* **"Listas de fav o me gustas"** ✅ **(Viable):**
* *Cómo hacerlo simple:* En tu base de datos (Firestore), a cada canción agrégale un campo booleano: `isFavorite: true/false`. En la UI, pones un corazón que cambie de color. Si está en `true`, se pinta rojo.


* **"Cambiar los colores de los álbumes"** ✅ **(Viable y Recomendado):**
* *Cómo hacerlo:* Guarda un campo `color` (ej: "#aaff00") en Firestore junto con la canción. Usa ese valor en el `style={{ borderColor: item.color }}` de la tarjeta. Cumple perfecto con el uso de **CSS nativo** y estado.


* **"Compartir"** ⚠️ **(Cuidado):**
* Si refieres a compartir en redes sociales, es fácil. Pero si refieres a que "Usuario A" vea los discos de "Usuario B", implica cambiar las reglas de seguridad de Firebase. *Sugerencia: Déjalo para el final.*


* **"Mezclador de volumen con colores neones moviéndose"** ⚠️ **(Desafío Técnico):**
* *El problema:* Al usar un `iframe` de YouTube, por seguridad del navegador, **no puedes leer las ondas de audio reales** (problema de CORS). No puedes hacer que las barras se muevan *exactamente* al ritmo de la música fácilmente.
* *La solución "Truco":* Haz una animación en **CSS Keyframes** que simplemente mueva barritas de colores de forma aleatoria o cíclica mientras el estado sea `isPlaying`. Visualmente se ve genial y cumple con el requisito de **CSS Nativo avanzado**, sin meterte en líos de programación de audio complejos.



