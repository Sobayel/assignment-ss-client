import { Link } from "react-router-dom";


const Slide = ({ image, text }) => {
    return (
        <div className="w-full bg-center bg-cover h-[500px]"
            style={{ backgroundImage: `url(${image})`, }}
        >
            <div className="flex items-center justify-center w-full h-full bg-gray-700/70">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                        {text}
                    </h1>
                    <br />
                    <Link className=" mt-5 text-sm btn font-semibold px-4 py-3 text-white bg-slate-400 rounded-xl focus:outline-none">Assignment</Link>
                </div>
            </div>
        </div>
    );
};

export default Slide;