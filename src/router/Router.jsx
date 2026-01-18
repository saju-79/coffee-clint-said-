import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home";
 
import AddCard from "../pages/AddCard";



 export const router = createBrowserRouter([
      {
        path:"/" , 
        Component:Root,
        children:[
            {path:'/',
             loader:()=>fetch("http://localhost:5000/users"),
            Component:Home
            },
            {
             path:'/addCard', 
             Component:AddCard
            },

        ]
      }
])