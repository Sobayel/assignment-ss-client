import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CreateAssignment from "../Pages/CreateAssignment";
import Assignments from "../Pages/Assignments";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/createAssignment',
            element: <CreateAssignment></CreateAssignment>
        },
        {
            path: '/assignment',
            element: <Assignments></Assignments>
        },
      ]
    },
  ]);

  export default router