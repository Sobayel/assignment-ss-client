/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";


const Row = ({ data, loaderPdfData, serial }) => {

    const [obtainedMarks, setObtainedMark] = useState(0);
    const [feedback, setFeedBack] = useState('')
    const navigate = useNavigate()

    const handleObtainedMark = e => setObtainedMark(e.target.value)
    const handleFeedback = e => setFeedBack(e.target.value)

    return (
        <tr >
            <td className='text-center font-semibold text-sm'>{serial}</td>
            <td className='text-center text-sm font-semibold'>{data?.name}</td>
            <td className='text-center text-sm font-semibold'>{data?.email}</td>
            <td className='text-center text-sm font-semibold'>{data?.mark}</td>
            <td>
                <button className="btn justify-center mx-auto flex text-sm btn-primary" onClick={() => document.getElementById(`my_modal_${serial}`).showModal()}>Give Mark</button>
                <dialog id={`my_modal_${serial}`} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-normal text-sm"><span className='text-blue-800 font-semibold'>PDF:</span> {data?.pdf}</h3>
                        <p className="py-4 text-sm"><span className='text-blue-800 font-semibold'>Quick Note Text:</span> {data?.note}</p>
                        <form onSubmit={e => {
                            e.preventDefault()
                            const assignmentMarks = {
                                name: data?.name,
                                totalMark: data?.mark,
                                obtainedMarks: obtainedMarks,
                                status: obtainedMarks <= 0 ? "pending" : "complete",
                                feedback
                            }

                            fetch(`http://localhost:5000/my-assignment`, {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(assignmentMarks)
                            }).then(res => {
                                if (res.ok) {
                                    Swal.fire({
                                        title: 'Success!',
                                        text: 'Assignment marks Successfully',
                                        icon: 'success',
                                        confirmButtonText: 'Cool'
                                    })
                                    navigate("/mySubmitted")
                                }

                            }).catch(err => { console.log(err) })
                        }}>
                            <div className="mt-3">
                                <label className="font-semibold text-blue-800 text-xl"
                                    htmlFor="image">
                                    Obtained Marks:
                                </label>
                                <input onChange={handleObtainedMark} type="link" placeholder="PDF/Doc" name="mark" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                            </div>
                            <div className="mt-3">
                                <label className="font-semibold text-blue-800 text-xl"
                                    htmlFor="description">
                                    Feedback
                                </label>
                                <textarea onChange={handleFeedback} type="text" placeholder="Quick Note Text" name="feedback" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                            </div>
                            <div className="modal-action">
                                <input type="submit" value="Submission" className='px-8 btn w-full py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-400' />
                            </div>
                        </form>
                    </div>
                </dialog>
            </td>
        </tr>
    )
}

export default Row