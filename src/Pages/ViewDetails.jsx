import { useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {
    const cardsDetails = useLoaderData()
    console.log(cardsDetails)
    // const {id} = useParams();
    // const card = cardsDetails.find(card => card._id.toString() === id)
    // console.log(card);
    const { name, mark, difficulty, date, description, image } = cardsDetails || {};
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
                    <button className="btn mt-3" onClick={() => document.getElementById('my_modal_5').showModal()}>Take Assignment</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                    <div className="mt-3">
                            <label className="text-slate-700 font-semibold"
                            htmlFor="image">
                                PDF
                            </label>
                            <input type="text" placeholder="PDF/Doc" name="pdf" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required/>
                        </div>
                        <div>
                            <input type="text" name="" id="" />
                            <div className="mt-3">
                            <label className="text-slate-700 font-semibold"
                            htmlFor="description">
                                Quick Note Text
                            </label>
                            <textarea type="text" placeholder="Quick Note Text" name="note" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required/>
                        </div>
                            
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn">Submission</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;