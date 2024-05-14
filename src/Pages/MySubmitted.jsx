import { useLoaderData } from "react-router-dom";


const MySubmitted = () => {
    const feedbackMark = useLoaderData()
    return (
        <div className='my-8'>
            <h1 className='text-2xl md:text-4xl text-blue-700 font-bold flex justify-center'>My Submitted Assignment: {feedbackMark.length}</h1>
            <div className=' mt-10'>
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr className="text-xl text-center">
                                <th>Title</th>
                                <th>Main Marks</th>
                                <th>Obtained marks</th>
                                <th>Feedback</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                feedbackMark.map((data, index) => {
                                    return <tr key={index}
                                        className="text-xl text-center">
                                        <td className='text-center text-sm font-semibold'>{data?.name}</td>
                                        <td className='text-center text-sm font-semibold'>{data?.totalMark}</td>
                                        <td className='text-center text-sm font-semibold'>{data?.obtainedMarks}</td>
                                        <td className='text-center text-sm font-semibold'>{data?.feedback}</td>
                                        <td className='text-center text-sm font-semibold'>{data?.status}</td>
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

export default MySubmitted;