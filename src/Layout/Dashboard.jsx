import { NavLink, Outlet } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";    
import { FaList, FaRegCalendarAlt, FaShopify, FaUsers, FaUtensils } from "react-icons/fa";
import { MdEmail, MdManageAccounts } from "react-icons/md";
import { GoCodeReview } from "react-icons/go";
import { TbBrandBooking } from "react-icons/tb";
import useCart from "../Components/Hooks/useCart";
import useAdmin from "../Components/Hooks/useAdmin";

const Dashboard = () => {

    const [cart] = useCart();

    //TODO: get isAdmin value from the database
    // const isAdmin = true;
    const [isAdmin] = useAdmin()


    return (
        <div className="flex max-w-5xl  m-auto">
           <div className="w-64 min-h-screen bg-orange-500 ">
                <ul className="menu gap-2 text-xl font-semibold py-6 ">
                     
                {   isAdmin ?  <>
                    <li><NavLink to='/dashboard/adminHome'><IoHomeOutline />Admin Home</NavLink></li>
                    <li><NavLink to='/dashboard/addItems'><FaUtensils/>Add Items</NavLink></li>
                    <li><NavLink to='/dashboard/manageItems'><FaList/>Manage Items</NavLink></li>
                    <li><NavLink to='/dashboard/manageBookings'><MdManageAccounts />Manage Bookings</NavLink></li>
                    <li><NavLink to='/dashboard/allUsers'><FaUsers />All Users</NavLink></li>
                </>
                  :<>
                  

                    <li><NavLink to='/dashboard/userHome'><IoHomeOutline />UserHome</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'><FaRegCalendarAlt />Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/review'><GoCodeReview />Add a Review</NavLink></li>
                    <li><NavLink to='/dashboard/cart'><BsCart4 />My Cart</NavLink></li>
                    <li><NavLink to='/dashboard/bookings'><TbBrandBooking />My Bookings</NavLink></li>
                      
                          <div className="divider"></div>

                    <li><NavLink to='/dashboard/home'><IoHomeOutline />Home</NavLink></li>
                    <li><NavLink to='/dashboard/home'><FaShopify />Menu</NavLink></li>
                    <li><NavLink to='/order/contract'><MdEmail />Contract</NavLink></li>
                    </>}
                </ul>
           </div>   
           <div className="flex-1">
               <Outlet></Outlet>
           </div>  
        </div>
    );
};

export default Dashboard;