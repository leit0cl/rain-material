import React, { useState, useEffect, useRef } from "react";
import { sleep } from "../../../resources/functions";
import {
  Divider,
  Grid,
  Typography,
  IconButton,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import Backloader from "../../common/backloader";
import { Fuentes } from "../../common/fonts";
import { BotonGrillaNOk, BotonGrillaOk, BotonGrillaDetalle } from "../../common/buttons";
import { Colors } from "../../common/colors";
import CloseIcon from "@material-ui/icons/Close";
import naranja from "../../common/grafica/naranja.svg";
import { TodosLosPostulantes } from '../../../services/postulantes';
import { WS_UPDATE_POSTULANTE } from '../../../services/postulantes/mutations';
import { WS_CREA_USUARIO } from '../../../services/usuarios/mutations'

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import ShareIcon from "@material-ui/icons/Share";

import RedditIcon from "@material-ui/icons/Reddit";
import PinterestIcon from "@material-ui/icons/Pinterest";
import QrIcon from '../../../resources/icons/qricon.svg';
import moment from 'moment';

import { enviarEmail } from '../../../services/ses';
import EmailBienvenida from '../../bienvenida';
import FichaEquipo from '../../common/cards/equipo';

function Postulaciones(props) {
  const mountedRef = useRef(true);
  const [_showbackdrop, setBackdrop] = useState(false);
  const [_postulantesAll, setAllPostulantes] = useState([]);
  const [_etapa, setEtapa] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
  };



  useEffect(() => {
    handleRecarga();
    return () => {
      mountedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = async () => {
    props.navigation("admin");
  };

  const handleRecarga = async () => {

    setBackdrop(true);
    setEtapa('Cargando Postulaciones');
    let res = TodosLosPostulantes();
    res.then(ok => {

      let aux = []
      const itemes = ok.data.listPostulantes.items;
      itemes.forEach(element => {
        let nuevo_ele = {}
        nuevo_ele.id = element.id;
        nuevo_ele.tipo = element.tipo;
        nuevo_ele.nickname = element.nickname;
        nuevo_ele.representante = element.representante;
        nuevo_ele.fecha_postulacion = element.fecha_postulacion;
        nuevo_ele.about = element.about;
        nuevo_ele.email = element.email;
        nuevo_ele.rut = element.rut;
        nuevo_ele.tipodoc = element.tipodoc;
        nuevo_ele.rrss = JSON.parse(element.rrss);
        nuevo_ele.codes = JSON.parse(element.codes);

        if (element.estado === '' || element.estado === null) {
          nuevo_ele.estado = 'PENDIENTE';
        } else {
          nuevo_ele.estado = element.estado;
        }
        nuevo_ele._version = element._version;
        nuevo_ele.equipo = element.equipo;
        aux.push(nuevo_ele);
      })

      setAllPostulantes(aux.sort((a, b) => (a.fecha_postulacion > b.fecha_postulacion) ? 1 : -1));

      setBackdrop(false);

    }).catch(err => {
      console.log(err);
    })
  };

  const handleCrea = async (data) => {
    setEtapa('Aprobando Postulación');
    setBackdrop(true);
    let objPostulante = {}
    objPostulante.id = data.id;
    objPostulante.estado = 'APROBADO';
    objPostulante._version = data._version;
    let res = WS_UPDATE_POSTULANTE(objPostulante);
    res.then(ok => {

      setEtapa('Creando Usuario Nuevo')
      let objUsuario = {};
      objUsuario.correo = data.email;
      objUsuario.password = 'Rainbow2022.'
      objUsuario.nombre = data.representante;
      objUsuario.nickname = data.nickname;
      objUsuario.tipodoc = data.tipodoc;
      objUsuario.documento = data.rut;
      objUsuario.tipo = data.tipo;
      objUsuario.estado = 'ACTIVO';
      objUsuario.level = 'PRINCIPIANTE';
      objUsuario.grupo = 'RAINFLUENCER';

      let res_user = WS_CREA_USUARIO(objUsuario);
      res_user.then(okiuser => {
        console.log(ok);
        handleRecarga();
      }).catch(erru => {
        console.log(erru);
        setBackdrop(false);
      })

    }).catch(err => {
      console.log(err);
      setBackdrop(false);
    })
  }

  const handleRechaza = async (data) => {
    setEtapa('Rechazando Postulación');
    setBackdrop(true);
    let objPostulante = {}
    objPostulante.id = data.id;
    objPostulante.estado = 'RECHAZADO';
    objPostulante._version = data._version;
    let res = WS_UPDATE_POSTULANTE(objPostulante);
    res.then(ok => {
      handleRecarga();
    }).catch(err => {
      console.log(err);
      setBackdrop(false);
    })
  }

  const handleNotifica = async (data) => {

    setBackdrop(true);
    setEtapa('Notificando Postulación');
    let destinatario = { nombre: data.representante, email: data.email, password: 'Rainbow2021.' }
    await sleep(1000);

    let res = enviarEmail('lcortesp@gmail.com', 'Gracias por postular a #RAINFLUENCERS', <EmailBienvenida destinatario={destinatario}></EmailBienvenida>);
    res.then(oki => {
      setBackdrop(false);
      console.log(oki);
    });

  }



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
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} md={10}>
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
                Postulaciones Recibidas
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
              <img src={naranja} alt={""} style={{ height: '5em' }}></img>
            </Grid>
            <Grid item xs={6} md={6}>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  color: Colors.purple,
                  fontWeight: 800,
                  fontSize: 16,
                }}
              >
                Postulantes al programa Rainfluencers.
              </Typography>


              <BotonGrillaDetalle
                style={{ width: "auto" }}
                disabled={false}
                fullwith={"false"}
                variant="outlined"
                onClick={handleRecarga}
              >
                Actualizar
              </BotonGrillaDetalle>

            </Grid>

            <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
              <Divider light={true} style={{ margin: "1em" }}></Divider>
            </Grid>
            <Grid item xs={12} md={12} style={{ textAlign: "center", marginBottom:'10vh' }}>

              <TableContainer >
                <Table sx={{ minWidth: 650 }} aria-label="tabla">
                  <TableHead>
                    <TableRow style={{ backgroundColor: Colors.green, color: Colors.white }}>
                      <TableCell style={{ backgroundColor: Colors.green, color: Colors.white, fontSize: '1.2em' }}>#</TableCell>
                      <TableCell style={{ backgroundColor: Colors.green, color: Colors.white, fontSize: '1.2em' }}>Fecha</TableCell>
                      <TableCell style={{ backgroundColor: Colors.green, color: Colors.white, fontSize: '1.2em' }}>Player</TableCell>
                      <TableCell style={{ backgroundColor: Colors.green, color: Colors.white, fontSize: '1.2em' }}>Nickname</TableCell>
                      <TableCell style={{ backgroundColor: Colors.green, color: Colors.white, fontSize: '1.2em' }}>Representante</TableCell>
                      <TableCell style={{ backgroundColor: Colors.green, color: Colors.white, fontSize: '1.2em' }}>Email</TableCell>
                      <TableCell style={{ backgroundColor: Colors.green, color: Colors.white, fontSize: '1.2em' }}>Documento</TableCell>
                      <TableCell style={{ backgroundColor: Colors.green, color: Colors.white, fontSize: '1.2em' }}>Equipo</TableCell>
                      <TableCell style={{ backgroundColor: Colors.green, color: Colors.white, fontSize: '1.2em' }}>Redes Sociales</TableCell>
                      <TableCell style={{ backgroundColor: Colors.green, color: Colors.white, fontSize: '1.2em' }}>Códigos</TableCell>
                      <TableCell style={{ backgroundColor: Colors.green, color: Colors.white, fontSize: '1.2em' }}>Estado</TableCell>
                      <TableCell style={{ backgroundColor: Colors.green, color: Colors.white, fontSize: '1.2em' }}>Acciones</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {_postulantesAll.map((row, index) => (
                      <TableRow key={row.id} style={{ backgroundColor: row.estado === 'APROBADO' ? '#F1FFF0' : row.estado === 'RECHAZADO' ? '#FCE5E3' : Colors.white }}  >
                        <TableCell align="left">{index + 1}</TableCell>
                        <TableCell align="left">{moment(row.fecha_postulacion).format('DD/MM/YYYY HH:mm')}</TableCell>
                        <TableCell align="left">{row.tipo}</TableCell>
                        <TableCell align="left">{row.nickname}</TableCell>
                        <TableCell align="left">{row.representante}</TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="left">
                          {row.tipodoc}
                          <Divider flexItem={true} />
                          {row.rut}
                        </TableCell>
                        <TableCell align="left">


                          {row.equipo !== '' ?
                            <FichaEquipo equipoid={row.equipo} callback={props.callback} /> : null}

                        </TableCell>
                        <TableCell align="left">
                          {JSON.parse(row.rrss).twitter === true ? <> <TwitterIcon style={{ color: Colors.green, fontSize: "1.5em", marginRight: '2px' }} /> {JSON.parse(row.rrss).twitter_user}  <Divider flexItem={true} style={{ margin: "5px" }}></Divider></> : null}
                          {JSON.parse(row.rrss).facebook === true ? <>   <FacebookIcon style={{ color: Colors.green, fontSize: "1.5em", marginRight: '2px' }} /> {JSON.parse(row.rrss).facebook_user}  <Divider flexItem={true} style={{ margin: "5px" }}></Divider></> : null}
                          {JSON.parse(row.rrss).youtube === true ? <> <YouTubeIcon style={{ color: Colors.green, fontSize: "1.5em", marginRight: '2px' }} />{JSON.parse(row.rrss).youtube_user}  <Divider flexItem={true} style={{ margin: "5px" }}></Divider></> : null}
                          {JSON.parse(row.rrss).instagram === true ? <> <InstagramIcon style={{ color: Colors.green, fontSize: "1.5em", marginRight: '2px' }} />{JSON.parse(row.rrss).instagram_user} <Divider flexItem={true} style={{ margin: "5px" }}></Divider></> : null}
                          {JSON.parse(row.rrss).twitch === true ? <> <RedditIcon style={{ color: Colors.green, fontSize: "1.5em", marginRight: '2px' }} />{JSON.parse(row.rrss).twitch_user}  <Divider flexItem={true} style={{ margin: "5px" }}></Divider></> : null}
                          {JSON.parse(row.rrss).discord === true ? <> <PinterestIcon style={{ color: Colors.green, fontSize: "1.5em", marginRight: '2px' }} />{JSON.parse(row.rrss).discord_user}  <Divider flexItem={true} style={{ margin: "5px" }}></Divider></> : null}
                          {JSON.parse(row.rrss).others === true ? <> <ShareIcon style={{ color: Colors.green, fontSize: "1.5em", marginRight: '2px' }} />{JSON.parse(row.rrss).others_rrss}  <Divider flexItem={true} style={{ margin: "5px" }}></Divider></> : null}
                        </TableCell>
                        <TableCell align="left">
                          {JSON.parse(row.codes).idea1 !== undefined ? <>
                            {JSON.parse(row.codes).idea1 !== '' ? <> <img alt={''} src={QrIcon} style={{ color: Colors.green, fontSize: "1.5em", marginRight: '2px' }} /> {JSON.parse(row.codes).idea1}  <Divider flexItem={true} style={{ margin: "5px" }}></Divider></> : null}
                            {JSON.parse(row.codes).idea2 !== '' ? <> <img alt={''} src={QrIcon} style={{ color: Colors.green, fontSize: "1.5em", marginRight: '2px' }} /> {JSON.parse(row.codes).idea2}  <Divider flexItem={true} style={{ margin: "5px" }}></Divider></> : null}
                            {JSON.parse(row.codes).idea3 !== '' ? <> <img alt={''} src={QrIcon} style={{ color: Colors.green, fontSize: "1.5em", marginRight: '2px' }} /> {JSON.parse(row.codes).idea3}  <Divider flexItem={true} style={{ margin: "5px" }}></Divider></> : null}
                          </> : null}
                        </TableCell>
                        <TableCell align="left">{row.estado}</TableCell>
                        <TableCell align="center">


                          {row.estado === 'PENDIENTE' ?
                            <BotonGrillaOk
                              style={{ width: "auto" }}
                              fullwith={"false"}
                              variant="outlined"
                              onClick={() => handleCrea(row)}
                            >
                              Aprueba
                            </BotonGrillaOk> : null}


                          {row.estado === 'PENDIENTE' ?
                            <BotonGrillaNOk
                              style={{ width: "auto" }}
                              fullwith={"false"}
                              variant="outlined"
                              onClick={() => handleRechaza(row)}
                            >
                              Rechaza
                            </BotonGrillaNOk> : null}


                          {row.estado === 'APROBADO' ?
                            <BotonGrillaOk
                              style={{ width: "auto" }}
                              fullwith={"false"}
                              variant="outlined"
                              onClick={() => handleNotifica(row)}
                            >
                              Notificar
                            </BotonGrillaOk> : null}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={1}></Grid>
      </Grid>

      <Backloader
        open={_showbackdrop}
        desde={"Rainfluencers"}
        etapa={_etapa}
      ></Backloader>
    </form>
  );
}

export default Postulaciones;
