import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/setting/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";



function App() {
  const {user}=useContext(Context);

  return (
    <>
  <BrowserRouter>
  <Topbar/>
  <Routes>
  <Route exact path="/"
   element={<Home />} />
    <Route path="/register"
   element={user ? <Home/> : <Register />} />
    <Route path="/login"
   element={user ? <Home/> :<Login />} />
    <Route path="/write"
   element={user ? <Write /> : <Home/> } />
    <Route path="/settings"
   element={ user ? <Settings />: <Register />} />
    <Route path="/post/:postId"
   element={<Single />} />
   
  </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
