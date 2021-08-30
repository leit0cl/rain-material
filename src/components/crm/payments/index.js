import React, { useState, useEffect, useRef } from "react";
import { sleep } from "../../../resources/functions";
import {
  Divider,
  Grid,
  Typography,
  IconButton,
  Link,
} from "@material-ui/core";
import Backloader from "../../common/backloader";
import { Fuentes } from "../../common/fonts";
import { BotonSiguiente } from "../../common/buttons";
import { Colors } from "../../common/colors";
import CloseIcon from "@material-ui/icons/Close";
import naranja from "../../common/grafica/naranja.svg";

function Payments(props) {
  const mountedRef = useRef(true);
  const [_showbackdrop, setBackdrop] = useState(false);


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
    props.callback(data);
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
                Historial de Pagos y Recaudación
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

          

            <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
              <Divider light={true} style={{ margin: "1em" }}></Divider>
            </Grid>


            <Grid item xs={12} md={12}>
              <BotonSiguiente
                style={{ width: "327px" }}
                disabled={false}
                fullwith={"false"}
                variant="outlined"
                onClick={handleGuardar}
              >
                Botón
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
                  {" Accion "}
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

export default Payments;
