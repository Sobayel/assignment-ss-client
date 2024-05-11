import { useEffect, useState } from "react";
import AssignmentCard from "../components/AssignmentCard";


const Assignments = () => {
    const [filter, setFilter] = useState('')
    const [features, setFeatures] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/skillUp?filter=${filter}`)
        .then(res => res.json())
        .then(result =>{
            setFeatures(result)
            console.log(result)
        }).catch(error =>console.log(error))
    },[filter])
    return (
        <div>
         <div className="justify-center mx-auto my-10 flex">
         <select
              onChange={e => {
                setFilter(e.target.value)
              }}
              value={filter}
              name='difficulty'
              id='difficulty'
              className='border p-4 rounded-lg'
            >
              <option value=''>Filter By Difficulty</option>
              <option value='Easy'>Easy</option>
              <option value='Medium'>Medium</option>
              <option value='Hard'>Hard</option>
            </select>
         </div>
            <div className='grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 lg:grid-cols-3'>
            {features
              .map(feature => (
                <AssignmentCard key={feature._id} feature={feature} />
              ))}
          </div>
        </div>
    );
};

export default Assignments;