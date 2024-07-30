import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPage from "./Components/AdminPage";
import Footer from "./Components/Footer";
import Invalid from "./Components/invalid";
import Home from "./Components/NavBar";
import NewNav from "./Components/NewNav";
import Login from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
import Wishlist from "./Wishlist ";

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
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/invalid" element={<Invalid />} /> 
            <Route path="/wishlist"  element={<Wishlist/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
