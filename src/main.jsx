import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout.jsx";
import Home from "./components/home/home.jsx";
import About from "./components/about/about.jsx";
import Contact from "./components/contact/contact.jsx";
import User from "./components/user/user.jsx";
import Leetcode, { leetcodeInfoLoader, leetcodeInfoLoaderForNull } from "./components/leetcode/leetcode.jsx";

const routes = (
  <Routes>
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
  </Routes>
);

ReactDOM.render(
  <React.StrictMode>
    <Router>{routes}</Router>
  </React.StrictMode>,
  document.getElementById("root")
);
