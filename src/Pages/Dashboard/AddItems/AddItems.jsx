import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Components/Hooks/useAxiosPublic";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic()

    const onSubmit = async(data) => {
        console.log(data)
        //image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-Type': 'multipart/form-data'
            }
        });
        if(res.data.success){
            //now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
        }
        console.log(res.data)
    }
    return (
        <div>
           <SectionTitle heading='add an Item' subHeading="What's New?"></SectionTitle>
           <div className="bg-base-200 w-full p-10 rounded">
           <form onSubmit={handleSubmit(onSubmit)}>

                {/* {name} */}
                <div className="form-control w-full my-4 ">
                    <div className="label">
                        <span className="label-text">Recipe name</span>
                    </div>
                    <input
                     {...register("name", {required: true}) } 
                     type="text" 
                     placeholder="Recipe name" 
                     className="input input-bordered w-full" />
                </div>
                    
                
                <div className="flex gap-5">

                    {/* {category} */}
                    <div className="w-1/2">
                     <div className="label">
                        <span className="label-text">category</span>
                     </div>
                     <select 
                       defaultValue="default" 
                       required
                       {...register("category")} 
                       className="select select-bordered w-full">
                        <option disabled value="default" selected>Select a category</option>
                        <option value='salad'>Salad</option>
                        <option value='pizza'>Pizza</option>
                        <option value='desert'>Desert</option>
                        <option value='drink'>Drink</option>
                     </select>
                   </div>

                    {/* {price} */}
                    <div className="form-control w-1/2 ">
                    <div className="label">
                        <span className="label-text">Price</span>
                    </div>
                    <input {...register("price")} 
                            required
                            type="number" 
                            placeholder="price" 
                            className="input input-bordered w-full" />
                    </div>
                </div>
                  
                    {/* {Details} */}
                <div className="my-4">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>
                    </label>
                <textarea 
                required 
                {...register('recipe')} 
                className="textarea textarea-bordered w-full h-32" 
                placeholder="Recipe Details"></textarea>
                </div>

                <input type="file" 
                required 
                {...register('image')} 
                className="file-input file-input-bordered w-full" />

                <button className="btn mt-4 px-8 bg-orange-400 text-white "><FaUtensils/>Add Item</button>
            </form>
           </div>
        </div>
    );
};

export default AddItems;