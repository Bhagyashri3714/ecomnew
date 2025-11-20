import { useSearchParams } from "react-router-dom";

function Login () {
    const [searchParam, setSearchParam] = useSearchParams();
    console.log(searchParam.get('name'));
    console.log(searchParam.get('email'));
    return(
        <>
            <p>This is Login Component</p>
            <button 
            onClick={()=>{
                setSearchParam({name:"ABCD",email:searchParam.get('email')})
            }
            }
            >Change</button>
        </>
    )
}

export default Login;