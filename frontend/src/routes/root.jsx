import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LoggedInContext from "../context/loggedInContext";


const Root = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        console.log("isLoggedIn", isLoggedIn)
    }, [isLoggedIn]);

    return (
        <LoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            <header>
                <nav>

                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/register">Registrarse</Link></li>
                        <li><Link to="/login">Iniciar sesión</Link></li>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/logout">Cerrar sesión</Link></li>
                        <li><Link to="/inicio">Inicio</Link></li>
                        {!isLoggedIn ?
                            <>
                                <h1>no tienes sesion iniciada ROOT</h1>
                            </>
                            :
                            <>
                            <li><Link to="/logout">Cerrar sesión</Link></li>
                            <h1>hola </h1>
                            </>
                        }
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </LoggedInContext.Provider>
    );
};

export default Root;