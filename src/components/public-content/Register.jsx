import { useForm } from 'react-hook-form';

export default function Register() {

    const {
        register,
        handleSubmit,
        reset,
        // formState: { errors },
    } = useForm();

    const handleRecord = (registerData) => {
        console.log('Datos Registro -->', registerData);
    };

    return (
        <form onSubmit={handleSubmit(handleRecord)} noValidate>
            <p>Registro</p>
            {/* CORREO ELECTRÓNICO REGISTRO */}

            <label htmlFor='emailRegister'>Correo Electrónico:</label>
            <input
                type="email"
                placeholder="Introduce aquí tu correo electrónico"
                id='emailRegister'
                {...register("emailRegister", {
                    required: "El correo es obligatorio",

                    // INTRODUCIR UNA VALIDACIÓN
                    // validate: (value) => {
                    //     const esValido = value.includes('@'); // Tu lógica aquí
                    //     return esValido || "Formato de correo no válido";
                    // }

                })}
            />
            {/* {errors.emailLogin && <span>{errors.emailLogin.message}</span>} */}


            {/* CONTRASEÑA REGISTRO */}

            <label htmlFor='passwordRegister'>Contraseña:</label>
            <input
                type="password"
                placeholder="********"
                id="passwordRegister"
                {...register("passwordRegister", {
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
            <button type="submit">Registrarse</button>
        </form>
    );
};

