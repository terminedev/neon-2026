export default function DeleteVideo({ video_id, onClose }) {

    const handleDelete = async () => {
        try {

            deleteVideoDB(video_id); // <-- Función Firebase. 
            onClose();

        } catch (error) {

        }
    };

    return (
        <dialog>

            <h3>¿Estás seguro?</h3>
            <p>Esta acción no se puede deshacer.</p>

            <button
                onClick={onClose}
            >
                Cancelar
            </button>

            <button
                onClick={handleDelete}
            >
                Borrar
            </button>
        </dialog>
    );
};

