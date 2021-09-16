import "./App.css";
import { useEffect, useState, useRef } from "react";
import { Grid } from "@material-ui/core";
import { Router } from "react-router";
import { Switch, Route } from "react-router-dom";
import { history } from "./components/common/history";
import { Fuentes } from "./components/common/fonts";
import Landing from "./components/open/landing";
import Contact from "./components/apply/contact";
import Social from "./components/apply/social";
import Login from "./components/auth/login";
import Codes from "./components/apply/codes";
import Congrats from "./components/apply/congrats";
import Forget from "./components/auth/forget";
import SendPass from "./components/auth/sendpass";
import FirstLogin from "./components/auth/firstlogin";
import Account from "./components/crm/account";
import Crm from "./components/crm";
import Awards from "./components/crm/awards";
import Stickers from "./components/crm/stickers";
import Payments from "./components/crm/payments";

function App() {
  const mountedRef = useRef(true);
  const [usuario, setUsuario] = useState([]);
  // eslint-disable-next-line
  const [_data, setData] = useState([]);
  // eslint-disable-next-line
  const [_rrss, setRedes] = useState([]);
  // eslint-disable-next-line
  const [_codes, setCodes] = useState([]);

  useEffect(() => {
    const usuario = { nombre: "", perfil: "" };
    setUsuario(usuario);
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const handleNavigation = async (ruta) => {
    switch (ruta) {
      case "home":
        history.push("/");
        break;
      case "signup":
        history.push("/signup");
        break;
      case "rrss":
        history.push("/signup/rrss");
        break;
      case "codes":
        history.push("/signup/codes");
        break;
      case "congrats":
        history.push("/signup/congrats");
        break;
      case "login":
        history.push("/auth/login");
        break;
      case "forget":
        history.push("/auth/forget");
        break;
      case "sendpass":
        history.push("/auth/sendpass");
        break;
      case "firstlogin":
        history.push("/auth/login/first");
        break;
      case "account":
        history.push("/crm/account");
        break;
      case "terms":
        history.push("/terms");
        break;
      case "crm":
        history.push("/crm");
        break;
      case "stickers":
        history.push("/crm/stickers");
        break;
      case "payments":
        history.push("/crm/payments");
        break;
      case "awards":
        history.push("/crm/awards");
        break;
      default:
        history.push("/");
        break;
    }
  };

  const handleGetDataContacto = async (data) => {
    console.log(data);
    setData(data);
    handleNavigation("rrss");
  };

  const handleGetDataRrss = async (data) => {
    console.log(data);
    setRedes(data);
    handleNavigation("codes");
  };

  const handleGetDataCodes = async (data) => {
    console.log(data);
    setCodes(data);
    handleNavigation("congrats");
  };

  const handleForgetPass = async (data) => {
    console.log(data);
    handleNavigation("sendpass");
  };

  const handleAccount = async (data) => {
    console.log(data);
    handleNavigation("account");
  };

  const handleLogin = async (data) => {
    console.log(data);
    handleNavigation("crm");
  };

  return (
    <Router history={history}>
      <Grid
        container
        style={{ fontFamily: Fuentes.principal, overflowX: "hidden" }}
      >
        <Switch>
          <Route exact path="/">
            <Landing navigation={handleNavigation}></Landing>
          </Route>
          <Route exact path="/signup">
            <Contact
              navigation={handleNavigation}
              callback={handleGetDataContacto}
            ></Contact>
          </Route>
          <Route exact path="/signup/rrss">
            <Social
              navigation={handleNavigation}
              callback={handleGetDataRrss}
            ></Social>
          </Route>
          <Route exact path="/signup/codes">
            <Codes
              navigation={handleNavigation}
              callback={handleGetDataCodes}
            ></Codes>
          </Route>
          <Route exact path="/signup/congrats">
            <Congrats navigation={handleNavigation}></Congrats>
          </Route>
          <Route exact path="/auth/login">
            <Login navigation={handleNavigation} callback={handleLogin}></Login>
          </Route>
          <Route exact path="/auth/forget">
            <Forget
              navigation={handleNavigation}
              callback={handleForgetPass}
            ></Forget>
          </Route>
          <Route exact path="/auth/sendpass">
            <SendPass navigation={handleNavigation}></SendPass>
          </Route>
          <Route exact path="/auth/login/first">
            <FirstLogin
              navigation={handleNavigation}
              callback={handleAccount}
            ></FirstLogin>
          </Route>
          <Route exact path="/crm/account">
            <Account
              navigation={handleNavigation}
              callback={handleAccount}
            ></Account>
          </Route>

          <Route exact path="/crm/stickers">
            <Stickers
              navigation={handleNavigation}
            ></Stickers>
          </Route>

          <Route exact path="/crm/payments">
            <Payments
              navigation={handleNavigation}
            ></Payments>
          </Route>

          <Route exact path="/crm/awards">
            <Awards
              navigation={handleNavigation}
            ></Awards>
          </Route>
          <Route exact path="/crm">
            <Crm navigation={handleNavigation} usuario={usuario}></Crm>
          </Route>
        </Switch>
      </Grid>
    </Router>
  );
}

export default App;
