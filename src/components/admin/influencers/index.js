import React, { useState, useEffect, useRef } from "react";
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
import { TodosLosInfluencers } from '../../../services/usuarios';
import { WS_UPDATE_POSTULANTE } from '../../../services/postulantes/mutations';
import { WS_CREA_USUARIO } from '../../../services/usuarios/mutations'


function Influencers(props) {
  const mountedRef = useRef(true);
  const [_showbackdrop, setBackdrop] = useState(false);
  const [_usuariosAll, setAllUsuarios] = useState([]);
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
    setEtapa('Cargando Rainfluencers');
    let res = TodosLosInfluencers();
    res.then(ok => {

      let aux = []
      const itemes = ok.data.listUsuarios.items;
      itemes.forEach(element => {
        let nuevo_ele = {}
        nuevo_ele.id = element.id;
        nuevo_ele.email = element.correo;

        if (element.estado === '' || element.estado === null) {
          nuevo_ele.estado = 'SIN ESTADO';
        } else {
          nuevo_ele.estado = element.estado;
        }

        nuevo_ele._version = element._version;
        nuevo_ele.tipo = element.tipo;
        nuevo_ele.nickname = element.nickname;
        nuevo_ele.nombre = element.nombre;
        nuevo_ele.level = element.level;
        nuevo_ele.tipodoc = element.tipodoc;
        nuevo_ele.documento = element.documento;
  
        aux.push(nuevo_ele);
      })

      setAllUsuarios(aux.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1));
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
      objUsuario.documento = data.documento;
      objUsuario.tipo = data.tipo;
      objUsuario.estado = 'ACTIVO';
      objUsuario.level = 'PRINCIPIANTE';

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
                Rainfluencers
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
                Rainfluencers creados como usuario.
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
                      <TableCell style={{ backgroundColor: Colors.green, color: Colors.white, fontSize: '1.2em' }}>Tipo</TableCell>
                      <TableCell style={{ backgroundColor: Colors.green, color: Colors.white, fontSize: '1.2em' }}>Nickname</TableCell>
                      <TableCell style={{ backgroundColor: Colors.green, color: Colors.white, fontSize: '1.2em' }}>Nombre</TableCell>
                      <TableCell style={{ backgroundColor: Colors.green, color: Colors.white, fontSize: '1.2em' }}>Email</TableCell>
                      <TableCell style={{ backgroundColor: Colors.green, color: Colors.white, fontSize: '1.2em' }}>Estado</TableCell>
                      <TableCell style={{ backgroundColor: Colors.green, color: Colors.white, fontSize: '1.2em' }}>Level</TableCell>
                      <TableCell style={{ backgroundColor: Colors.green, color: Colors.white, fontSize: '1.2em' }}>Acciones</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {_usuariosAll.map((row, index) => (
                      <TableRow key={row.id} style={{ backgroundColor: row.estado === 'ACTIVO' ? '#F1FFF0' : row.estado === 'INACTIVO' ? '#FCE5E3' : Colors.white }}  >
                        <TableCell align="left">{index + 1}</TableCell>
                        <TableCell align="left">{row.tipo}</TableCell>
                        <TableCell align="left">{row.nickname}</TableCell>
                        <TableCell align="left">{row.nombre}</TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="left">{row.estado}</TableCell>
                        <TableCell align="left">{row.level}</TableCell>
                        <TableCell align="center">


                          {row.estado === 'INACTIVO' ?
                            <BotonGrillaOk
                              style={{ width: "auto" }}
                              fullwith={"false"}
                              variant="outlined"
                              onClick={() => handleCrea(row)}
                            >
                              Activar
                            </BotonGrillaOk> : null}


                          {row.estado === 'ACTIVO' ?
                            <BotonGrillaNOk
                              style={{ width: "auto" }}
                              fullwith={"false"}
                              variant="outlined"
                              onClick={() => handleRechaza(row)}
                            >
                              Desactivar
                            </BotonGrillaNOk> : null}


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

export default Influencers;
