import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Error from "../Pages/Error/Error";
import DashboardLayout from "../Layout/DashboardLayout";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import MyClasses from "../Pages/Dashboard/Instructor/MyClasses";
import AddAClass from "../Pages/Dashboard/Instructor/AddAClass";
import EnrolledClasses from "../Pages/Dashboard/Student/EnrolledClasses";
import SelectedClasses from "../Pages/Dashboard/Student/SelectedClasses";
import Payment from "../Pages/Dashboard/Student/Payment";
import PaymentHistory from "../Pages/Dashboard/Student/PaymentHistory";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "manage-classes",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "manage-users",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "Add-class",
        element: <AddAClass></AddAClass>,
      },
      {
        path: "my-classes",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "enrolled-classes",
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: "selected-classes",
        element: <SelectedClasses></SelectedClasses>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "Payment-history",
        element: <PaymentHistory></PaymentHistory>,
      },
    ],
  },
]);
