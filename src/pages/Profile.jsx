import { useContext } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Profile = () => {
    const {user}=useContext(AuthContext)
    console.log(user
    )
    return (
        <div className="max-w-7xl mx-auto mt-8">
          <Helmet>
            <title>Customize Your Resort Experience</title>
          </Helmet>
            <Navbar></Navbar>

            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src= {user.photoURL}alt="URL Not work"/></figure>
  <div className="card-body">
    <h2 className="card-title">{user.displayName}</h2>
    <p>Email Address : {user.
email}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-success"><Link to='/update'>Update-profile</Link></button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Profile;