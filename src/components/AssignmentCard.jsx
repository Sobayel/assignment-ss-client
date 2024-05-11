import { MdDeleteForever } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { LuView } from "react-icons/lu";

const AssignmentCard = ({feature}) => {
    console.log(feature)
    const {name, mark,date, description, image} = feature ||{} ;
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

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <MdDeleteForever></MdDeleteForever>
            <h1 className="px-2 text-sm">Delete</h1>
        </div>

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <GrUpdate></GrUpdate>
            <h1 className="px-2 text-sm">Update</h1>
        </div>

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <LuView></LuView>
            <h1 className="px-2 text-sm">View</h1>
        </div>
    </div>
</div>
        </div>
    );
};

export default AssignmentCard;