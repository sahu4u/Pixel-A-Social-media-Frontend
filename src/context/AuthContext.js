 import {createContext } from "react";
 import AuthReducer from "../context/AuthReducer"
 import { useReducer } from "react";

 const INITIAL_STATE={
    user:null,
   // {"_id":
   // "64746999411ed8ac6a2653eb","username":"divya","email":"divya@gmail.com",
   //  "password":"$2b$10$HeZSqp00aoosLeTTryQiR.TCM2o9.57Gz1/v/PjreXo.fqMTNWP4W",
   //  "profilePicture":"girl-flower.jpg","coverPicture":"cov2.jpg",
   //  "followers":[
   //    ],
   //  "following":[
   //    ]
   //   ,"isAdmin":false,
   //  "saved":[],"createdAt":{"$date":{"$numberLong":"1685350809113"}},"updatedAt":{"$date":{"$numberLong":"1685350809113"}},"__v":{"$numberInt":"0"}},
    isFetching: false,
    error: false,

 }

 export const AuthContext = createContext(INITIAL_STATE);

 export const AuthContextProvider = ({children}) =>{
    const[state, dispatch]=useReducer(AuthReducer,INITIAL_STATE)

    return (
        <AuthContext.Provider 
        value={{user:state.user,
         isFetching:state.isFetching,
         error:state.error,
         dispatch,
         }}>
            {children}
        </AuthContext.Provider>
    )
 }