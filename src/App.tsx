import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Tests from "./Pages/Tests";
import Schedule from "./Pages/Schedule";
import Modal from "./Components/Modal";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Modal
        title="Modal Test"
        contents="This is a prototype; entered data will not be saved."
      />
      <BrowserRouter>
        <Navbar />
        <div className="flex"></div>
        <Routes>
          <Route path="/Pool_Tester" element={<Tests />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
