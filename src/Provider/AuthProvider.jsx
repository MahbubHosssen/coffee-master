import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.init";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState([])


    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }


    const userInfo = {
        signUp,
        signIn,
        logout,
        user,
        setUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;