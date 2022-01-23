import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Dashboard from "../DashBoard/DashBoard";

//TODO Make different route depending on the idea type in
//TODO Then generate the data base on the Id passed in
//TODO Make also a 404 error page Route

import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../../data";
console.log(USER_MAIN_DATA[0]);
console.log(USER_ACTIVITY[0]);
console.log(USER_AVERAGE_SESSIONS[0]);
console.log(USER_PERFORMANCE[0]);
// const {..} = USER_MAIN_DATA;
// console.log(id);

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
