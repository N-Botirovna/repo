import { useState } from "react";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const [login, setLogin] = useState(false);
  console.log("login", login);

  // useEffect(() => {
  //   const isLogin = localStorage.getItem('isLogin');
  //   if (isLogin == true) {
  //     setLogin(true)
  //   } else {setLogin(false)};
  // }, [])

  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    if (isLogin === "true") {
        setLogin(true);
    } else {
        setLogin(false);
    }
}, []);

  return <>
    <Router>
      <Routes>
        <Route path="/" element={login ? <Home /> : <Registration login={setLogin} />} />
      </Routes>
    </Router>
  </>;
}

export default App;
