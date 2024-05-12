import { useContext, useState } from "react";
import toast from "react-hot-toast";
import {  useLoaderData, useNavigate} from "react-router-dom";

  import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";


const ViewDetails = () => {
    const navigate = useNavigate()
    const cardsDetails = useLoaderData()
    const { name, mark, difficulty, date, description, image } = cardsDetails || {};
const [isOpen, setIsOpen] = useState(false)
const {user} = useContext(AuthContext)
console.log(user.email)

    const handlePdf = event => {
        event.preventDefault();
        const form = event.target;

        const pdf = form.pdf.value;
        const note = form.note.value;
        const status = "pending"
        const email = user.email
        const pdfForm  = {pdf, note,status, email};
        console.log(pdfForm);
        fetch('http://localhost:5000/pdf',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(pdfForm)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Create Assignment Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  navigate("/pendingAssignment")
                setIsOpen(false)
            }
        })
    }


    return (
        <div className="max-w-2xl my-10 justify-center mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <img src={image} alt="" />

            <div className="p-6">
                <div>
                    <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Difficulty Level: {difficulty}</span>
                    <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">{name}</a>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
                </div>

                <div className="mt-4">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <img src="" alt="" />
                            <a href="#" className=" font-semibold mr-12 text-gray-700 dark:text-gray-200" tabindex="0" role="link">Mark: {mark}</a>
                        </div>
                        <span className="mx-1 text-xs text-gray-600 font-semibold dark:text-gray-300">Date: {date}</span>
                    </div>
                    <button className="btn mt-3" onClick={() => {
                        setIsOpen(true)
                        document.getElementById('my_modal_5').showModal()}}>Take Assignment</button>

                   {isOpen &&  <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <form onSubmit={handlePdf} className="modal-box">
                    <div className="mt-3">
                            <label className="font-semibold"
                            htmlFor="image">
                                PDF
                            </label>
                            <input type="text" placeholder="PDF/Doc" name="pdf" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required/>
                        </div>
                        <div>
                            <div className="mt-3">
                            <label className="font-semibold"
                            htmlFor="description">
                                Quick Note Text
                            </label>
                            <textarea type="text" placeholder="Quick Note Text" name="note" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required/>
                        </div>
                            
                            <div className="modal-action">
                                    <input type="submit" value="Submission" className='px-8 btn w-full py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600' />
                            </div>
                        </div>
                    </form>
                    </dialog>}
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;