import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import FourOhFour from "./pages/404";
import { Navigate } from "react-router-dom";

const routes = [
  {
    element: <Dashboard />,
    path: "/dashboard/"
  },
  {
    element: <Login />,
    path: "/login/"
  },
  {
    element: <FourOhFour />,
    path: "/404"
  },
  {
    path: "*",
    element: <Navigate to="/404" replace/>
  }
]

export default routes;