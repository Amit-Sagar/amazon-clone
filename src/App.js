import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/return&order" element={<Orders />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
