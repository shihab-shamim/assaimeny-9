import { Link,useLocation,useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

const Login = () => {
  const location=useLocation()
  const navigate=useNavigate()
  const [show,setShow]=useState(true)

  const {googleLogin,logIn,gitLogin}=useContext(AuthContext)

  const handleLogIn=(e)=>{
    e.preventDefault()
    const email=e.target.email.value
    const password=e.target.password.value
    logIn(email,password)
    .then(result=>{
      alert ('login success')
      console.log(result.user)
      navigate('/')
    })
    .catch(error=>{
      console.log(error)
    })
  }
  const handleGoogle=(e)=>{
    e.preventDefault()
    googleLogin()
    .then(result=>{
     console.log(result.user)
     navigate(location?.state? location.state : '/')

      return alert('Log in Successfully')
    })
    .catch(error=>console.error(error))
  }
  const handleGithub=(e)=>{
    e.preventDefault()
    gitLogin()
    .then(result=>{
      console.log(result.user)
      
       navigate(location?.state? location.state : '/')
       return alert('Log in Successfully')
     })
     .catch(error=>console.error(error))

  }
    return (
        <div className="max-w-7xl mx-auto mt-8">
            <Navbar></Navbar>
            <div className="hero py-12  bg-green-200 mt-12">
  <div className="  ">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold text-center mb-8 italic">Please Log in</h1>
     
    </div>
    <div className="    bg-green-100">
      <form onSubmit={handleLogIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered"  />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative">
          <input type={show?'password':'text'} name="password" placeholder="password" className="input input-bordered"  />
          <span className="absolute  top-3 right-5"><button onClick={()=>setShow(!show)}>{show?<IoMdEye size={20} />:<FaEyeSlash size={20} />}</button></span>
          </div>
          <div>
            <p>New Here ? <span className="text-xl font-bold text-green-500"><Link to='/registration'>Registration</Link></span></p>
          </div>
          <div className="mt-4 flex gap-6">
          <button onClick={handleGoogle}><FcGoogle size={35} /></button>
          <button onClick={handleGithub}><FaSquareGithub  size={35} /></button>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;