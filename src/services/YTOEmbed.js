// Función para obtener datos de OEmbed al obtener la url de Youtube.
export async function getOEmbedDataYT(url) {
    try {
        const response = await fetch(`https://noembed.com/embed?url=${url}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

// Función para extraer el ID de YouTube
export const extractVideoID = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};