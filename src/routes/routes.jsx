import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home";
import ResortDetails from "../components/ResortDetails";
import Login from "../pages/Login";
import Registratiion from "../pages/Registratiion";
import PrivetRoute from "../private/PrivetRoutes";
import UpdateProfile from "../pages/UpdateProfile";
import Profile from "../pages/Profile";
import ErrorPage from "../Errorpage/ErrorPage";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/resorts.json"),
      },
      {
         path: "/resort/:id",
         element:<PrivetRoute><ResortDetails></ResortDetails></PrivetRoute>,
         loader: () => fetch("/resorts.json"),
         },
         {
          path:'/login',
          element:<Login></Login>
         },
         {
          path:'/registration',
          element:<Registratiion></Registratiion>
         },
         {
          path:'/update',
          element:<PrivetRoute><UpdateProfile></UpdateProfile></PrivetRoute>
         },
         {
          path:'/profile',
          element:<PrivetRoute><Profile></Profile></PrivetRoute>
         },
         {
          path:'/contact',
          element:<PrivetRoute><Contact></Contact></PrivetRoute>
         }
    ],
  },
]);

export default router;
