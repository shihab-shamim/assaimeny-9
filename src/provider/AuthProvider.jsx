import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithPopup,onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import app from "../firebase/firebase.config";

import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();
export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    
    const createUser=(email,password)=>{
        setLoading(true)
       return  createUserWithEmailAndPassword(auth,email,password)
    }
     
    const googleLogin=()=>{
        setLoading(true)
         return signInWithPopup(auth,provider)
    }
    const logIn=(email,password)=>{
        setLoading(true)
         return signInWithEmailAndPassword(auth,email,password)
    }
    const gitLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,gitProvider)
    }

    useEffect(()=>{
        const unSusCribs=onAuthStateChanged(auth,currentUser=>{
            if(currentUser){
                setUser(currentUser)
                
            }
            setLoading(false) 
        })
        return ()=>{
            unSusCribs()
        }

    },[])
    const savedProfile=(name,photo)=>{
        
        return updateProfile(user,{
            displayName:name,photoURL:photo
        })
    }
    const logOut=()=>{

        setLoading(true)
         return signOut(auth)
    }

    const authInfo={
        googleLogin,
        user,
        logOut,
        loading,
        createUser,
        setUser,
        logIn,
        savedProfile,
        gitLogin

    }
    
    return (
        <AuthContext.Provider value={authInfo}>
        {children}

       </AuthContext.Provider>
    );
};

export default AuthProvider;