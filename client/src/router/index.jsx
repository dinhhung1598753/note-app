import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";

const AuthLayout = () => {
  return <Outlet />;
};
export default createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/", element: <Home /> },
    ],
  },
]);
