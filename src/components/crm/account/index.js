import React, { useState, useEffect, useRef } from "react";
import { sleep } from "../../../resources/functions";
import {
  Divider,
  Grid,
  Typography,
  IconButton,
  Link,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
import Backloader from "../../common/backloader";
import { Fuentes } from "../../common/fonts";
import { BotonSiguiente } from "../../common/buttons";
import { Colors } from "../../common/colors";
import CloseIcon from "@material-ui/icons/Close";
import { TextForm } from "../../common/textbox";
import { useInput } from "../../../resources/hooks/input-hook";
import naranja from "../../common/grafica/naranja.svg";

function Account(props) {
  const mountedRef = useRef(true);
  const [_showbackdrop, setBackdrop] = useState(false);
  const [_usainfo, setUsaInfo] = useState("NO");

  const { value: _banco, bind: bindBanco, reset: resetBanco } = useInput("");
  const { value: _tipo, bind: bindTipo, reset: resetTipo } = useInput("");
  const { value: _numero, bind: bindNumero, reset: resetNumero } = useInput("");
  const { value: _rut, bind: bindRut, reset: resetRut } = useInput("");
  const { value: _email, bind: bindMail, reset: resetMail } = useInput("");

  const [_disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (
      _banco !== "" &&
      _tipo !== "" &&
      _numero !== "" &&
      _rut !== "" &&
      _email !== ""
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [_banco, _tipo, _numero, _rut, _email]);

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
    props.navigation("crm");
  };

  const handleGuardar = async () => {
    let data = {};
    data.banco = _banco;
    data.tipo = _tipo;
    data.numero = _numero;
    data.rut = _rut;
    data.email = _email;

    props.callback(data);
  };

  const resetform = async () => {
    resetBanco();
    resetNumero();
    resetTipo();
    resetRut();
    resetMail();
  };

  const handleChange = (e) => {
    setUsaInfo(e.target.value);
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
                Bienvenido Rainfluencer
              </Typography>
            </Grid>
            <Grid item xs={2} style={{ textAlign: "right" }}>
              <IconButton onClick={handleClose}>
                <CloseIcon></CloseIcon>
              </IconButton>
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{ marginTop: "2em" }}>
            <Grid item xs={12} md={12}>
              <Divider light={true} style={{ margin: "1em" }}></Divider>
            </Grid>
            <Grid item xs={6} md={6}>
              <img src={naranja} alt={""}></img>
            </Grid>
            <Grid item xs={6} md={6}>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  color: Colors.purple,
                  fontWeight: 400,
                  fontSize: 16,
                }}
              >
                Bienvenido al programa de
              </Typography>

              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  color: Colors.purple,
                  fontWeight: 800,
                  fontSize: 16,
                }}
              >
                Influencers de Rainbow.
              </Typography>

              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  color: Colors.purple,
                  fontWeight: 400,
                  fontSize: 16,
                }}
              >
                Ya tenemos toda tu información, solo nos falta conocer donde
                quieres recibir tus ingresos:
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
              <Divider light={true} style={{ margin: "1em" }}></Divider>
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
                {...bindBanco}
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
                label={"Institución Bancaria"}
              ></TextForm>
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
                {...bindTipo}
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
                label={"Tipo de Cuenta"}
              ></TextForm>
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
                {...bindNumero}
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
                label={"Número de Cuenta"}
              ></TextForm>
            </Grid>
            <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
              <Divider light={true} style={{ margin: "1em" }}></Divider>
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
                Información de destinatario
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={12}
              style={{ textAlign: "center", fontWeight: 400 }}
            >
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="user"
                  name="usainfo"
                  value={_usainfo}
                  onChange={handleChange}
                >
                  <div>
                    <FormControlLabel
                      style={{ fontWeight: 400 }}
                      value="SI"
                      control={<Radio style={{ color: Colors.purple }} />}
                      label="Usar info de registro"
                    />
                    <FormControlLabel
                      value="NO"
                      control={<Radio style={{ color: Colors.purple }} />}
                      label="Otra"
                    />
                  </div>
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
              <Divider light={true} style={{ margin: "1em" }}></Divider>
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
                {...bindRut}
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
                label={"RUT"}
              ></TextForm>
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
                {...bindMail}
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
                label={"Email"}
              ></TextForm>
            </Grid>

            <Grid item xs={12} md={12}>
              <BotonSiguiente
                style={{ width: "327px" }}
                disabled={_disabled}
                fullwith={"false"}
                variant="outlined"
                onClick={handleGuardar}
              >
                GUARDAR DATOS
              </BotonSiguiente>
            </Grid>

            <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  color: Colors.black,
                  fontWeight: 400,
                  fontSize: 16,
                  textDecoration: "underline",
                }}
              >
                <Link href="/crm">
                  {" Prefiero ingresarlos en otro momento "}
                </Link>
              </Typography>
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

export default Account;
