
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const PendingAssignment = () => {
    const [obtainedMarks, setObtainedMark] = useState(0);
    const loaderPdfData = useLoaderData()

    const handleSubmitAssignment = (mark, name, status)=>{

    }
    return (
        <div className='my-8'>
            <h1 className='text-4xl text-purple-400 font-bold flex justify-center'>Pending Assignment:{loaderPdfData.length}</h1>
            <div className=' mt-10'>
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr className="text-xl text-center">
                                <th>Title</th>
                                <th>Email</th>
                                <th>Marks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loaderPdfData.map((data, index) => {
                                    return <tr key={index}>
                                        <td>{data?.name}</td>
                                        <td >{data?.email}</td>
                                        <td>{data?.mark}</td>
                                        <td>
                                            <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Give Mark</button>
                                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                                <div className="modal-box">
                                                    <h3 className="font-normal text-sm">PDF: {data?.pdf}</h3>
                                                    <p className="py-4">Note: {data?.note}</p>
                                                    <form onClick={e=>{
                                                        e.preventDefault()
                                                        const data ={
                                                            name : data?.name,
                                                            totalMark: data?.mark,
                                                            obtainedMarks: 
                                                        }
                                                        fetch(`http://localhost:5000/my-assignment`,{
                                                            method: "POST",
                                                            headers:"Application/json",
                                                            body: JSON.stringify({name:data?.name, })
                                                        })
                                                    }}>
                                                        <div className="mt-3">
                                                            <label className="font-semibold"
                                                                htmlFor="image">
                                                                Obtained Marks:
                                                            </label>
                                                            <input onChange={e=> setObtainedMark(e.target.value)} type="link" placeholder="PDF/Doc" name="mark" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" />
                                                        </div>
                                                        <div className="mt-3">
                                                            <label className="font-semibold"
                                                                htmlFor="description">
                                                                Feedback
                                                            </label>
                                                            <textarea type="text" placeholder="Quick Note Text" name="feedback" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" />
                                                        </div>
                                                        <div className="modal-action">
                                                            <input type="submit" value="Submission" className='px-8 btn w-full py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600' />
                                                        </div>
                                                    </form>
                                                </div>
                                            </dialog>
                                        </td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default PendingAssignment;