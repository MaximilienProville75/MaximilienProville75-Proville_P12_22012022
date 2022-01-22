import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Dashboard from "../DashBoard/DashBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
