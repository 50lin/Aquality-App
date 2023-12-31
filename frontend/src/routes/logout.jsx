import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import LoggedInContext from "../context/loggedInContext";

const Logout = () => {
    const {setIsLoggedIn} = useContext(LoggedInContext);
    const navigate = useNavigate();
    useEffect( () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.setItem('isLoggedIn', 'false');
        setIsLoggedIn(false);
        navigate('/home');
    });
}
    

export default Logout;