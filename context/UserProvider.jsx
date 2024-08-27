import React, { useContext, useState, createContext } from "react";

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);


const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: '',
        username: '',
        age: -1,
        email: '',
        date: new Date(),
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;