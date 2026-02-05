import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function EditPlaylist() {
    const { playlist_id } = useParams();

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            name: '',
            cover: '',
            description: '',
            color: '',
        },
    });

    const watchedCover = watch('cover');

    useEffect(() => {

        const getPlaylistDatabase = async () => {

            try {
                const data = await getPlaylistDB(playlist_id); // <-- Función Firebase 

                if (!data) return console.warn(`No se encontró playlist con id: ${playlist_id}`);

                reset({
                    name: data.name,
                    cover: data.cover,
                    description: data.description,
                    color: data.color,
                });

            } catch (error) {

            }
        };

        if (playlist_id && playlist_id.trim() !== '') getPlaylistDatabase();
    }, [playlist_id]);


    const handleChange = async (newData) => {

        try {
            console.log('Nuevos Datos -->', newData);
            updatePlaylistDB(newData); // <-- Función Firebase 
        } catch (error) {
        } finally {
        }
    };

    return (
        <section>
            <h2>Editar Información de la Playlist:</h2>

            <form onSubmit={handleSubmit(handleChange)}>

                <label htmlFor='name'>Nombre:</label>
                <input
                    type='text'
                    id="name"
                    {...register('name', { required: true })}
                />

                <label htmlFor='cover'>URL Portada:</label>
                <input
                    type='text'
                    id='cover'
                    {...register('cover')}
                />
                {/* Pequeña previsualización si hay URL */}
                {watchedCover && (
                    <img src={watchedCover} alt="Thumb" />
                )}

                <label htmlFor='color'>Color:</label>
                <input
                    type='color'
                    id="color"
                    {...register('color')}
                />

                <label>Notas Personales (Descripción):</label>
                <textarea
                    {...register('description')}
                    rows="4"
                    placeholder="Escribe tus notas aquí..."
                />

                <button type="button" onClick={() => reset()}>
                    Restaurar Datos
                </button>
                <button type="submit">
                    Guardar Cambios
                </button>
            </form>
        </section>
    );
};
