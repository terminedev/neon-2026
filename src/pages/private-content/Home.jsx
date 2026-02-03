import AddSong from 'components/private-content/AddSong';
import AddPlaylist from 'components/private-content/AddPlaylist';
import SongList from 'components/private-content/SongList';
import PlayList from 'components/private-content/PlayList';

import { useState } from 'react';

export default function Home() {

    const [inputModal, setInputModal] = useState(null);

    return (
        <main>
            <section>
                <button
                    type="button"
                    onClick={() => setInputModal('cancion')}
                >
                    Agregar Canción
                </button>

                <button
                    type="button"
                    onClick={() => setInputModal('playlist')}
                >
                    Agregar Playlist
                </button>
            </section>

            <hr />

            {inputModal === 'cancion' && <AddSong closeModal={() => setInputModal(null)} />}
            {inputModal === 'playlist' && <AddPlaylist closeModal={() => setInputModal(null)} />}

            <hr />

            <SongList />
            <PlayList />
        </main>
    );
}