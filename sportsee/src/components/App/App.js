import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../DashBoard/DashBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path=":id" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
