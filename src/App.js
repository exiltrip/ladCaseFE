import './App.css';
import Header from "./components/header/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";
import Main from "./components/main/main";
import Login from "./components/auth/login";
import Signin from "./components/auth/signin";
import LkMain from "./components/lk/lk-main";
import Event from "./components/event/event";

function App() {

    const [isLoggedIn, setisLoggedIn] = useState(null);

    const logIn = () => {
        setisLoggedIn("true");
        localStorage.setItem('isLoggedIn', "true");
    };
    const logOut = () => {
        setisLoggedIn(null);
        localStorage.clear();
        document.location.reload();
    };
    const Reload = () => {
        document.location.reload();
    };

  return (
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} logOut={logOut}/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/lk" element={<LkMain/>} />
          <Route path="/EVENT" element={<Event/>} />
          <Route path="/login"  element={<Login Reload={Reload} isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} logIn={logIn} />}/>
          <Route path="/register" element={<Signin isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} logIn={logIn} />}/>

        </Routes>
      </BrowserRouter>

  );
}

export default App;
