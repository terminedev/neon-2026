import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const listaUsuariosRegistrados = [];

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const registerNewUser = (userData) => {
        if (!listaUsuariosRegistrados.some(user => user.email === userData.email)) {
            listaUsuariosRegistrados.push(userData);
            setUser(userData);
            return userData;
        } else {
            throw new Error('Correo electonico ya existente')
        }
    };

    const userLogin = ({ email, password }) => {
        const user = listaUsuariosRegistrados.find(user => user.email === email && user.password === password);
        if (user) {
            setUser(user)
            return user;
        } else {
            throw new Error('Usuario no existente');
        }
    };


    return (
        <AuthContext.Provider value={{ user, registerNewUser, userLogin }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}