import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const assignment = useLoaderData()
    const { _id, name, mark, date, description, difficulty, image } = assignment || {};
    const [startDate, setStartDate] = useState(new Date())

    const handleUpdateAssignment = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const mark = form.mark.value;
        const date = form.date.value;
        const description = form.description.value;
        const difficulty = form.difficulty.value;
        const image = form.image.value;
        const assignmentForm = { name, mark, date, description, difficulty, image };

        fetch(`https://assignment-ss-server.vercel.app/skillUp/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(assignmentForm)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="flex justify-center items-center my-12">
            <section className="p-2 md:p-5 mx-auto bg-white rounded-xl shadow-xl">
                <h2 className="text-2xl mb-10 font-bold text-gray-700 text-center">
                    Update Assignment Form
                </h2>
                <form onSubmit={handleUpdateAssignment}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                        <div>
                            <label className="text-slate-700 font-semibold"
                                htmlFor="title">
                                Assignment Title
                            </label>
                            <input type="text" placeholder="Assignment Title" name="name" defaultValue={name} id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-slate-700 font-semibold"
                                htmlFor="marks">
                                Marks
                            </label>
                            <input type="text" placeholder="Marks" name="mark" id="" defaultValue={mark} className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-slate-700 font-semibold">
                                Date
                            </label>
                            <ReactDatePicker name="date" defaultValue={date}
                                className='border p-2 rounded-md'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold" htmlFor="">
                                Difficulty Level
                            </label>
                            <select name="difficulty" id="difficulty" defaultValue={difficulty} className="border p-2 rounded-sm">
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-3">
                        <label className="text-slate-700 font-semibold"
                            htmlFor="image">
                            Thumbnail Image URL
                        </label>
                        <input type="text" placeholder="Thumbnail Image URL" name="image" defaultValue={image} id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" />
                    </div>
                    <div className="mt-3">
                        <label className="text-slate-700 font-semibold"
                            htmlFor="description">
                            Description
                        </label>
                        <textarea type="text" placeholder="Description" name="description" defaultValue={description} id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" />
                    </div>
                    <div className="mt-4">
                        <input type="submit" value="Update Assignment" className='px-8 w-full py-2.5 leading-5 btn text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600' />
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Update;