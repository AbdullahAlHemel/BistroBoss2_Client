import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Components/Hooks/useAxiosSecure";
import { MdDeleteSweep } from "react-icons/md";
import { FaUser, FaUserSecret } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
           const res = await axiosSecure.get('/users',

          //  { headers: {
          //     authorization:`Bearer ${localStorage.getItem('access-token')}`
          //   }}

           );
           return res.data;
        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title:`${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handleDeleteUser = user => {
        Swal.fire({
          title: "Are you sure to Delete?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
           
            axiosSecure.delete(`/users/${user._id}`)
            .then(res => {
              if(res.data.deletedCount > 0){
                refetch()
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
              }
            })
          }
        });
      }

    return (<>
        <div className="flex justify-evenly my-4 text-2xl font-semibold">
            <h2>All users</h2>
            <h2>Total users{users.length}</h2>
        </div>
        <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
            users.map((user, index) => 
                <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td >
                    {
                    user.role === 'admin' ?
                     <FaUserSecret className="text-2xl text-blue-700"/>
                     : 
                     <button onClick={() => handleMakeAdmin(user)}>
                       <FaUser className="text-xl text-blue-400 hover:scale-110" />
                     </button>
                    }
                </td>
                <td >
                    <button onClick={() => handleDeleteUser(user)}>
                       <MdDeleteSweep className="text-2xl text-red-400" />
                    </button>
                </td>
              </tr>)
            }
            

          </tbody>
        </table>
      </div></>
    );
};

export default AllUsers;