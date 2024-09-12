import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import PrivateRoute from './PrivateRoute'
import Tasks from '../pages/Home/Admin/Tasks'
import User from '../pages/Home/Admin/users/User'
import Feedback from '../pages/Home/Admin/feedbacks/Feedback'



export const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoute><Main /></PrivateRoute>,
    children: [
      {
        index: true,
        element: <PrivateRoute><Home /></PrivateRoute>
      },
      {
        path: '/tasks',
        element: <Tasks />
      },
      {
        path: '/users',
        element: <User />
      },
      {
        path: '/feedbacks',
        element: <Feedback />
      }
     
    ],
    errorElement: <ErrorPage />
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
])
