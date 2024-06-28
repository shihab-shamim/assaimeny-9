import { useContext } from "react";


import {Navigate,useLocation} from 'react-router-dom'
import { AuthContext } from "../provider/AuthProvider";

const PrivetRoute = ({children}) => {
    const location =useLocation()
    console.log(location.pathname)
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivetRoute;