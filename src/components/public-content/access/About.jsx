import { Link } from "react-router-dom";

export default function About() {
    return (
        <section>
            Esto es el About
            <Link to={'/acceder'}>Loguearse/Registrarse</Link>
        </section>
    )
};