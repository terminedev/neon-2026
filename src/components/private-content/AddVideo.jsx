import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getOEmbedDataYT, extractVideoID } from 'services/YTOEmbed';

export default function AddVideo() {

    const [showForm, setShowForm] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            originalUrl: '',
            originalVideoIDUrl: '',
            authorName: '',
            title: '',
            thumbnailUrl: '',
            description: '',
        },
    });

    const handleFetchVideoData = (e) => {
        e.preventDefault();

        const url = getValues('originalUrl');

        if (!url) return console.warn('No hay url.');

        const videoId = extractVideoID(url);

        if (!videoId) return console.error('URL de YouTube no válida')

        const getOembedData = async () => {
            try {
                const data = await getOEmbedDataYT(url);
                setValue('originalVideoIDUrl', videoId);
                setValue('authorName', data.author_name);
                setValue('title', data.title);
                setValue('thumbnailUrl', data.thumbnail_url);
                setShowForm(true);

            } catch (error) {
                setShowForm(false);
            }
        }

        getOembedData();
    };

    const handleAggregate = (data) => {
        console.log('Objeto Final Enviado:', data);
    };

    return (
        <section>

            {/* Sección de Búsqueda */}
            <form onSubmit={handleFetchVideoData}>
                <fieldset>
                    <legend>Sección de Búsqueda</legend>
                    <label htmlFor='originalUrl'>Añadir Video:</label>
                    <input
                        id='originalUrl'
                        type="text"
                        placeholder="Pega el link de YouTube aquí..."
                        {...register('originalUrl', {
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
                        <dd>{getValues('originalVideoIDUrl')}</dd>

                        <dt>Autor:</dt>
                        <dd>{getValues('authorName')}</dd>
                    </dl>

                    {/* Formulario Principal */}
                    <form onSubmit={handleSubmit(handleAggregate)}>

                        {/* Campos editables */}
                        <label htmlFor='videoTitle'>Título:</label>
                        <input
                            type='text'
                            id="videoTitle"
                            {...register('title', { required: true })}
                        />

                        <label htmlFor='thumbnailUrl'>URL Portada:</label>
                        <input
                            type='text'
                            id='thumbnailUrl'
                            {...register('thumbnailUrl')}
                        />
                        {/* Pequeña previsualización si hay URL */}
                        {getValues('thumbnailUrl') && (
                            <img src={getValues('thumbnailUrl')} alt="Thumb" />
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
