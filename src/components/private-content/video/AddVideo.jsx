import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getOEmbedDataYT, extractVideoID } from 'services/YTOEmbed';

export default function AddVideo() {

    const [showForm, setShowForm] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        getValues,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            original_url: '',
            original_video_id_url: '',
            author_name: '',
            title: '',
            thumbnail_url: '',
            description: '',
        },
    });

    const watchedThumbnail = watch('thumbnail_url');

    const handleFetchVideoData = (e) => {
        e.preventDefault();

        const url = getValues('original_url');

        if (!url) return console.warn('No hay url.');

        const videoId = extractVideoID(url);

        if (!videoId) return console.error('URL de YouTube no válida')

        const getOembedData = async () => {
            try {
                const data = await getOEmbedDataYT(url);

                if (!data) return console.warn('No se encontró vídeo.');

                reset({
                    original_url: url,
                    original_video_id_url: videoId,
                    author_name: data.author_name,
                    title: data.title,
                    thumbnail_url: data.thumbnail_url,
                    description: '',
                });
                setShowForm(true);

            } catch (error) {
                setShowForm(false);
            }
        }

        getOembedData();
    };

    const handleAggregate = async (data) => {
        try {
            console.log('Objeto a agregar -->', data);
            // await addVideoDB(data);  // <-- Función Firebase 
        } catch (error) {
        } finally {
        }
    };

    return (
        <section>

            {/* Sección de Búsqueda */}
            <form onSubmit={handleFetchVideoData}>
                <fieldset>
                    <legend>Sección de Búsqueda</legend>
                    <label htmlFor='original_url'>Añadir Video:</label>
                    <input
                        id='original_url'
                        type="text"
                        placeholder="Pega el link de YouTube aquí..."
                        {...register('original_url', {
                            required: 'La URL es requerida',
                        })}
                    />
                    <button type='submit'>Obtener vídeo</button>
                </fieldset>
            </form>

            {/* Mostrar formulario principal si hay resultado */}
            {
                showForm &&
                <>
                    <hr />
                    {/* Campos no editables (Sólo lectura) */}
                    <dl>
                        <dt>ID del Video:</dt>
                        <dd>{getValues('original_video_id_url')}</dd>

                        <dt>Autor:</dt>
                        <dd>{getValues('author_name')}</dd>
                    </dl>

                    {/* Formulario Principal */}
                    <form onSubmit={handleSubmit(handleAggregate)}>

                        <label htmlFor='videoTitle'>Título:</label>
                        <input
                            type='text'
                            id="videoTitle"
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

                        <label >Notas Personales (Descripción):</label>
                        <textarea
                            {...register('description')}
                            rows="4"
                            placeholder="Escribe tus notas aquí..."
                        />

                        <button type="button" onClick={() => reset()}>
                            Restaurar Datos
                        </button>
                        <button type="submit">
                            Guardar Video
                        </button>
                    </form>
                </>
            }
        </section>
    );
};
