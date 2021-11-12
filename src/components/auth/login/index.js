import React, { useState, useEffect, useRef } from "react";
import { sleep } from "../../../resources/functions";
import { Divider, Grid, Typography, IconButton, Link } from "@material-ui/core";
import Backloader from "../../common/backloader";
import { Fuentes } from "../../common/fonts";
import { BotonSiguiente } from "../../common/buttons";
import { Colors } from "../../common/colors";
import CloseIcon from "@material-ui/icons/Close";
import { TextForm } from "../../common/textbox";
import { useInput } from "../../../resources/hooks/input-hook";
import naranja from "../../common/grafica/naranja.svg";



function Login(props) {
  const mountedRef = useRef(true);
  const [_showbackdrop, setBackdrop] = useState(false);
  const { value: _login, bind: bindLogin, reset: resetLogin } = useInput("");
  const { value: _pass, bind: bindPass, reset: resetPass } = useInput("");
  const [_disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (_login !== "" && _pass !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [_login, _pass]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const fade = async () => {
    setBackdrop(true);
    await sleep(1000);
    setBackdrop(false);
  };

  useEffect(() => {
    fade();
    resetform();
    return () => {
      mountedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = async () => {
    props.navigation("home");
  };

  const handleLogin = async () => {
    let data = {};
    data.login = _login;
    data.pass = _pass;
    props.callback(data);
  };

  const resetform = async () => {
    resetLogin();
    resetPass();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={2}
        style={{
          height: "100%",
          width: "100vw",
          textAlign: "center",
          padding: "2vh",
          verticalAlign: "top",
        }}
      >
        <Grid item xs={12} md={12}>
          <Grid container spacing={0}>
            <Grid item xs={10} style={{ textAlign: "left" }}>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  color: Colors.pink,
                  fontWeight: 800,
                  fontSize: 25,
                }}
              >
                Ingresa con tu cuenta
              </Typography>
            </Grid>
            <Grid item xs={2} style={{ textAlign: "right" }}>
              <IconButton onClick={handleClose}>
                <CloseIcon></CloseIcon>
              </IconButton>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Divider light={true} style={{ margin: "1em" }}></Divider>
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{ marginTop: "2em" }}>
            <Grid item xs={12} md={12}>
              <img src={naranja} alt={""}></img>
            </Grid>

            <Grid item xs={12} md={12}>
              <TextForm
                required
                type="text"
                style={{
                  width: "50%",
                  marginTop: "1em",
                  marginLeft: "25%",
                  marginRight: "25%",
                }}
                {...bindLogin}
                inputProps={{
                  style: {
                    fontSize: 16,
                    color: Colors.black,
                    fontFamily: Fuentes.controles,
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontSize: 16,
                    color: Colors.green,
                    fontFamily: Fuentes.controles,
                    fontWeight: 600,
                  },
                }}
                variant="outlined"
                label={"Login"}
              ></TextForm>
            </Grid>

            <Grid item xs={12} md={12}>
              <TextForm
                required
                type="password"
                style={{
                  width: "50%",
                  marginTop: "1em",
                  marginLeft: "25%",
                  marginRight: "25%",
                }}
                {...bindPass}
                inputProps={{
                  style: {
                    fontSize: 16,
                    color: Colors.black,
                    fontFamily: Fuentes.controles,
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontSize: 16,
                    color: Colors.green,
                    fontFamily: Fuentes.controles,
                    fontWeight: 600,
                  },
                }}
                variant="outlined"
                label={"Password"}
              ></TextForm>
            </Grid>

           

            <Grid item xs={12} md={12} style={{ textAlign: "center" }}></Grid>

            <Grid item xs={12} md={12}>
              <BotonSiguiente
                disabled={_disabled}
                fullwith={"false"}
                variant="outlined"
                onClick={handleLogin}
              >
                INGRESAR
              </BotonSiguiente>
            </Grid>

            <Grid item xs={12} md={12}>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  fontStyle: "normal",
                  fontWeight: 800,
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: Colors.purple,
                }}
              >
                <Link href="/auth/forget">¿Olvidaste tu clave?</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Backloader
        open={_showbackdrop}
        desde={"Rainfluencers"}
        etapa={""}
      ></Backloader>
    </form>
  );
}

export default Login;
