import { useState } from "react";

function Contact () {

    const [username, setUsername] = useState ('');

    const onchangeHandler = (event)=> {
        setUsername(event.target.value)
    }

    const onsubmitHandler = (event)=> {
        event.preventDefault();
        console.log(username);
    }

    return (
        <>
            <form onSubmit={onsubmitHandler}>
                <input type="text" 
                onChange={onchangeHandler}/>
                <button>Submit</button>
            </form>
        </>
    )
}

export default Contact;