import React, { useEffect, useState } from 'react';
 
import { AuthContext } from './Contrax';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../Firebage/firebage';
const ContraxProvaider = ({children}) => {
    const[user , setUser]= useState(null);
   
    const provider = new GoogleAuthProvider();
    // signup section
    const handelUserSignup =(email ,password)=>{
       return createUserWithEmailAndPassword(auth ,email , password)
    }
    // login section 
    const handelLogin = (email , password)=>{
            return signInWithEmailAndPassword(auth ,email , password)
    }
    // google sogin
    const handekgoogleLogin =()=>{
        return  signInWithPopup(auth  , provider )
    }
    // logout
    const logout = ()=>{
        return signOut(auth)
    }
    // maintain user
    useEffect(()=>{
            const onscript = onAuthStateChanged(auth , (currentUser) =>{
                 setUser(currentUser)
            })
            return ()=>{
                onscript()
            }
    },[])
    const userInfo ={
         user,
         setUser,
         handelUserSignup,
         handelLogin,
         handekgoogleLogin,
          logout,
    }
    
    return (
         <AuthContext.Provider value={userInfo}>
            {children}
         </AuthContext.Provider>
    );
};

export default ContraxProvaider;