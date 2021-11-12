import React, { useState, useEffect, useRef } from "react";
import { sleep } from "../../../resources/functions";
import {
  Divider,
  Grid,
  Typography,
  IconButton,
  LinearProgress,
  Link,
  Checkbox,
} from "@material-ui/core";
import Backloader from "../../common/backloader";
import { Fuentes } from "../../common/fonts";
import { BotonSiguiente, BotonAtras } from "../../common/buttons";
import { Colors } from "../../common/colors";
import CloseIcon from "@material-ui/icons/Close";
import { TextForm } from "../../common/textbox";
import { useInput } from "../../../resources/hooks/input-hook";
import mora from "../../common/grafica/mora.svg";

function Codes(props) {
  const mountedRef = useRef(true);
  const [_showbackdrop, setBackdrop] = useState(false);

  const { value: _idea1, bind: bindIdea1, reset: resetIdea1 } = useInput("");
  const { value: _idea2, bind: bindIdea2, reset: resetIdea2 } = useInput("");
  const { value: _idea3, bind: bindIdea3, reset: resetIdea3 } = useInput("");

  const [_acepta, setAcepta] = useState(false);
  const [_disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (_acepta && _idea1 !== '') {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [_acepta, _idea1]);

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

  const handleAtras = async () => {
    props.navigation("rrss");
  };

  const handleGetCongra = async () => {
    let data = {};
    data.idea1 = _idea1;
    data.idea2 = _idea2;
    data.idea3 = _idea3;
    props.callback(data);
  };

  const resetform = async () => {
    resetIdea1();
    resetIdea2();
    resetIdea3();
  };

  const handleAcepta = async (e) => {
    e.preventDefault();
    setAcepta(e.target.checked);
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
                Nueva postulación
              </Typography>
            </Grid>
            <Grid item xs={2} style={{ textAlign: "right" }}>
              <IconButton onClick={handleClose}>
                <CloseIcon></CloseIcon>
              </IconButton>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "left" }}>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  color: Colors.black,
                  fontWeight: 400,
                  fontSize: 16,
                }}
              >
                Detalles finales
              </Typography>
              <LinearProgress variant="determinate" value={100} />
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{ marginTop: "5px" }}>
            <Grid item xs={12} md={12}>
              <Divider light={true} style={{ marginTop: "5px", marginBottom: "5px" }}></Divider>
            </Grid>
            <Grid item xs={6} md={6}>
              <img src={mora} alt={""}></img>
            </Grid>
            <Grid item xs={6} md={6}>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  color: Colors.black,
                  fontWeight: 400,
                  fontSize: 16,
                }}
              >
                Si aceptamos tu registro como Rainfluencer 😎🌈
              </Typography>

              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  color: Colors.purple,
                  fontWeight: 800,
                  fontSize: 16,
                }}
              >
                ¿Cómo imaginas que será el texto de tu primer código de
                descuento?
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  color: Colors.black,
                  fontWeight: 800,
                  fontSize: 16,
                }}
              >
                Ingresa hasta 3 ideas de como podría ser tu código, sin usar
                espacios ni caracteres especiales
              </Typography>
              <Divider light={true} style={{ margin: "5px" }}></Divider>
            </Grid>

            <Grid item xs={12} md={12}>
              <TextForm
                required
                type="text"
                style={{
                  width: "100%",
                  marginTop: "0.5em",
                  marginLeft: "0.5em",
                  marginRight: "0.5em",
                }}
                {...bindIdea1}
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
                label={"Idea 1"}
              ></TextForm>
            </Grid>

            <Grid item xs={12} md={12}>
              <TextForm
                required
                type="text"
                style={{
                  width: "100%",
                  marginTop: "0.5em",
                  marginLeft: "0.5em",
                  marginRight: "0.5em",
                }}
                {...bindIdea2}
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
                label={"Idea 2"}
              ></TextForm>
            </Grid>

            <Grid item xs={12} md={12}>
              <TextForm
                required
                type="text"
                style={{
                  width: "100%",
                  marginTop: "0.5em",
                  marginLeft: "0.5em",
                  marginRight: "0.5em",
                }}
                {...bindIdea3}
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
                label={"Idea 3"}
              ></TextForm>
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
                Los códigos de descuento de Rainbown solo pueden ser utilizados
                para compras dentro del territorio nacional.
              </Typography>
            </Grid>

            <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
              <Checkbox
                style={{ color: Colors.purple }}
                onChange={handleAcepta}
              ></Checkbox>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  color: Colors.black,
                  fontWeight: 400,
                  fontSize: 16,
                }}
              >
                Acepto los
                <Link href="/terms" target="_blank" rel="noreferrer">
                  {" términos y condiciones "}
                </Link>
                de Rainbown
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <BotonAtras
                fullwith={"false"}
                variant="outlined"
                onClick={handleAtras}
              >
                ANTERIOR
              </BotonAtras>
            </Grid>

            <Grid item xs={12} md={6}>
              <BotonSiguiente
                disabled={_disabled}
                fullwith={"false"}
                variant="outlined"
                onClick={handleGetCongra}
              >
                FINALIZAR
              </BotonSiguiente>
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

export default Codes;
