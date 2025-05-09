import { useState, createContext } from 'react';

export type AuthUser = {
    name: string;
    email: string;  
}

type UserContextType = {
    user: AuthUser | null; // user can be null or AuthUser type
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>; // setUser is a function that takes a value of type AuthUser or null and returns void
}

type UserContextProvderProps = {
    children: React.ReactNode
}

export const UserContext = createContext<UserContextType | null>(null)
// or using type assertion
// export const UserContext = createContext<UserContextType>({} as UserContextType) // inital value is different from the type of the state, so we need to use type assertion to define the type of the state.

export const UserContextProvider = ({children}: UserContextProvderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null) // inital value is different from the type of the state, so we need to use union type to define the type of the state. 
                                                            // initial value is null and the type of the state is AuthUser. So we need to use union type to define the type of the state. initial value is null and the type of the state is AuthUser.

    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}