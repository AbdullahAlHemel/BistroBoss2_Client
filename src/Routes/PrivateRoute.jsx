import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return  <div className="md:w-[50px] py-[250px] m-auto"><span className="loading loading-dots loading-lg"></span></div>
    }
    
    if(user){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;