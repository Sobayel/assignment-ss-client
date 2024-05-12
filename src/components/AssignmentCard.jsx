import { MdDeleteForever } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { LuView } from "react-icons/lu";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AssignmentCard = ({ feature, features, setFeatures }) => {
    const {_id, name, mark, date, description, image } = feature || {};
    const {user} = useContext(AuthContext)


    const handleDelete = _id =>{
        Swal.fire({
            title:"Are you sure?",
            text:"You won't be able to revert this",
            icon:"warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) =>{
            if(result.isConfirmed){
                fetch(`http://localhost:5000/skillUp/${_id}`,{
                    method:'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        Swal.fire(
                            "Deleted!",
                            "Your Art has been deleted",
                            "success"
                        );
                        const remaining = features.filter(ass => ass._id !== _id)
                        setFeatures(remaining)
                    }
                })
            }
        })
    }

    return (
        <div>
            <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img className="object-cover object-center w-full h-56" src={image} alt="" />

                <div className="flex justify-between px-6 py-3 bg-gray-900">
                    <p className="font-semibold text-white">Mark:{mark}</p>
                    <p className="font-semibold text-white">Date:{date}</p>
                </div>

                <div className="px-6 py-4">
                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{name}</h1>

                    <p className="py-2 text-gray-700 dark:text-gray-400">{description}</p>

                    <div className="inline-flex gap-3 lg:flex-col">
                        {
                            user?.email && <div className="items-center mt-2 lg:mt-4 text-gray-700 dark:text-gray-200">
                            <button onClick={()=>handleDelete(_id)} className="px-2 btn text-sm inline-flex"><span className="text-lg"><MdDeleteForever></MdDeleteForever></span> Delete</button>
                        </div>
                        }
                    

                    <div className="items-center mt-2 text-gray-700 dark:text-gray-200">
                        <Link to={`/update/${_id}`} className="px-2 btn text-sm"><span className="text-lg"><GrUpdate></GrUpdate></span>Update</Link>
                    </div>

                    <div className="items-center mt-2 text-gray-700 dark:text-gray-200">
                        <Link to={`/viewDetails/${_id}`} className="px-2 btn text-sm"><span className="text-lg"><LuView></LuView></span>View</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;