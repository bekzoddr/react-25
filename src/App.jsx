import Home from "./pages/home/Home";
import Single from "./pages/singleRoute/Single";
import Wishlist from "./pages/wishlist/Wishlist";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
