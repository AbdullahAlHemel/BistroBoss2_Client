import Swal from "sweetalert2";
import UseAuth from "../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";

const FoodCard = ({item}) => {
    const { _id, name, recipe, image, price} = item;
    const {user} = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

    const handleAddToCart = () => {
       if(user && user.email){
        //TODO: send cart item to the database
        const cartItem = {
          menuId : _id,
          email: user.email,
          name,
          image,
          price 
          }
          axiosSecure.post('/carts', cartItem)
          .then(res => {console.log(res.data)
             if(res.data.insertedId){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "card added successfully",
                showConfirmButton: false,
                timer: 1500
              });
              refetch()
            }}
          )
       }
       else{
        Swal.fire({
            title: "Please Login To The Cart",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Login"
          }).then((result) => {
            if (result.isConfirmed) {
                navigate('/login', {state: {from: location}})
            }
          });
       }
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <p className='-mb-10 z-10 ml-5 text-[20px] text-center font-bold text-white bg-slate-500 w-[80px]'>$ {price}</p>
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body  text-center ">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                    <button onClick={handleAddToCart} className="px-5 btn btn-outline border-0 border-b-2 bg-slate-100 mb-2">Add to Cart</button>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default FoodCard;