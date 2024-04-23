import About from "./components/about/About";
import FinesList from "./pages/finesList/FinesList";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./pages/register/Register";
import AddOffence from "./pages/addOffence/AddOffence";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="sidebar-container">
            <Sidebar />
          </div>
          <div className="main-content">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/fines",
          element: <FinesList />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/offence",
          element: <AddOffence />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div className="layout">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
