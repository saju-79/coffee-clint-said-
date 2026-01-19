import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home";
 
import AddCard from "../pages/AddCard";
import Ditels from "../pages/Ditels";
import Updates from "../pages/updates";
import Error from "../error/Error";
import Loding from "../componet/Loding";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
 



 export const router = createBrowserRouter([
      {
        path:"/" , 
        Component:Root,
        errorElement:<Error></Error> ,
        children:[
            {path:'/',
             loader:()=>fetch("http://localhost:5000/users"),
            Component:Home ,
            HydrateFallback:<Loding></Loding> ,
            },
            {
             path:'/addCard', 
             Component:AddCard
            },
            {
                path:"/ditels/:id",
                loader: ({params}) =>fetch(`http://localhost:5000/users/${params.id}`) ,
                Component: Ditels,
            },
            {
                path:"/update/:id",
                loader: ({params}) =>fetch(`http://localhost:5000/users/${params.id}`) ,
                Component:Updates,
            },
            {  
                path:"/login" ,
                Component:SignIn,
            },
            {
                path:"/signUp" ,
                Component:<SignUp></SignUp>,
            },
            

        ]
      }
])