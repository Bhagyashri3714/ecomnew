import { useContext } from "react";
import { Themecontext } from "../Context/Themecontext";

function Home () {

    const data = useContext(Themecontext);
    console.log(data.theme);
    
    return (
        <>
            <p>This is Home Component</p>
        </>
    )
}

export default Home;