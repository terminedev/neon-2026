import { useState } from "react";
import Login from 'components/public-content/Login';
import Register from 'components/public-content/Register';


export default function PrivateAccess() {

    const [isLogin, setIsLogin] = useState(true);

    return (
        <section>
            <h2>Bienvenido/a</h2>

            <button
                type='button'
                onClick={() => setIsLogin(true)}
            >
                Inicia sesión
            </button>
            <button
                type='button'
                onClick={() => setIsLogin(false)}
            >
                Registrarse
            </button>

            {isLogin ? <Login /> : <Register />}
        </section>
    );
};

