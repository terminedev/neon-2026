import { Link } from "react-router-dom";

export default function About() {
    return (
        <section>
            **Página Informativa (About):** Una página estática que explique qué tecnologías usaste (React, Firebase, CSS puro), tus dificultades y decisiones.

            **Idea:* Aquí puedes poner capturas de pantalla de cómo se ve la app por dentro para "antojar" al usuario a registrarse.

            Inicia sesión o registrate para usarla!:
            <Link to={'/acceder'}>Acceder</Link>
        </section>
    )
};