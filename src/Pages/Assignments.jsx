import { useEffect, useState } from "react";
import AssignmentCard from "../components/AssignmentCard";
import { useLoaderData } from "react-router-dom";


const Assignments = () => {
    const loadedAssignment = useLoaderData();
    const [filter, setFilter] = useState('all')
    const [features, setFeatures] = useState(loadedAssignment)

    useEffect(()=>{
        if(filter === "all"){
            setFeatures(loadedAssignment)
        }else{
            const filterAssignment = loadedAssignment.filter(assignments => assignments.difficulty === filter)
            setFeatures(filterAssignment)
        }
    },[filter])

    return (
        <div>
         <div className="dropdown dropdown-bottom justify-center mx-auto my-10 flex">
         <div tabIndex={0} role="button" className=" btn m-1">Difficulty Level</div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li onClick={()=>setFilter("Easy")} >Easy</li>
              <li onClick={()=>setFilter("Medium")} >Medium</li>
              <li onClick={()=>setFilter("Hard")}>Hard</li>
              </ul>
         </div>
            <div className='grid grid-cols-1 p-4 gap-8 mt-8 lg:mt-16 md:grid-cols-2 lg:grid-cols-4'>
            {features
              .map(feature => (
                <AssignmentCard key={feature._id} 
                feature={feature}
                features={features}
                setFeatures={setFeatures} />
              ))}
          </div>
        </div>
    );
};

export default Assignments;