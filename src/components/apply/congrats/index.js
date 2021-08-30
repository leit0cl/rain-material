import React, { useState, useEffect, useRef } from "react";
import { sleep } from "../../../resources/functions";
import { Divider, Grid } from "@material-ui/core";
import Backloader from "../../common/backloader";
import { BotonSec } from "../../common/buttons";
import { Colors } from "../../common/colors";
import cabeza from "../../common/grafica/cabeza.svg";
import recibido from "../../common/grafica/recibido.svg";

function Congrats(props) {
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
    props.navigation("home");
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
          backgroundColor: Colors.pink,
        }}
      >
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={4}>
          <img src={cabeza} alt={""}></img>
          <Divider flexItem={true} style={{ margin: "1em" }}></Divider>
          <img src={recibido} alt={""}></img>
          <Divider flexItem={true} style={{ margin: "1em" }}></Divider>
          <BotonSec fullwith={"false"} variant="outlined" onClick={handleClose} style={{fontWeight:500, width:'327px'}}>
            VOLVER AL INICIO
          </BotonSec>
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

export default Congrats;
