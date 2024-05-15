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
import MySubmitted from "../Pages/MySubmitted";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
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
        element: <PrivateRoute>
          <CreateAssignment></CreateAssignment>
        </PrivateRoute>
      },
      {
        path: '/assignment',
        element: <Assignments></Assignments>,
        loader: () => fetch('https://assignment-ss-server.vercel.app/skillUp')
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`https://assignment-ss-server.vercel.app/skillUp/${params.id}`)
      },
      {
        path: '/viewDetails/:id',
        element: <PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-ss-server.vercel.app/skillUp/${params.id}`)
      },
      {
        path: '/pendingAssignment',
        element: <PrivateRoute>
          <PendingAssignment></PendingAssignment>
        </PrivateRoute>,
        loader: () => fetch('https://assignment-ss-server.vercel.app/pdf')
      },
      {
        path:'/mySubmitted',
        element: <PrivateRoute>
          <MySubmitted></MySubmitted>,
        </PrivateRoute>,
        loader:() => fetch('https://assignment-ss-server.vercel.app/my-assignment')
      }
    ]
  },
]);

export default router