import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<HomePage />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
