import React, { useState, useEffect, useRef } from "react";
import { sleep } from "../../resources/functions";
import {
  Divider,
  Grid,
  Typography,
  IconButton,
  Link,
  Chip,
} from "@material-ui/core";
import Backloader from "../common/backloader";
import { Fuentes } from "../common/fonts";
import { BotonSiguiente } from "../common/buttons";
import { Colors } from "../common/colors";
import MenuIcon from "@material-ui/icons/Menu";
import avatar from "../common/grafica/avatar.svg";

function Crm(props) {
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

  const handlePagos = async () => {
    props.navigation("payments")
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
                  color: Colors.purple,
                  fontWeight: 800,
                  fontSize: "1.5em",
                }}
              >
                Rainfluencer
              </Typography>
            </Grid>
            <Grid item xs={2} style={{ textAlign: "right" }}>
              <IconButton onClick={handleClose}>
                <MenuIcon
                  style={{ color: Colors.purple, fontSize: "2em" }}
                ></MenuIcon>
              </IconButton>
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{ marginTop: "2em" }}>
            <Grid item xs={12} md={12}>
              <Divider light={true} style={{ margin: "1em" }}></Divider>
            </Grid>
            <Grid item xs={6} md={6}>
              <img src={avatar} alt={""}></img>
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
                Hola
              </Typography>

              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  color: Colors.purple,
                  fontWeight: 800,
                  fontSize: "1.5em",
                }}
              >
                Gamer Indómito
              </Typography>

              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  color: Colors.purple,
                  fontWeight: 400,
                  fontSize: 16,
                }}
              >
                Nivel :
              </Typography>

              <Chip
                label="Aprendiz"
                style={{ backgroundColor: Colors.green, color: Colors.white }}
              />
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
                Mis códigos (2)
              </Typography>
              <Divider flexItem={true} style={{ margin: "1em" }}></Divider>

              <Grid container spacing={0}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                  <div
                    style={{
                      backgroundColor: Colors.lightpurple,
                      border: "dashed",
                      borderColor: Colors.purple,
                      color: Colors.purple,
                    }}
                  >
                    <Typography
                      style={{
                        fontFamily: Fuentes.principal,
                        color: Colors.purple,
                        fontWeight: 1000,
                        fontSize: 42,
                      }}
                    >
                      C0D1G0B4K4N
                    </Typography>
                    <Divider flexItem={true}></Divider>
                    <Typography
                      style={{
                        fontFamily: Fuentes.principal,
                        color: Colors.black,
                        fontWeight: 400,
                        fontSize: 16,
                      }}
                    >
                      10% Dcto en pack de 12 o + Rainbow.
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={2}></Grid>
              </Grid>
              <Divider flexItem={true} style={{ margin: "1em" }}></Divider>

              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  color: Colors.black,
                  fontWeight: 400,
                  fontSize: 16,
                  textDecoration: "underline",
                }}
              >
                <Link href="/crm/stickers">{" Ver Stickers con este código "}</Link>
              </Typography>
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
                Estadísticas{" "}
                <label
                  style={{
                    fontFamily: Fuentes.principal,
                    color: Colors.black,
                    fontWeight: 800,
                    fontSize: 20,
                  }}
                >
                  Mayo
                </label>
              </Typography>

              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  color: Colors.purple,
                  fontWeight: 400,
                  fontSize: 16,
                }}
              >
                Ya van
              </Typography>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  color: Colors.red,
                  fontWeight: 800,
                  fontSize: 64,
                }}
              >
                58
              </Typography>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  color: Colors.purple,
                  fontWeight: 400,
                  fontSize: 16,
                }}
              >
                usos de tus códigos
              </Typography>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  color: Colors.purple,
                  fontWeight: 400,
                  fontSize: 16,
                }}
              >
                Equivalentes a
              </Typography>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  color: Colors.purple,
                  fontWeight: 800,
                  fontSize: 18,
                }}
              >
                $12.556
              </Typography>
            </Grid>

            <Grid item xs={12} md={12}>
              <BotonSiguiente
                style={{ width: "auto" }}
                disabled={false}
                fullwith={"false"}
                variant="outlined"
                onClick={handlePagos}
              >
                Ver historial de pagos y recaudaciones
              </BotonSiguiente>
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
                Medallas (25)
              </Typography>
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
                <Link href="/crm/awards">{" Ver todas tus medallas "}</Link>
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

export default Crm;
