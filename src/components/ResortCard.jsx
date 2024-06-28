import { Link } from "react-router-dom";


const ResortCard = ({resort}) => {
   const {description,estate_title,image,price,segment_name,id}=resort
    return (
        <div className=" p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
	
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<h1 className="text-xl text-[#00A36C]">Price:{price} $</h1>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold text-[#088F8F]">{estate_title}</h3>
			</a>
			<p className="leading-snug text-[#4F7942]">{description}</p>
            <p className="text-[#009E60] font-bold text-[28px]">{segment_name}</p>
		</div>
        <div className="flex justify-end">
        <button className="btn btn-success text-[#00FF7F]"><Link to={`/resort/${id}`}>View Details</Link></button>

        </div>
	</div>
</div>
    );
};

export default ResortCard;