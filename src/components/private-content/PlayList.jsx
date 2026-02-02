import { useState, useMemo } from 'react';

export default function PlayList() {

    const [playlist, _setPlaylist] = useState([]);
    const [sortingType, setSortingType] = useState('date-asc');

    const sortedPlaylist = useMemo(() => {
        return [...playlist].sort((a, b) => {
            switch (sortingType) {
                case 'title-asc':
                    return a.recordTitlePlayList.localeCompare(b.recordTitlePlayList);
                case 'title-desc':
                    return b.recordTitlePlayList.localeCompare(a.recordTitlePlayList);
                case 'date-asc':
                    return new Date(a.createdAt) - new Date(b.createdAt);
                case 'date-desc':
                    return new Date(b.createdAt) - new Date(a.createdAt);
                default:
                    return 0;
            }
        });
    }, [playlist, sortingType]);

    return (
        <section>
            <h2>Mi Playlist</h2>

            {/* Controles de Ordenación */}
            {
                sortedPlaylist.length > 0 &&
                < section >
                    <label htmlFor="sort-select">Ordenamiento:</label>
                    <select
                        id="sort-select"
                        value={sortingType}
                        onChange={(e) => setSortingType(e.target.value)}
                    >
                        <option value="title-asc">Alfábeticamente (A-Z)</option>
                        <option value="title-desc">Alfábeticamente Reverso (Z-A)</option>
                        <option value="date-asc">Fecha antigua</option>
                        <option value="date-desc">Fecha actual</option>
                    </select>
                </section>
            }

            {/* Renderizado de la lista */}
            {
                sortedPlaylist.length > 0 ? (
                    <ul>
                        {sortedPlaylist.map((playlist) => (
                            <li key={playlist.id}>
                                <strong>{playlist.recordTitlePlayList}</strong> — <small>{playlist.recordColorPlayList}</small>
                                <img src={playlist.recordCoverPlayList} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>
                        No hay playlist registradas.
                    </p>
                )
            }
        </section>
    );
};
