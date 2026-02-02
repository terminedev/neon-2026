import { useForm } from 'react-hook-form';
import { useAuth } from '../../contexts/AuthProvider';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const { userLogin } = useAuth();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        // formState: { errors },
    } = useForm();

    const handleLoggedIn = (loginData) => {

        const { email, password } = loginData;

        try {
            setError(null);
            userLogin({ email, password });
            navigate('/');
        } catch (error) {
            setError(error.message)
        }
    };

    return (
        <form onSubmit={handleSubmit(handleLoggedIn)} noValidate>
            <p>Login</p>
            {/* CORREO ELECTRÓNICO LOGIN */}

            <label htmlFor='email'>Correo Electrónico:</label>
            <input
                type="email"
                placeholder="Introduce aquí tu correo electrónico"
                id='email'
                {...register("email", {
                    required: "El correo es obligatorio",

                    // INTRODUCIR UNA VALIDACIÓN
                    // validate: (value) => {
                    //     const esValido = value.includes('@'); // Tu lógica aquí
                    //     return esValido || "Formato de correo no válido";
                    // }

                })}
            />
            {/* {errors.emailLogin && <span>{errors.emailLogin.message}</span>} */}


            {/* CONTRASEÑA LOGIN */}

            <label htmlFor='password'>Contraseña:</label>
            <input
                type="password"
                placeholder="********"
                id="password"
                {...register("password", {
                    required: "La contraseña es obligatoria",

                    // INTRODUCIR UNA VALIDACIÓN
                    // validate: (value) => {
                    //     const esValido = value.includes('@'); // Tu lógica aquí
                    //     return esValido || "Formato de correo no válido";
                    // }
                })}
            />
            {/* {errors.passwordLogin && <span>{errors.passwordLogin.message}</span>} */}

            {error && <p>{error}</p>}
            <button type="button" onClick={() => reset()}>Limpiar Campos</button>
            <button type="submit">Iniciar Sección</button>
        </form>
    );
};

