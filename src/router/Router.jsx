import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home";
import AddCard from "../pages/AddCard";
import Ditels from "../pages/Ditels";
import Updates from "../pages/updates";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Users from "../pages/Users";
 export const router = createBrowserRouter([
      {
        path:"/" , 
        Component:Root,
        
        children:[
            {path:'/',
             loader:()=>fetch("http://localhost:5000/users"),
            Component:Home ,
          
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
                path:"/signup" ,
                Component:SignUp,
            },
            {
                path:'/users',
                loader:()=>fetch("http://localhost:5000/datas"),
                Component:Users,
            }
            

        ]
      }
])