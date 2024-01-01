import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
  
const Login = () => {
   const [disabled, setDisabled] = useState(true);  

   const {signIn} = useContext(AuthContext)
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";
   console.log('state in the Location login page', location.state);

   useEffect(() => {
    loadCaptchaEnginge(6); 
   }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from, { replace: true })
        })
    }

    const handleValidateCaptcha = e => {
          const user_captcha_value = e.target.value;
          if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
          }
    }

    return (<>
      <Helmet>
          <title>Bistro || Login</title>
      </Helmet>
        <div className="hero min-h-screen">
        <div className="hero-content flex-col md:flex">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-yellow-600 font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-[450px]  shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                    <LoadCanvasTemplate />
                </label>
                <input  onBlur={handleValidateCaptcha}  type="text" name="captcha" placeholder="Write above captcha here" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <input disabled={disabled} className="btn bg-yellow-500 text-white" type="submit" value='Login' />
              </div>
            <p className='text-center my-2 text-xl'><small>New Here? <Link to='/signup' className='text-blue-600'>Create an Account</Link></small></p>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
      </>
    );
};

export default Login;