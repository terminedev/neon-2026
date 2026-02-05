import {
    createContext,
    useCallback,
    useContext,
    useState,
    useMemo
} from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const loginDB = useCallback(async (email = '', password = '') => {
        try {

            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            const user = userCredential.user;

            setUser(user);

            return { success: true };

        } catch (error) {

            console.error("Error al iniciar sesión:", error.code, error.message);

            throw error;
        }
    }, []);

    const registerDB = useCallback(async (email = '', password = '') => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const newUser = userCredential.user;

            setUser(newUser);
            return { success: true };
        } catch (error) {
            console.error("Error al registrar usuario:", error.code, error.message);
            throw error;
        }
    }, []);

    const logout = useCallback(async () => {
        try {
            await signOut(auth);
            setUser(null);
            return { success: true };
        } catch (error) {
            console.error("Error al cerrar sesión:", error.code, error.message);
            throw error;
        }
    }, []);


    // --------------------------------------

    const contextValue = useMemo(() => ({
        user,
        setUser,
        loginDB,
        registerDB,
        logout
    }), [user,
        setUser,
        loginDB,
        registerDB,
        logout]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}