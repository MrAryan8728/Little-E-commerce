import { createContext } from "react";

const UserContext = createContext({
    userName : "Default User",
    status : "Verified"
})

export default UserContext;