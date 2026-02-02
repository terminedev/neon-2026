import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function EditPlaylist({ playlistData, onUpdate }) {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: playlistData
    });

    useEffect(() => {
        if (playlistData) reset(playlistData);
    }, [playlistData, reset]);

    const handleUpdate = (updatedData) => {
        console.log('Datos actualizados -->', updatedData);
    };

    return (
        <form onSubmit={handleSubmit(handleUpdate)} noValidate>
            <h2>Editar Playlist</h2>

            {/* Título PlayList */}
            <label htmlFor='recordTitlePlayList'>Nombre de la PlayList:</label>
            <input
                type="text"
                placeholder="Nombre de la playlist"
                id='recordTitlePlayList'
                {...register("recordTitlePlayList", {
                    required: "El título es obligatorio",
                })}
            />
            {/* {errors.recordTitlePlayList && <span style={{ color: 'red' }}>{errors.recordTitlePlayList.message}</span>} */}

            {/* Color PlayList */}
            <label htmlFor='recordColorPlayList'>Color de la PlayList:</label>
            <input
                type="color"
                id='recordColorPlayList'
                {...register("recordColorPlayList")}
            />

            {/* Portada PlayList */}
            <label htmlFor='recordCoverPlayList'>URL de la Portada:</label>
            <input
                type="text"
                placeholder="URL de la imagen"
                id='recordCoverPlayList'
                {...register("recordCoverPlayList", {
                    required: "La portada es obligatoria"
                })}
            />
            {/* {errors.recordCoverPlayList && <span style={{ color: 'red' }}>{errors.recordCoverPlayList.message}</span>} */}

            <div>
                <button type="button" onClick={() => reset()}>
                    Restablecer Cambios
                </button>
                <button type="submit">
                    Guardar Cambios
                </button>
            </div>
        </form>
    );
};