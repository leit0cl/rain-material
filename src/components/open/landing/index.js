import React, { useState, useEffect, useRef /*useContext*/ } from "react";
import { sleep } from "../../../resources/functions";
import { Divider, Grid, Hidden, Typography, Link } from "@material-ui/core";
import Backloader from "../../common/backloader";
import { Fuentes } from "../../common/fonts";
import { BotonPppal, BotonSec } from "../../common/buttons";
import { Colors } from "../../common/colors";
import rainfluencerMd from "../../common/logos/rainfluencerMd.svg";
import logoMD from "../../common/logos/logoMd.svg";
import vuelo from "../../common/grafica/vuelo.svg";

function Landing(props) {
  const mountedRef = useRef(true);
  const [_showbackdrop, setBackdrop] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const fade = async () => {
    setBackdrop(true);
    await sleep(1000);
    setBackdrop(false);
    return () => {
      mountedRef.current = false;
    };
  };

  useEffect(() => {
    fade();
    return () => {
      mountedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignUp = async () => {
    props.navigation("signup");
  };

  const handleLogin = async () => {
    props.navigation("login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Hidden smDown>
        <Grid
          container
          spacing={2}
          style={{ height: "100vh", width: "100vw", textAlign: "center" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            style={{ backgroundColor: Colors.pink, paddingTop: "200px" }}
          >
            <Grid
              container
              spacing={2}
              style={{ backgroundColor: Colors.pink, textAlign: "left" }}
            >
              <Grid item xs={12} md={2}></Grid>
              <Grid item xs={12} md={8}>
                <img src={rainfluencerMd} alt={""} style={{ width: '40vw' }}></img>
              </Grid>
              <Grid item xs={12} md={2}></Grid>
              <Grid item xs={12} md={1}></Grid>
              <Grid item xs={12} md={4}>
                <BotonSec
                  fullwith={"false"}
                  variant="outlined"
                  onClick={handleSignUp}
                >
                  POSTULAR AHORA
                </BotonSec>
              </Grid>
              <Grid item xs={12} md={2}></Grid>
              <Grid item xs={12} md={4}>
                <BotonPppal
                  fullwith={"false"}
                  variant="outlined"
                  onClick={handleLogin}
                >
                  INGRESA CON TU CUENTA
                </BotonPppal>
              </Grid>
              <Grid item xs={12} md={1}></Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{ backgroundColor: Colors.pink, paddingTop: "200px" }}
          >
            <img src={logoMD} alt={""} style={{ width: '40vw' }}></img>
          </Grid>
          <Grid container spacing={0}>
            <Grid
              item
              xs={12}
              style={{
                height: "102px",
                backgroundSize: "contain",
                backgroundRepeat: "repeat",
                backgroundPosition: "bottom",
                backgroundImage: `url(${vuelo})`,
              }}
            ></Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}></Grid>
            <Grid item xs={12} md={4} style={{ textAlign: "right" }}>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  fontStyle: "normal",
                  fontWeight: 800,
                  fontSize: "20px",
                  lineHeight: "23px",
                  color: Colors.pink,
                  marginRight: "2em",
                }}
              >
                ¿Qué es esto?
              </Typography>
            </Grid>
            <Grid item xs={12} md={5} style={{ textAlign: "left" }}>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: Colors.black,
                }}
              >
                Los Rainfluencers son influencers que obtienen beneficios por
                compartir cupones de descuento de Rainbow 🤘🏼 🎟 🌈
              </Typography>
              <Divider flexItem={true}></Divider>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: Colors.black,
                }}
              >
                Si eres{" "}
                <span
                  style={{
                    fontSize: 16,
                    fontStyle: "bold",
                    color: Colors.pink,
                  }}
                >
                  Chileno
                </span>{" "}
                y eres un influencer o tienes un equipo con
                <span
                  style={{
                    fontSize: 16,
                    fontStyle: "bold",
                    color: Colors.pink,
                  }}
                >
                  más de 5.000 seguidores*,
                </span>{" "}
                postula ahora!
              </Typography>
              <Divider flexItem={true} style={{ marginTop: "2vh" }}></Divider>
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
                <Link href="/terms" target="_blank" rel="noreferrer">
                  * Ver los terminos y condiciones aquí 📄
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} md={1} style={{ textAlign: "left" }}></Grid>
          </Grid>
        </Grid>
      </Hidden>

      <Hidden xsDown mdUp>

        <Grid
          container
          spacing={2}
          style={{ height: "100vh", width: "100vw", textAlign: "center" }}
        >
          <Grid
            item
            xs={12}
            style={{ backgroundColor: Colors.pink, paddingTop: "3vh" }}
          >
            <Grid
              container
              spacing={2}
              style={{ backgroundColor: Colors.pink, textAlign: "center" }}
            >
              <Grid item xs={12}>
                <img src={logoMD} alt={""} style={{ width: '50vw' }}></img>
                <Divider flexItem={true}></Divider>
                <img src={rainfluencerMd} alt={""} style={{ width: '50vw' }}></img>
              </Grid>
              <Grid item xs={12} md={4}>
                <BotonSec
                  fullwith={"false"}
                  variant="outlined"
                  onClick={handleSignUp}
                >
                  POSTULAR AHORA
                </BotonSec>
              </Grid>
              <Grid item xs={12} md={2}></Grid>
              <Grid item xs={12} md={4}>
                <BotonPppal
                  fullwith={"false"}
                  variant="outlined"
                  onClick={handleLogin}
                >
                  INGRESA CON TU CUENTA
                </BotonPppal>
              </Grid>
              <Grid item xs={12} md={1}></Grid>
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            <Grid
              item
              xs={12}
              style={{
                height: "102px",
                backgroundSize: "contain",
                backgroundRepeat: "repeat",
                backgroundPosition: "bottom",
                backgroundImage: `url(${vuelo})`,
              }}
            ></Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}></Grid>
            <Grid item xs={12} md={4} style={{ textAlign: "center" }}>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  fontStyle: "normal",
                  fontWeight: 800,
                  fontSize: "20px",
                  lineHeight: "23px",
                  color: Colors.pink,
                  marginRight: "2em",
                }}
              >
                ¿Qué es esto?
              </Typography>
            </Grid>
            <Grid item xs={12} md={5} style={{ textAlign: "center" }}>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "1em",
                  lineHeight: "20px",
                  color: Colors.black,
                }}
              >
                Los Rainfluencers son influencers que obtienen beneficios por
                compartir cupones de descuento de Rainbow 🤘🏼 🎟 🌈
              </Typography>
              <Divider flexItem={true}></Divider>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "1em",
                  lineHeight: "20px",
                  color: Colors.black,
                }}
              >
              {" Si eres "}
                <span
                  style={{
                    fontSize: '1em',
                    fontStyle: "bold",
                    color: Colors.pink,
                  }}
                >
                  Chileno
                </span>{" "}
                y eres un influencer o tienes un equipo con 
                <span
                  style={{
                    fontSize: '1em',
                    fontStyle: "bold",
                    color: Colors.pink,
                  }}
                >
                  {' más de 5.000 seguidores*,'}
                </span>{" "}
                postula ahora!
              </Typography>
              <Divider flexItem={true} style={{ marginTop: "2vh" }}></Divider>
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
                <Link href="/terms" target="_blank" rel="noreferrer">
                  * Ver los terminos y condiciones aquí 📄
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} md={1} style={{ textAlign: "left" }}></Grid>
          </Grid>
        </Grid>

      </Hidden>



      <Hidden smUp>

        <Grid
          container
          spacing={2}
          style={{ height: "100vh", width: "100vw", textAlign: "center" }}
        >
          <Grid
            item
            xs={12}
            style={{ backgroundColor: Colors.pink, paddingTop: "3vh" }}
          >
            <Grid
              container
              spacing={2}
              style={{ backgroundColor: Colors.pink, textAlign: "center" }}
            >
              <Grid item xs={12}>
                <img src={logoMD} alt={""} style={{ width: '80vw' }}></img>
                <Divider flexItem={true}></Divider>
                <img src={rainfluencerMd} alt={""} style={{ width: '80vw' }}></img>
              </Grid>
              <Grid item xs={12} md={4}>
                <BotonSec
                  fullwith={"false"}
                  variant="outlined"
                  onClick={handleSignUp}
                >
                  POSTULAR AHORA
                </BotonSec>
              </Grid>
              <Grid item xs={12} md={2}></Grid>
              <Grid item xs={12} md={4}>
                <BotonPppal
                  fullwith={"false"}
                  variant="outlined"
                  onClick={handleLogin}
                >
                  INGRESA CON TU CUENTA
                </BotonPppal>
              </Grid>
              <Grid item xs={12} md={1}></Grid>
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            <Grid
              item
              xs={12}
              style={{
                height: "30px",
                backgroundSize: "contain",
                backgroundRepeat: "repeat",
                backgroundPosition: "bottom",
                backgroundImage: `url(${vuelo})`,
              }}
            ></Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}></Grid>
            <Grid item xs={12} md={4} style={{ textAlign: "center" }}>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  fontStyle: "normal",
                  fontWeight: 800,
                  fontSize: "20px",
                  lineHeight: "23px",
                  color: Colors.pink,
                  marginRight: "2em",
                }}
              >
                ¿Qué es esto?
              </Typography>
            </Grid>
            <Grid item xs={12} md={5} style={{ textAlign: "center", padding:'1em' }}>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "1em",
                  lineHeight: "20px",
                  color: Colors.black,
                }}
              >
                Los Rainfluencers son influencers que obtienen beneficios por
                compartir cupones de descuento de Rainbow 🤘🏼 🎟 🌈
              </Typography>
              <Divider flexItem={true}></Divider>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "1em",
                  lineHeight: "20px",
                  color: Colors.black,
                }}
              >
              {" Si eres "}
                <span
                  style={{
                    fontSize: '1em',
                    fontStyle: "bold",
                    color: Colors.pink,
                  }}
                >
                  Chileno
                </span>{" "}
                y eres un influencer o tienes un equipo con 
                <span
                  style={{
                    fontSize: '1em',
                    fontStyle: "bold",
                    color: Colors.pink,
                  }}
                >
                  {' más de 5.000 seguidores*,'}
                </span>{" "}
                postula ahora!
              </Typography>
              <Divider flexItem={true} style={{ marginTop: "2vh" }}></Divider>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  fontStyle: "normal",
                  fontWeight: 800,
                  fontSize: "1em",
                  lineHeight: "20px",
                  color: Colors.purple,
                }}
              >
                <Link href="/terms" target="_blank" rel="noreferrer">
                  * Ver los terminos y condiciones aquí 📄
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} md={1} style={{ textAlign: "left" }}></Grid>
          </Grid>
        </Grid>

      </Hidden>

      <Backloader
        open={_showbackdrop}
        desde={"Rainfluencers"}
        etapa={""}
      ></Backloader>
    </form>
  );
}

export default Landing;
