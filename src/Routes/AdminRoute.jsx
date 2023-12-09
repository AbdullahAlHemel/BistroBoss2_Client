import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Components/Hooks/UseAuth";
import useAdmin from "../Components/Hooks/useAdmin";

const AdminRoute = ( { children } ) => {
    const { user, loading } = UseAuth()
    const [ isAdmin, isAdminLoading ] = useAdmin()
    const location = useLocation();
        
    if(loading || isAdminLoading){
        return  <div className="md:w-[50px] py-[250px] m-auto"><span className="loading loading-dots loading-lg"></span></div>
    }
    
    if(user && isAdmin){
        return children
    }   
    return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;