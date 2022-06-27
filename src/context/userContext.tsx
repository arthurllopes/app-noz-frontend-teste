import { createContext, ReactNode, useContext, useState } from "react";
import api from "../service/api";
import { setUserSession } from "../utils";

export type UserCredentials = {
    email: string, password: string
}
export type UserData = {
    name: string, email: string, birthdate: string, gender: string, id: string
}

type UserContextType = {
    userLogin: () => Promise<boolean>,
    userCredentials: UserCredentials,
    setUserCredentials: (cb: UserCredentials) => void
    error: string,
    setError: (cb: string) => void,
}
type UserContextProviderProps = {
    children: ReactNode;
};
export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({children}: UserContextProviderProps) => {
    const [error, setError] = useState('')
    const [userCredentials, setUserCredentials] = useState({email: '', password: ''})

    const userLogin = async () => {
        try { 
            setError('')
            const response = await api.post('auth/sign-in', userCredentials)
            const { status, data, headers } = response
            if (status !== 200) throw new Error()
            setUserSession(data, headers.authorization)
            return true
        } catch (err) {
            setError((err as any).response.data.errors.message)
            return false
        }
    }
    return (
        <UserContext.Provider value={{ userLogin, userCredentials, setUserCredentials, error, setError }}>
            {children}
        </UserContext.Provider>
    )
}
//para não precisa fazer duas importaçoes onde for usar o contexto
//funciona como um hook
export const useUser = () => {
    const context = useContext(UserContext)
    return context
}