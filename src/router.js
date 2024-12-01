import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import List from "./components/crud/List";
import ViewMed from "./components/crud/ViewMed";
import CreateMed from "./components/crud/CreateMed";
import EditMed from "./components/crud/EditMed";
import DeleteMed from "./components/crud/DeleteMed";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";



const router = createBrowserRouter([

    {path:'',element:<App/>},
    {path:'med/list',element:<List/>},
    {path:'med/create',element:<CreateMed/>},
    {path:'med/list/view/:Id',element:<ViewMed/>},
    {path:'med/list/edit/:Id',element:<EditMed/>},
    {path:'med/list/delete/:Id/:name',element:<DeleteMed/>},
    {path:'signup',element:<Signup/>},
    {path:'login',element:<Login/>},






    

]);

export default router;