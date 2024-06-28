import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

import { updateProfile } from "firebase/auth/cordova";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";


const Registratiion = () => {
  const navigate=useNavigate()
  const [show,setShow]=useState(true)
  const {createUser ,user,setUser}=useContext(AuthContext)
  // console.log(user.displayName)
  const handleSubmite=(e)=>{
    e.preventDefault()
    const name=e.target.name.value
    const photo=e.target.photo.value
    const email=e.target.email.value
    const password=e.target.password.value
    console.log(name,photo,email,password)
    if(!/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)){
      return alert('password have one uppercase and lower case and 8 character must  ')
    }
    
    createUser(email,password)
    .then(result=>{
      console.log(result.user)
      navigate('/')
      // update 
      updateProfile(result.user,{
        displayName:name,photoURL:photo
        
      })
      .then(()=>console.log('profile updated'))
      alert('Create user success')
    })
    .catch(error=>{
      console.error(error)
    })


  }
    return (
        <div  className="max-w-7xl mx-auto mt-8">
          <Helmet>
            <title>Here`s a suggestion</title>
          </Helmet>
           <Navbar></Navbar>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold">Registration Now </h1>
     
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmite} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"  name='name' placeholder="Name..." className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" name="photo" placeholder="URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative">
          <input type={show?'password':'text'} name="password" placeholder="Password" className="input input-bordered" required />
          <span className="absolute  top-3 right-5"><a onClick={()=>setShow(!show)}>{show?<IoMdEye size={20} />:<FaEyeSlash size={20} />}</a></span>
          </div>
          
        </div>
        <div>
            <h1>Already Have a Account? <span className="text-xl font-bold text-green-500"><Link to='/login'>Login</Link></span></h1>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-success">sign up</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Registratiion;