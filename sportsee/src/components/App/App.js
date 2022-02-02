import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Dashboard from "../DashBoard/DashBoard";

//TODO Make different route depending on the idea type in
//TODO Then generate the data base on the Id passed in
//TODO Make also a 404 error page Route
//TODO UserParam (p11) --> to read the Id from the url to generate the data required

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
