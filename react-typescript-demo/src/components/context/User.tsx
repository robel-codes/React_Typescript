import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'

export const User = () => {
    const userContext = useContext(UserContext)
    const handleLogin = () => {
        if (userContext) {  //If statement can be removed if type assertion is used in UserContext.tsx
            userContext.setUser({
                name: 'John Doe',
                email: 'johndoe@example.com'
            })
      }
    }
    const handleLogout = ()=> {
        if (userContext) {   //If statement can be removed if type assertion is used in UserContext.tsx
            userContext.setUser(null)
        }
    }

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User name is {userContext?.user?.name} {}</div>
        <div>User email is {userContext?.user?.email} </div>
    </div>
  )
}
