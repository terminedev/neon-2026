import { useAuth } from "contexts/AuthProvider";

export default function PlaylistDetails({ playlistData, closeModal }) {

    const { songs } = playlistData;
    const { removeSongFromPlaylist } = useAuth();

    const handleRemoveSong = (songId) => {
        removeSongFromPlaylist(playlistData.id, songId);
    };

    return (
        <>
            <header>
                <h3>{playlistData.recordTitlePlayList}</h3>
                <small>
                    {songs.length} {songs.length === 1 ? 'canción' : 'canciones'}
                </small>
                <button onClick={closeModal}>×</button>
            </header>

            <ul>
                {songs.length > 0 ? (
                    <>
                        {songs.map((song, index) => (
                            <li key={song.idVideo}>
                                <strong>{index + 1}. {song.title || 'Canción sin título'}</strong>
                                {song.artist && <span> - {song.artist}</span>}

                                <button
                                    onClick={() => handleRemoveSong(song.idVideo)}
                                >
                                    Quitar
                                </button>
                            </li>
                        ))}
                    </>
                ) : (
                    <p>
                        Esta playlist está vacía.
                    </p>
                )}
            </ul>

            <footer>
                <button type="button" onClick={closeModal}>
                    Cerrar
                </button>
            </footer>
        </>
    );
}
