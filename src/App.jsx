import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signout from "./pages/Signout";
import About from "./pages/About";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sign-in" element={<Signin />}/>
        <Route path="/sign-up" element={<Signout />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/profile" element={<Profile />}/>


      </Routes>
    </Router>
  );
};

export default App;
