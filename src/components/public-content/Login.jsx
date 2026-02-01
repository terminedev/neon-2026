import { useForm } from 'react-hook-form';

export default function Login() {

    const {
        register,
        handleSubmit,
        reset,
        // formState: { errors },
    } = useForm();

    const handleLoggedIn = (loginData) => {
        console.log('Datos Login -->', loginData);
    };

    return (
        <form onSubmit={handleSubmit(handleLoggedIn)} noValidate>
            <p>Login</p>
            {/* CORREO ELECTRÓNICO LOGIN */}

            <label htmlFor='emailLogin'>Correo Electrónico:</label>
            <input
                type="email"
                placeholder="Introduce aquí tu correo electrónico"
                id='emailLogin'
                {...register("emailLogin", {
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

            <label htmlFor='passwordLogin'>Contraseña:</label>
            <input
                type="password"
                placeholder="********"
                id="passwordLogin"
                {...register("passwordLogin", {
                    required: "La contraseña es obligatoria",

                    // INTRODUCIR UNA VALIDACIÓN
                    // validate: (value) => {
                    //     const esValido = value.includes('@'); // Tu lógica aquí
                    //     return esValido || "Formato de correo no válido";
                    // }
                })}
            />
            {/* {errors.passwordLogin && <span>{errors.passwordLogin.message}</span>} */}


            <button type="button" onClick={() => reset()}>Limpiar Campos</button>
            <button type="submit">Iniciar Sección</button>
        </form>
    );
};

