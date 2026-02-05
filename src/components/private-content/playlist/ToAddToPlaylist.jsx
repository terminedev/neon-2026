import { useEffect, useState } from "react";

export default function ToAddToPlaylist({
    video_id,
    onClose
}) {

    const [playlist, setPlaylist] = useState([]);

    useEffect(() => {
        const getPlaylist = async () => {
            try {
                const data = await getPlaylistDB(user.uid) // <-- AuthContext
                setPlaylist([...data]);
            } catch (error) {

            }
        }

        if (video_id && video_id.trim() !== '') getPlaylist();
    }, []);

    const handleAggregate = async (playlist_id, video_id) => {
        try {
            await addSongToPlaylist(playlist_id, video_id); // <-- Función Firebase
            onClose();
        } catch (error) {

        }
    };

    return (
        <dialog open>

            <header>
                <h3>
                    Guardar en playlist
                </h3>
            </header>
            <main>
                {playlist.length > 0 ? (
                    <ul>
                        {playlist.map((playlist) => (
                            <li key={playlist.playlist_id}>
                                <button onClick={() => handleAggregate(playlist.playlist_id, video_id)}>
                                    {playlist.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No tienes playlists creadas aún.</p>
                )}
            </main>
            <footer>
                <button
                    onClick={onClose}
                >
                    Cancelar
                </button>
            </footer>
        </dialog>
    );
};
