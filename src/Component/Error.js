import { useRouteError } from "react-router-dom";
import err1 from '../Images/error.jpeg';

function Error () {
    const err = useRouteError();
    console.log(err);
    return (
        <>
            <img src={err1} alt="error" />
            <h1>{err.data}</h1>
            <h1>{err.status}</h1>
            <h1>{err.statusText}</h1>
            <h1>{err.error.message}</h1>
        </>
    )
}

export default Error;