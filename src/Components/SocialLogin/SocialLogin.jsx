import { FaGoogle } from "react-icons/fa";
import UseAuth from "../Hooks/UseAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn} = UseAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user)
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/')
            })
        })
    }
    return (
            <button onClick={handleGoogleSignIn} className="w-96 mb-6 m-auto px-10 btn">
                    <FaGoogle/>Google
            </button>   
    );
};

export default SocialLogin;