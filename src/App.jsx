import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import RoomDetails from "./pages/RoomDetails";

function App() {
  const isDashboard = useLocation().pathname.includes("/dashboard");
  return (
    <>
      {!isDashboard && <Navbar />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
