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
import Payment from '../pages/Dashboard/Payment';
import AllUsers from '../pages/Dashboard/AllUsers';
import UHome from '../Layout/UHome';
import AddCls from '../pages/Dashboard/Instructor/AddCls';
import MyCls from '../pages/Dashboard/Instructor/MyCls';
import MngCls from '../pages/Dashboard/MngCls';
import AdminRoute from '../Routes/AdminRoute'; 
import UpdateClass from '../pages/Dashboard/Instructor/UpdateClass';


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
        path: 'mngUser',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'mngCls',
        element: <AdminRoute><MngCls></MngCls></AdminRoute>
      },
      {
        path: 'addCls',
        element: <AddCls></AddCls>
      },
      {
        path: 'myCls',
        element: <MyCls></MyCls>
      },
      {
        path: 'updateClass',
        element: <UpdateClass></UpdateClass>
      },
      {
        path: 'myCourse',
        element: <MyCourse></MyCourse>
      },
      {
        path: 'payment/:id',
        element: <Payment></Payment>
      }
    ]
  }
]);