export default function VideoCard({ videoData }) {

    const {
        video_id,
        original_url,
        author_name,
        title,
        thumbnail_url,
    } = videoData;

    const handlePlay = () => { console.log("Reproducir video interno"); };
    const handleAddToPlaylist = () => { console.log("Agregar a playlist"); };

    const handleAddToFavorites = async (id) => {
        try {
            addToFavoritesDB(id);
        } catch (error) {

        }
    };

    const handleEdit = () => { console.log("Modificar datos (título/portada)"); };
    const handleDelete = () => { console.log("Eliminar tarjeta"); };

    return (
        <article>
            <header>
                <h3>{title}</h3>
                <p>Canal: {author_name}</p>
            </header>
            <main>
                <img
                    src={thumbnail_url}
                    alt={`Portada de ${title}`}
                />
            </main>
            <footer>
                <button onClick={handlePlay}>Play</button>
                <button onClick={handleAddToPlaylist}>+</button>
                <button onClick={() => handleAddToFavorites(video_id)}>Fav</button>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Borrar</button>
                <a href={original_url} target='_blank' rel="noreferrer">YT</a>
            </footer>
        </article>
    );
};

