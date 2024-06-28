import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import DetailsPage from "./DetailsPage";


const ResortDetails = () => {
    const [card,setCard]=useState([])
    const resortCard=useLoaderData()
    const {id}=useParams()
    // console.log(id)
    // console.log(card)
    useEffect(()=>{
        const foundCard=resortCard.find(card=>card.id == id)
        if(foundCard){
            setCard(foundCard)
        }
    },[id,resortCard])
    
    
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>

         <div className="mt-20">
         <DetailsPage card={card}></DetailsPage>
         </div>
            
        </div>
    );
};

export default ResortDetails;