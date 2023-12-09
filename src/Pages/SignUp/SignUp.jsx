import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Components/Hooks/useAxiosPublic";

const SignUp = () => {
    const axiosPublic = useAxiosPublic()
    const {register,handleSubmit ,reset , formState: { errors }} = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate()

    const onSubmit = (data) => { 
        console.log(data) 
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
                // create user entry in the database
                const userInfo = {
                    name: data.name,
                    email: data.email
                }    
                axiosPublic.post('/users', userInfo)
                .then(res => {
                    if(res.data.insertedId){
                        console.log('user added to the database');
                        reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "User Profile has created Successfully",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          navigate('/')
                    }
                })
                
            })
            .catch(error => console.log(error))
        })
    }

    return (<>
             <Helmet>
                 <title>Bistro || Signup</title>
             </Helmet>
   <div className="hero min-h-screen">
    <div className="hero-content flex-col md:flex">
        <div className="text-center lg:text-left">
        <h1 className="text-3xl font-semibold text-yellow-500">Sign up now!</h1>
        </div>
        <div className="card w-[500px] shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered"  />
            {errors.name && <span className="text-red-500 mt-1">name is required</span>}
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Photo URL</span>
            </label>
            <input type="text" {...register("PhotoURL", { required: true })} placeholder="Photo URL" className="input input-bordered"  />
            {errors.name && <span className="text-red-500 mt-1">Photo URL is required</span>}
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered"  />
            {errors.email && <span className="text-red-500 mt-1">email is required</span>}
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="password" {...register("password", 
            { required: true ,
             minLength: 6, 
             maxLength: 20,
             pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/
             })} placeholder="password" className="input input-bordered" />
            {errors.password ?. type==='required'  && <span className="text-red-500 mt-1">password is required</span>}
            {errors.password ?. type==='minLength' && <span className="text-red-500 mt-1">password must be more then 6 character</span>}
            {errors.password ?. type==='maxLength' && <span className="text-red-500 mt-1">password must be less then 20 character</span>}
            {errors.password ?. type==='pattern' && <span className="text-red-500 mt-1">password must have one uppercase, one lowercase, one number, one special character</span>}
            <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
            </div>
            <div className="form-control mt-6">
                <input  className="btn btn-accent" type="submit" value='SignUp'/>
            </div>
            <p className='text-center my-2 text-xl'><small>Already a account? <Link to='/login' className='text-blue-600'>Login</Link></small></p>
        </form>
        </div>
    </div>
   </div>
   </>
    );
};

export default SignUp;