### Concepto: "Proyecto Neón" - Tu Biblioteca Youtube Personal.


### Estructura de Datos (Firestore):

1. **Colección `videos`:**
* `videoId` (ID del documento, autogenerado)
* `userId` (ID del usuario dueño)
* `originalUrl` (Link de YouTube - *No editable*)
* `originalVideoIDUrl` (ID del vídeo de YouTube - *No editable*)
* `authorName` (Canal de YouTube - *No editable*)
* `title` (Título - **Editable**)
* `thumbnailUrl` (Portada - **Editable**)
* `description` (Opcional, tus notas personales)
* `createdAt` (Fecha que da Firebase)


2. **Colección `playlists`:**
* `playlistId`
* `userId`
* `name` (Nombre Playlist)
* `description`
* `videoIds` (Array de strings con los IDs de los videos que pertenecen a esta lista).


###  Estas funciones cubren el **CRUD**:

* **Gestión de Videos (Entidad 1):**
✓ * Agregar video al sistema (Create). 
* Listar todos los videos almacenados (Read).
* Editar información del video (Update).
* Eliminar video del sistema (Delete).
* Agregar a "Favoritos" (una lista por defecto).
* Reproductor Embebido (El "Factor Wow"): Permite ver el video sin salir de tu web. Puedes poner un reproductor flotante o uno fijo en el detalle del video.


* **Gestión de Playlists (Entidad 2):**
* Crear nueva playlist (Create).
* Listar playlists creadas (Read).
* Ver detalle de una playlist (canciones dentro).
* Eliminar playlist (Delete).


* **Gestión de Contenido en Playlist:**
* Agregar canciones a una playlist específica.
* Eliminar canciones de una playlist específica.


* **Herramientas de UI/UX:**
* Buscador global por nombre (canciones y playlists).
* Ordenamiento local de listas (alfabético, fecha, etc.).
* Login / Registro / Logout (Público)
* Página estática informativa.


* **Restricciones de Negocio:**
* Límite global: 7000 canciones.
* Límite global: 1000 playlists.
* Límite por playlist: 1000 canciones.
* Paginación o "Cargar más": Implementar una paginación (de 20 en 20) o un botón "Ver más" es casi obligatorio técnicamente para esos volúmenes.

