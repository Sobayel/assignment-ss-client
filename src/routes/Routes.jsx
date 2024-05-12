import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CreateAssignment from "../Pages/CreateAssignment";
import Assignments from "../Pages/Assignments";
import Error from "../Pages/Error";
import Update from "../Pages/Update";
import ViewDetails from "../Pages/ViewDetails";
import PendingAssignment from "../Pages/PendingAssignment";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
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
            element: <Assignments></Assignments>,
            loader: () => fetch('http://localhost:5000/skillUp')
        },
        {
          path: '/update/:id',
          element: <Update></Update>,
          loader:({params})=> fetch(`http://localhost:5000/skillUp/${params.id}`)
      },
      {
        path: '/viewDetails/:id',
        element: <ViewDetails></ViewDetails>,
        loader:({params})=> fetch(`http://localhost:5000/skillUp/${params.id}`)
    },
    {
      path:'/pendingAssignment',
      element: <PendingAssignment></PendingAssignment>
    }
      ]
    },
  ]);

  export default router