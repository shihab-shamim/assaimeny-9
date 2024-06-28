import { useContext } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {
    const {user,savedProfile,setUser} =useContext(AuthContext)
    const  handleUpdate =(e)=>{
        e.preventDefault()
         const name=e.target.name.value
         const photo=e.target.photo.value
         console.log(name,photo)
         savedProfile(name,photo)
         .then(()=>{
            console.log('profile updated')
            window.location.reload()
            
           return  alert('Updated Profile')
         })
         .catch(error=>console.log(error))
         

    }

    return (
        <div className="max-w-7xl mx-auto mt-8">
            <Helmet>
                <title>Update Your Profile</title>
            </Helmet>
            <Navbar></Navbar>
            <form onSubmit={handleUpdate} className="w-[70%] mx-auto">
            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full max-w-xs" />
            <br /> <br />
            <input type="text" name="photo" placeholder="photoURL" className="input input-bordered w-full max-w-xs" required />
            <br /><br />
            <button className="btn btn-success flex justify-end " required>save profile</button>
            </form>

            
        </div>
    );
};

export default UpdateProfile;