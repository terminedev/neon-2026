import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function VideoEditForm() {
    const { video_id } = useParams();

    const {
        register,
        handleSubmit,
        reset,
        watch,
        getValues,
        formState: { errors }
    } = useForm({
        defaultValues: {
            original_url: '',
            author_name: '',
            title: '',
            thumbnail_url: '',
            description: '',
        },
    });

    const watchedThumbnail = watch('thumbnail_url');

    useEffect(() => {

        const getVideoDatabase = async () => {

            try {
                const data = await getVideoDB(video_id); // <-- Función Firebase 

                if (!data) return console.warn(`No se encontró vídeo con id: ${video_id}`);

                reset({
                    original_url: data.original_url,
                    author_name: data.author_name,
                    title: data.title,
                    thumbnail_url: data.thumbnail_url,
                    description: data.description,
                });
            } catch (error) {

            }
        };

        if (video_id && video_id.trim() !== '') getVideoDatabase();
    }, [video_id]);


    const handleChange = async (newData) => {

        try {
            console.log('Nuevos Datos -->', newData);
            updateVideoDB(newData); // <-- Función Firebase 
        } catch (error) {
        } finally {
        }
    };

    return (
        <section>
            <h2>Editar Información del Video:</h2>

            {/* Campos no editables (Sólo lectura) */}
            <dl>
                <dt>Link:</dt>
                <dd>{getValues('original_url')}</dd>

                <dt>Autor:</dt>
                <dd>{getValues('author_name')}</dd>
            </dl>

            {/* Formulario Principal */}
            <form onSubmit={handleSubmit(handleChange)}>

                <label htmlFor='video_title'>Título:</label>
                <input
                    type='text'
                    id="video_title"
                    {...register('title', { required: true })}
                />

                <label htmlFor='thumbnail_url'>URL Portada:</label>
                <input
                    type='text'
                    id='thumbnail_url'
                    {...register('thumbnail_url')}
                />
                {/* Pequeña previsualización si hay URL */}
                {watchedThumbnail && (
                    <img src={watchedThumbnail} alt="Thumb" />
                )}

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
