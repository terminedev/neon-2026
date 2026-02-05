import { useForm } from 'react-hook-form';

export default function AddPlaylist() {

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            cover: '',
            description: '',
            video_ids: [],
        },
    });

    const watchedCover = watch('cover');

    const handleAggregate = async (data) => {
        try {
            console.log('Objeto a agregar -->', data);

            await addPlaylistDB({
                user_id: user.uid, // <-- AuthContext;
                video_ids: [],
                ...data
            });  // <-- Función Firebase 

        } catch (error) {
        } finally {
        }
    };

    return (
        <section>

            <h2>Crear nueva Playlist:</h2>
            <form onSubmit={handleSubmit(handleAggregate)}>

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

                <label >Notas Personales (Descripción):</label>
                <textarea
                    {...register('description')}
                    rows="4"
                    placeholder="Escribe tus notas aquí..."
                />

                <button type="button" onClick={() => reset()}>
                    Limpiar Datos
                </button>
                <button type="submit">
                    Guardar Video
                </button>
            </form>
        </section>
    );
};
