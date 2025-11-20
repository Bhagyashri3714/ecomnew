import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Themecontext } from "../Context/Themecontext";
import light from '../Icons/light_mode_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg';
import dark from '../Icons/moon_stars_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';

function Nav () {

    const {theme:theme1,setTheme} = useContext(Themecontext);
        console.log(theme1);

        let myStyle = {}; 

        if(theme1 === 'light'){
            myStyle = {
                background :' #c6bcb6 '
            }
        }
        else if(theme1 === 'dark'){
            myStyle = {
                background :' #b9936c '
            }
        }

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm navbar-light" style={myStyle}
                // onClick={()=>{
                //     setTheme('dark')
                // }
                // }
                >
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* <a className="nav-link active" href="/home">Home</a> */}
                            <NavLink className="nlink" to={"/home"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/contact">Contact</a> */}
                            <NavLink className="nlink" to={"/contact"}>Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/about">About</a> */}
                            <NavLink className="nlink" to={"/about"}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/register">Register</a> */}
                            <NavLink className="nlink" to={"/register"}>Register</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/login">Login</a> */}
                            <NavLink className="nlink" to={"/login"}>Login</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/products">Product</a> */}
                            <NavLink className="nlink" to={"/product"}>Product</NavLink>
                        </li>

                        {
                            theme1 === 'light'
                            ? (
                                <img src= {dark}
                                onClick={()=>setTheme('dark')}/>
                            )
                            :
                            (
                                <img src= {light}
                                onClick={()=>setTheme('light')}/>
                            )
                        }
                        </ul>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            
        </>
    )
}

export default Nav;