
import { useLoaderData } from "react-router-dom";
import Row from "../components/Row";
const PendingAssignment = () => {
    const loaderPdfData = useLoaderData()
    
    return (
        <div className='my-8'>
            <h1 className='text-2xl md:text-4xl text-blue-700 font-bold flex justify-center'>Pending Assignment: {loaderPdfData.length}</h1>
            <div className=' mt-10'>
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr className="text-xl text-center">
                                <th>Serial</th>
                                <th>Title</th>
                                <th>Email</th>
                                <th>Marks</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loaderPdfData.map((data, index) => {
                                    return <Row data={data} 
                                    serial={index+1}
                                    loaderPdfData={{loaderPdfData}} key={index}/>
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