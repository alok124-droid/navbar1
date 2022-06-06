import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

let [isAuthorized,setAuthorised]=React.useState(false)
let login=(username,password)=>{
  if(username&&password){
    setAuthorised(true)
  }
}

let logout=()=>{
  setAuthorised(false)
}
  return <AuthContext.Provider value={{isAuthorized,login,logout}}>{children}</AuthContext.Provider>;
};
