import { useState } from "react";

export default function VideoCard({ videoData }) {

    const {
        video_id,
        original_url,
        author_name,
        title,
        thumbnail_url,
    } = videoData;

    const handlePlay = () => { console.log("Reproducir video interno"); };

    const [handleAddToPlaylist, setHandleAddToPlaylist] = useState({
        isOpen: false,
        video_id: null,
    });

    const handleAddToFavorites = async (id) => {
        try {
            addToFavoritesDB(id);
        } catch (error) {

        }
    };

    const handleEdit = () => { console.log("Modificar datos (título/portada)"); };
    const handleDelete = () => { console.log("Eliminar tarjeta"); };

    return (
        <>
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
                    <button onClick={() => {
                        setHandleAddToPlaylist({
                            isOpen: true,
                            video_id: video_id
                        })
                    }}>+</button>
                    <button onClick={() => handleAddToFavorites(video_id)}>Fav</button>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Borrar</button>
                    <a href={original_url} target='_blank' rel="noreferrer">YT</a>
                </footer>
            </article>

            {handleAddToPlaylist.isOpen && <ToAddToPlaylist video_id={video_id} onClose={() => {
                setHandleAddToPlaylist({
                    isOpen: false,
                    video_id: null
                })
            }} />}
        </>
    );
};

