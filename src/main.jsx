import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  HashRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layout.jsx";
import Home from "./components/home/home.jsx";
import About from "./components/about/about.jsx";
import Contact from "./components/contact/contact.jsx";
import User from "./components/user/user.jsx";
import Leetcode, { leetcodeInfoLoader, leetcodeInfoLoaderForNull } from "./components/leetcode/leetcode.jsx";

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route
        loader={leetcodeInfoLoader}
        path="leetcode/:userid"
        element={<Leetcode />}
      />
      <Route
        loader={leetcodeInfoLoaderForNull}
        path="leetcode"
        element={<Leetcode />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <RouterProvider router={router} />
  </HashRouter>
);
