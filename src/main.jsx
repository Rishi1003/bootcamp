import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import BlogDisplay from "./pages/BlogDisplay";
import SingleBlog from "./pages/SingleBlog";
import Login from "./pages/Login"
import Navbar from "./components/Navbar";
import { BlogPost } from "./pages/BlogPost";
import About from "./pages/About"


const router = createBrowserRouter([
  {
    path: "/",
    element: <BlogDisplay/>,
  },
  {
    path: "/blog/:id",
    element: <SingleBlog/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/create-blog",
    element: <BlogPost/>,
  },
  {
    path: "/login",
    element: <Login/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
     <RouterProvider router={router}></RouterProvider>
  
);