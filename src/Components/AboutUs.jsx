import { useContext } from "react";
import UserContext from "../utils/userContext";

const AboutUs = () => {
    const {userName, setUserName} = useContext(UserContext);
    return(
        <>
        <h1>About Us</h1>
        <input className=" text-black px-4 py-2 rounded" value={userName} onChange={(e) => {setUserName(e.target.value)}}/>
        <h1 className=" font-semibold">{userName}</h1>
        </>
    );
}

export default AboutUs;