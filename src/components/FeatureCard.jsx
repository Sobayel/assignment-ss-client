

const FeatureCard = ({feature}) => {
    console.log(feature)
    const {name, mark,date, description, image} = feature ||{} ;
    return (
        <div>
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{name}</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>

    <img src={image} alt="" />

    <div className="flex items-center justify-between px-4 py-2 bg-gray-300">
        <h1 className="text-lg font-bold text-black">Mark: {mark}</h1>
        <p className="text-lg font-semibold text-black">Date: {new Date(date).toLocaleDateString()}</p>
    </div>
</div>
        </div>
    );
};

export default FeatureCard;