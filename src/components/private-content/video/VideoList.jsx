export default function VideoList({ videos }) {

    if (!videos || videos.length <= 0) return <p>No hay videos qué mostrar.</p>;

    return (
        <ul>
            {videos.map((video) => (
                <li key={video.originalUrl}>
                    <VideoCard
                        videoData={video}
                    />
                </li>
            ))}
        </ul>
    );
}

