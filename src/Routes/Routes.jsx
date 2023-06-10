import {
  createBrowserRouter
} from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../pages/Home/Home';
import Instructors from '../pages/Home/Instructors';
import Classes from '../pages/Home/Classes';
import SignUp from '../pages/Others/SignUp';
import Login from '../pages/Others/Login';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../Layout/Dashboard';
import MyCourse from '../pages/Dashboard/MyCourse';
import AllUsers from '../pages/Dashboard/AllUsers';
import UHome from '../Layout/UHome';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/instructor',
        element: <Instructors></Instructors>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'uHome',
        element: <UHome></UHome>
      },
      {
        path: 'myCourse',
        element: <MyCourse></MyCourse>
      },
      {
        path: 'mngUser',
        element: <AllUsers></AllUsers>
      }
    ]
  }
]);