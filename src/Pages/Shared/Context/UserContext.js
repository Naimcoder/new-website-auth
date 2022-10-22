import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../../../Firebase/Firebase.config';

export const auth = getAuth(app);
export const AuthContext = createContext()

const UserContext = ({children}) => {
    
    const [user,setUser]=useState(null)
    const googleProvider = new GoogleAuthProvider();

    const createUser=()=>{
      return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,currectUser=>{
         setUser(currectUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    const logOut=()=>{
        return signOut(auth)
    }
    const signIn=(email,password)=>{
      return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn=(email,password)=>{
     return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo={user,createUser,logOut,signIn,logIn}
    return (
       <AuthContext.Provider value={authInfo}>
         {children}
       </AuthContext.Provider>
    );
};

export default UserContext;