import { Children, createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();
const useUser = () => useContext(UserContext);


const UserProvider = ({children}) => {
    const [userState, setUserState] = useState();
    const [rerender, setRerender] = useState(true);

console.log(rerender)

const simulateFetch = () => {
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