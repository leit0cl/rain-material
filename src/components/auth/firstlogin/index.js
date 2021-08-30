import React, { useState, useEffect, useRef } from "react";
import { sleep } from "../../../resources/functions";
import { Divider, Grid, Typography, IconButton } from "@material-ui/core";
import Backloader from "../../common/backloader";
import { Fuentes } from "../../common/fonts";
import { BotonSiguiente } from "../../common/buttons";
import { Colors } from "../../common/colors";
import CloseIcon from "@material-ui/icons/Close";
import { TextForm } from "../../common/textbox";
import { useInput } from "../../../resources/hooks/input-hook";

function FirstLogin(props) {
  const mountedRef = useRef(true);
  const [_showbackdrop, setBackdrop] = useState(false);

  const {
    value: _password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");
  const {
    value: _confirma,
    bind: bindConfirma,
    reset: resetConfirma,
  } = useInput("");
  const [_disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (_password !== "" && _confirma !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [_password, _confirma]);

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

  const handleConfirmaLogin = async () => {
    let data = {};
    data.password = _password;
    props.callback(data);
  };

  const resetform = async () => {
    resetPassword();
    resetConfirma();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={2}
        style={{
          height: "100vh",
          width: "100vw",
          textAlign: "center",
          padding: "2vh",
        }}
      >
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={4}>
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
                Primer Ingreso
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

          <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
            <Typography
              style={{
                fontFamily: Fuentes.principal,
                color: Colors.black,
                fontWeight: 400,
                fontSize: 16,
              }}
            >
              Hola, @usuario, este es tu primer ingreso.
            </Typography>
          </Grid>

          <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
            <Typography
              style={{
                fontFamily: Fuentes.principal,
                color: Colors.black,
                fontWeight: 400,
                fontSize: 16,
              }}
            >
              Crea una nueva contraseña, esta puede tener letras (a-z) números
              (0-9) y caracteres especiales (#, @, $)
            </Typography>
          </Grid>
          <Grid container spacing={2} style={{ marginTop: "2em" }}>
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
                {...bindPassword}
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
                {...bindConfirma}
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
                label={"Confirma Password"}
              ></TextForm>
            </Grid>

            <Grid item xs={12} md={12} style={{ textAlign: "center" }}></Grid>

            <Grid item xs={12} md={12}>
              <BotonSiguiente
                style={{ width: "327px" }}
                disabled={_disabled}
                fullwith={"false"}
                variant="outlined"
                onClick={handleConfirmaLogin}
              >
               SIGUIENTE
              </BotonSiguiente>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>

      <Backloader
        open={_showbackdrop}
        desde={"Rainfluencers"}
        etapa={""}
      ></Backloader>
    </form>
  );
}

export default FirstLogin;
