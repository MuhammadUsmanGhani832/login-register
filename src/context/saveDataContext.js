import { createContext, useContext, useState } from "react";

const SaveUserContext = createContext();

export const useSaveUserContext = () => {
    return useContext(SaveUserContext)
}

export const SaveUserProvider = ({ children }) => {
    const [usersStorage, setUsersStorageState] = useState(() => JSON.parse(localStorage.getItem('users-list')) || []);

    const setUsersStorage = (data, local) => {
        setUsersStorageState([...local, data]);
        localStorage.setItem('users-list', JSON.stringify([...local, data]))
    }
    return (
        <SaveUserContext.Provider value={{ usersStorage, setUsersStorage }}>
            {children}
        </SaveUserContext.Provider>
    );
};
