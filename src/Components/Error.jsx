import { useRouteError } from "react-router-dom";
import "./error.css";

const Error = () => {
    const error  = useRouteError();
    return (
        <div className="Error">
        <h1>Object Oriented Programming !!!!!!</h1>
        <h1>{error.status} : {error.statusText}</h1>
        </div>
    )
}

export default Error;