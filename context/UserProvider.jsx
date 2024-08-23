import React, { useContext, useState, createContext } from "react";

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);


const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'index',
        username: 'index',
        age: 'index',
        email: 'index',
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;