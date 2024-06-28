import { GrMapLocation } from "react-icons/gr";

const DetailsPage = ({card}) => {
    console.log(card)
    const {image,facilities, location,area,status,price,description,segment_name,estate_title}=card
    return (
        <div className=" lg:card-side bg-base-100 shadow-xl">
        <figure><img src={image} alt="Album" className="w-[70%] mx-auto"/></figure>
        
        <div className="card-body w-[70%] mx-auto">
        <h2 className="text-center text-3xl font-semibold italic text-green-700">{segment_name}</h2>
          <h2 className="card-title text-[#0BA32E]">{estate_title}</h2>
          <p className="text-[#022209]">{description}</p>

          <div className="flex items-center gap-12">
            <h2 className="text-2xl italic "> Price: <span className="text-[#014B04]">{price}</span><span className="text-[#54B057] font-semibold text-xl">$</span></h2>
            <p className="text-xl font-bold ">status:{status}</p>
          </div>
          <div className="flex items-center gap-12 mt-4">
            <p className="flex items-center gap-2"> <GrMapLocation size={25} /> <span className="text-xl font-light text-[#00EE0A]">{location}</span></p>
            <p className="font-bold text-xl line-clamp-5 first-letter:uppercase text-[#8EC605]">Area:{area}</p>
          </div>
          <div className="flex">
            <p className="text-xl italic text-green-300 font-extrabold">facilities:</p>
          
          {facilities?.map(face => <p key={face} className="text-xl italic text-green-300">{face}</p>)}
          </div>
        </div>
      </div>
    );
};

export default DetailsPage;