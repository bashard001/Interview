import { createContext, useContext, useState } from "react";

const UserContext = createContext();
const useUser = () => useContext(UserContext);


const UserProvider = ({children}) => {
    const [userState, setUserState] = useState();

    console.log('rerender')

const simulateFetch = () => {
    // Simulating a delay in fetching user data
    console.log('fetching')
    setTimeout(() => {
        setUserState({
            user: {
                name: "Alice",
                score: 0
            }
        });
    }, 2000);
}

 
    return (
        <UserContext.Provider value={{userState}}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, useUser };