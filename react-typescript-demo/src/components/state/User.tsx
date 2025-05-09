import { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null) // inital value is different from the type of the state, so we need to use union type to define the type of the state. 
                                                        // initial value is null and the type of the state is AuthUser. So we need to use union type to define the type of the state. initial value is null and the type of the state is AuthUser.

    // or with type assertion
    // const [user, setUser] = useState<AuthUser>({} as AuthUser) // inital value is different from the type of the state, so we need to use type assertion to define the type of the state.

    const handleLogin = () => {
        setUser({
            name: 'John Doe', 
            email:  'John.Doe@example.com'
            })
    }
    const handleLogout = () => {
        setUser(null)
    }

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User name is {user?.email}</div>
        <div>User email is {user?.email}</div>
    </div>
  )
}
