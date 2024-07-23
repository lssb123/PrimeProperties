import { useState } from "react";
import "./App.css";
import Home from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
import Footer from "./Components/Footer";
import NewNav from "./Components/NewNav";
import AdminPage from "./Components/AdminPage";

function App() {
  return (
    <>
      <div className="root">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/newnav" element={<NewNav />} />
            <Route path="/admin" element={<AdminPage />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
