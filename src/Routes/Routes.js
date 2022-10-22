import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Category from "../Pages/Category/Category/Category";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News/News";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Routes/PrivateRoute";

 const router= createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
       children:[
         {
            path: '/',
            element:<Home/>,
            loader: ()=>fetch('https://dango-app-auth.vercel.app/news')
         },
         {
            path:'/category/:id',
            element:<Category></Category>,
            loader: ({params})=>fetch(`https://dango-app-auth.vercel.app/category/${params.id}`)
         },
         {
            path:"/news/:id",
            element:<PrivateRoute><News></News></PrivateRoute>,
            loader:({params})=> fetch(`https://dango-app-auth.vercel.app/news/${params.id}`)
         },
         {
            path:'/login',
            element:<Login/>
         },
         {
            path:'/register',
            element:<Register/>
         }
       ]
    }
])
export default router