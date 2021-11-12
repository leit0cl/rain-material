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
import Backloader from "./components/common/backloader";
import { WS_CREA_POSTULANTE } from './services/postulantes/mutations';
import { WS_CREA_EQUIPO } from './services/equipos/mutations';
import Admin from "./components/admin";
import Postulaciones from "./components/admin/postulaciones";
import Influencers from "./components/admin/influencers";
import { ValidaUsuarioNick, ValidaUsuarioMail } from './services/usuarios';

function App() {
  const mountedRef = useRef(true);
  const [usuario, setUsuario] = useState([]);
  // eslint-disable-next-line
  const [_data, setData] = useState({ tipo: '', nick: '', email: '', mas: '', name: '', doc: '', tipodoc: '', equipo: '', existe: false });
  // eslint-disable-next-line
  const [_rrss, setRedes] = useState([]);
  // eslint-disable-next-line
  const [_codes, setCodes] = useState([]);

  const [_etapa, setEtapa] = useState('');
  const [_showbackdrop, setBackdrop] = useState(false);

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
        setData([]);
        setRedes([]);
        setCodes([]);
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
      case "admin":
        history.push("/admin");
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
      case "postulaciones":
        history.push("/admin/postulaciones");
        break;
      case "influencers":
        history.push("/admin/rainfluencers");
        break;
      case "salir":

        const usuario = { nombre: "", perfil: "" };
        setUsuario(usuario);
        history.push("/");
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
    setBackdrop(true);
    setCodes(data);
    setEtapa('Enviando Postulación')

    if (_data.tipo === 'MULTI') {

      if (_data.existe === false) {

        let objEquipo = { nombre: _data.nick, estado: 'INGRESADO', nombre_repre: _data.name, correo_repre: _data.email }
        let rese = WS_CREA_EQUIPO(objEquipo);
        rese.then(oki => {

          setEtapa('Creando Equipo');

          let objPostulante = {
            tipo: _data.tipo, nickname: _data.nick, representante: _data.name,
            tipodoc: _data.tipodoc, rut: _data.doc, email: _data.email, about: _data.mas, equipo: oki.data.id,
            rrss: JSON.stringify(_rrss), codes: JSON.stringify(data)
          }

          setEtapa('Creando Postulación');

          let res = WS_CREA_POSTULANTE(objPostulante)
          res.then(ok => {
            console.log(ok);
            setBackdrop(false);
            handleNavigation("congrats");
          }).catch(err => {
            console.log(err);
            setEtapa(err)
          })

        }).catch(err => {
          console.log(err);
          setEtapa(err)
        });


      } else {

        setEtapa('Creando Postulación');

        let objPostulante = {
          tipo: _data.tipo, nickname: _data.nick, representante: _data.name,
          tipodoc: _data.tipodoc, rut: _data.doc, email: _data.email, about: _data.mas, equipo: _data.equipo,
          rrss: JSON.stringify(_rrss), codes: JSON.stringify(data)
        }

        let res = WS_CREA_POSTULANTE(objPostulante)
        res.then(ok => {
          console.log(ok);
          setBackdrop(false);
          handleNavigation("congrats");
        }).catch(err => {
          console.log(err);
          setEtapa(err)
        })

      }
    } else {

      setEtapa('Creando Postulación');

      let objPostulante = {
        tipo: _data.tipo, nickname: _data.nick, representante: _data.name,
        tipodoc: _data.tipodoc, rut: _data.doc, email: _data.email, about: _data.mas, equipo: _data.equipo,
        rrss: JSON.stringify(_rrss), codes: JSON.stringify(data)
      }

      let res = WS_CREA_POSTULANTE(objPostulante)
      res.then(ok => {
        console.log(ok);
        setBackdrop(false);
        handleNavigation("congrats");
      }).catch(err => {
        console.log(err);
        setEtapa(err)
      })
    }
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

    setEtapa('Autenticando Usuario');
    setBackdrop(true);
    const cadena = data.login.toString();
    const quees = cadena.indexOf('@');

    if (quees > -1) {
      let res = ValidaUsuarioMail(data.login);
      res.then(ok => {
        if (ok.data.listUsuarios.items[0] !== undefined) {
          let user_dbb = ok.data.listUsuarios.items[0];
          if (data.pass === user_dbb.password) {
            const new_sesion = { id: user_dbb.id, nickname: user_dbb.nickname, perfil: user_dbb.grupo, nombre: user_dbb.nombre, email: user_dbb.correo, level: user_dbb.level }
            setUsuario(new_sesion);
            setBackdrop(false);
            if (user_dbb.grupo === 'ADMIN') {
              handleNavigation("admin");
            } else if (user_dbb.grupo === 'RAINFLUENCER') {
              handleNavigation("crm");
            } else if (user_dbb.grupo === 'BACKOFFICE') {
              handleNavigation("admin");
            }
          } else {
            console.log('Password no corresponde');
            setBackdrop(false);
          }
        } else {
          console.log('No encontrado');
          setBackdrop(false);
        }
      }).catch(err => {
        console.log('Error al validar email');
        console.log(err);
        setBackdrop(false);
      })
    } else {
      let res = ValidaUsuarioNick(data.login);
      res.then(ok => {
        console.log(ok);


        if (ok.data.listUsuarios.items[0] !== undefined) {
          let user_dbb = ok.data.listUsuarios.items[0];
          if (data.pass === user_dbb.password) {
            const new_sesion = { id: user_dbb.id, nickname: user_dbb.nickname, perfil: user_dbb.grupo, nombre: user_dbb.nombre, email: user_dbb.correo, level: user_dbb.level }
            setUsuario(new_sesion);
            setBackdrop(false);
            if (user_dbb.grupo === 'ADMIN') {
              handleNavigation("admin");
            } else if (user_dbb.grupo === 'RAINFLUENCER') {
              handleNavigation("crm");
            } else if (user_dbb.grupo === 'BACKOFFICE') {
              handleNavigation("admin");
            }
          } else {
            console.log('Password no corresponde');
            setBackdrop(false);
          }
        } else {
          console.log('No encontrado');
          setBackdrop(false);
        }
      }).catch(err => {
        console.log('Error al validar nickname');
        console.log(err);
        setBackdrop(false);
      })
    }
  };

  const handleDetalleEquipo = async (id) => {
    history.push("/admin/equipos/" + id);
  }


  return (
    <Router history={history}>
      <Grid
        container
        style={{ fontFamily: Fuentes.principal, overflowX: "hidden" }}
      >
        <Switch>
          <Route exact path="/">
            <Landing navigation={handleNavigation} ></Landing>
          </Route>
          <Route exact path="/signup">
            <Contact
              navigation={handleNavigation}
              callback={handleGetDataContacto}
              data={_data}
            ></Contact>
          </Route>
          <Route exact path="/signup/rrss">
            <Social
              navigation={handleNavigation}
              callback={handleGetDataRrss}
              data={_rrss}
            ></Social>
          </Route>
          <Route exact path="/signup/codes">
            <Codes
              navigation={handleNavigation}
              callback={handleGetDataCodes}
              data={_codes}
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

          <Route exact path="/admin">
            <Admin navigation={handleNavigation} usuario={usuario} notificacionesPendientes={5}></Admin>
          </Route>
          <Route exact path="/admin/postulaciones">
            <Postulaciones navigation={handleNavigation} usuario={usuario} callback={handleDetalleEquipo}></Postulaciones>
          </Route>
          <Route exact path="/admin/rainfluencers">
            <Influencers navigation={handleNavigation} usuario={usuario} callback={handleDetalleEquipo}></Influencers>
          </Route>
          <Route exact path="/admin/equipos/:id">
            hola mundo
          </Route>
        </Switch>
      </Grid>
      <Backloader
        open={_showbackdrop}
        desde={"Rainfluencers"}
        etapa={_etapa}
      ></Backloader>
    </Router>
  );
}

export default App;
