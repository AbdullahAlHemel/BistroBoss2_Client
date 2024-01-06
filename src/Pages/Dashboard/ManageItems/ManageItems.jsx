import { IoIosTrash } from "react-icons/io";
import UseMenu from "../../../Components/Hooks/UseMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaEdit } from "react-icons/fa";

const ManageItems = () => {
    const [menu] = UseMenu();

    const handleDelete = id => {
        // Swal.fire({
        //   title: "Are you sure to Delete?",
        //   text: "You won't be able to revert this!",
        //   icon: "warning",
        //   showCancelButton: true,
        //   confirmButtonColor: "#3085d6",
        //   cancelButtonColor: "#d33",
        //   confirmButtonText: "Yes, delete it!"
        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     axiosSecure.delete(`/carts/${id}`)
        //     .then(res => {
        //       if(res.data.deletedCount > 0){
        //         refetch()
        //         Swal.fire({
        //           title: "Deleted!",
        //           text: "Your file has been deleted.",
        //           icon: "success"
        //         });
        //       }
        //     })
        //   }
        // });
      }

    return (
        <div>
           <SectionTitle heading='Manage All Items' subHeading='Hurry Up'></SectionTitle>            
       
           <div className="overflow-x-auto">
  <table className="table w-full mx-5">
    {/* head */}
    <thead>
      <tr>
        <th>
           #
        </th>
        <th>Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      { menu.map((item, index) =>  <tr key={item._id}>
        <th>
           {index + 1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
           <div>
            <h2 className="font-semibold">{item.name}</h2>
           </div>
        </td>
        <td>
            
            <h2>$ {item.price}</h2>
        </td>
        <td>
          <button className="btn btn-ghost btn-sm"><FaEdit className="text-green-400 "></FaEdit></button>
        </td>
        <td>
        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs"><IoIosTrash className="text-2xl rounded-full text-red-400 hover:text-red-600"/></button>
        </td>
      </tr>    )}
    </tbody>   
  </table>
</div>
        </div>
    );
};

export default ManageItems;