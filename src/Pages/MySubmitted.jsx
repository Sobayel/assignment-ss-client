

const MySubmitted = () => {
    return (
        <div className='my-8'>
            <h1 className='text-4xl text-purple-400 font-bold flex justify-center'>My Submitted Assignment:</h1>
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
                            <tr className="text-sm text-center">
                                <td>Sobayel</td>
                                <td>100</td>
                                <td>50</td>
                                <td>good</td>
                                <td>Pending</td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default MySubmitted;