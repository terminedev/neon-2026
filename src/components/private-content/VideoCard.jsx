export default function VideoCard({ videoData }) {

    const {
        originalUrl,
        authorName,
        title,
        thumbnailUrl,
    } = videoData;

    const handlePlay = () => { console.log("Reproducir video interno"); };
    const handleAddToPlaylist = () => { console.log("Agregar a playlist"); };
    const handleAddToFavorites = () => { console.log("Agregar a favoritos"); };
    const handleEdit = () => { console.log("Modificar datos (título/portada)"); };
    const handleDelete = () => { console.log("Eliminar tarjeta"); };

    return (
        <article>
            <header>
                <h3>{title}</h3>
                <p>Canal: {authorName}</p>
            </header>
            <main>
                <img
                    src={thumbnailUrl}
                    alt={`Portada de ${title}`}
                />
            </main>
            <footer>
                <button onClick={handlePlay}>Play</button>
                <button onClick={handleAddToPlaylist}>+</button>
                <button onClick={handleAddToFavorites}>Fav</button>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Borrar</button>
                <a href={originalUrl} target='_blank' rel="noreferrer">YT</a>
            </footer>
        </article>
    );
};

