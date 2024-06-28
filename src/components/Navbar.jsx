import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip as ReactTooltip, Tooltip } from 'react-tooltip'

const Navbar = () => {

  const {user,logOut,setUser}=useContext(AuthContext)
  const handleLogOut=(e)=>{
    e.preventDefault()
    logOut()
    .then(()=>{
    
      setUser(null)
      return alert('Log Out Successfully') ; 
    })
    .catch();
  }
    const navlink=<>
    <NavLink to='/' className={({isActive})=>isActive?'text-[#355E3BCC]  font-bold mr-8 text-xl':'font-bold mr-8 text-xl '}>Home</NavLink>
    <NavLink to='/registration' className={({isActive})=>isActive?'text-[#355E3BCC]  font-bold mr-8 text-xl':'font-bold mr-8 text-xl '}>Register</NavLink>
   { user && <><NavLink className={({isActive})=>isActive?'text-[#355E3BCC]  font-bold mr-8 text-xl':'font-bold mr-8 text-xl '} to='/update'>Update Profile</NavLink>
    <NavLink className={({isActive})=>isActive?'text-[#355E3BCC]  font-bold mr-8 text-xl':'font-bold mr-8 text-xl  '}   to='/profile'>User Profile</NavLink>
    <NavLink className={({isActive})=>isActive?'text-[#355E3BCC]  font-bold mr-8 text-xl':'font-bold mr-8 text-xl  '}   to='/contact'>Contact</NavLink></>}
    

    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box flex flex-row space-x-8">
        {
            navlink
        }
      </ul>
    </div>
    <a className="hover:text-[#2AAA8A] cursor-wait shadow-sm px-6 py-2 rounded-lg shadow-[#355E3B]  btn-ghost text-2xl">resor<span className="text-[#355E3B]">T</span>s</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {
        navlink
     }
    </ul>
  </div>
  <div className="navbar-end">
  {
    user?<> <div className="avatar " data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}>
    <div  className="w-24 rounded-full mr-6 " >
      <img src={user.photoURL} />
      <Tooltip id="my-tooltip" />
    </div>
  </div><button onClick={handleLogOut} className="btn font-bold text-[#355E3BCC] text-xl">Log Out</button></>:<NavLink to='/login' className={({isActive})=>isActive?'text-[#355E3BCC]  font-bold  text-xl':'font-bold mr-8 text-xl '}> <button className="btn font-bold text-[#355E3BCC] text-xl">Log in</button> </NavLink>
  }
  </div>
</div>
    );
};

export default Navbar;