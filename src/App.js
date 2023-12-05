import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import Contacts from "./components/pages/Contacts";
import LoginReg from "./components/pages/auth/loginReg";
import ForgetPassword from "./components/pages/auth/ForgetPassword";
import ResetPassword from "./components/pages/auth/ResetPassword";
import DashBoard from "./components/pages/DashBoard";

function App() {
  //by writing index the children will share the path of his parent
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/login" element={<LoginReg />} />
            <Route path="/forgetPassword" element={<ForgetPassword />}></Route>
            <Route path="/resetPassword" element={<ResetPassword />}></Route>
          </Route>
          <Route path="/dashBoard" element={<DashBoard />}></Route>
          <Route path="*" element={<h1>404 page not found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
