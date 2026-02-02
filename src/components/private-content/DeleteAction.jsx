export default function DeleteAction({ item, type, onDelete, onCancel }) {

    const handleDelete = () => {
        console.log(`Eliminando ${type}:`, item);
    };

    if (!item) return null;

    return (
        <>
            <h3>¿Estás seguro de eliminar esta {type}?</h3>
            <p>
                Vas a borrar: <strong>{item.title || item.recordTitlePlayList}</strong>
            </p>

            {item.thumbnail_url && (
                <img
                    src={item.thumbnail_url}
                    alt="preview"
                    style={{ width: '80px', borderRadius: '4px', marginBottom: '15px' }}
                />
            )}

            <div>
                <button onClick={onCancel}>
                    No, mantener
                </button>
                <button onClick={handleDelete}>
                    Sí, eliminar definitivamente
                </button>
            </div>
            <p>
                * Esta acción no se puede deshacer.
            </p>
        </>
    );
}