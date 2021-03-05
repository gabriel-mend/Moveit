import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface UserProviderProps {
  children: ReactNode
}

interface UserData {
  user: string
  setUser: Dispatch<SetStateAction<string>>
}

export const UserContext = createContext({} as UserData)

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState('')


  return (
    <UserContext.Provider value={{
        user,
        setUser
    }}>
      {children}
    </UserContext.Provider>
  )
}