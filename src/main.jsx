import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./layout.jsx";
import Home from "./components/home/home.jsx";
import About from "./components/about/about.jsx";
import Contact from "./components/contact/contact.jsx";
import User from "./components/user/user.jsx";
import Leetcode, { leetcodeInfoLoader, leetcodeInfoLoaderForNull } from "./components/leetcode/leetcode.jsx";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/user/:userid" component={User} />
          <Route path="/leetcode/:userid" element={<Leetcode />} />
          <Route path="/leetcode" element={<Leetcode />} />
        </Switch>
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
