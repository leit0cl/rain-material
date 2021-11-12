import React, { useState, useEffect, useRef } from "react";
import { sleep } from "../../resources/functions";
import {
  Divider,
  Grid,
  Typography,
  IconButton,
  Chip,
  Menu,
  MenuList,
  MenuItem,
  ListItemIcon,
  Badge,

} from "@material-ui/core";
import Backloader from "../common/backloader";
import { Fuentes } from "../common/fonts";
import { BotonSiguiente } from "../common/buttons";
import { Colors } from "../common/colors";
import MenuIcon from "@material-ui/icons/Menu";
import avatar from "../common/grafica/avatar.svg";
import { PendientesDeRevisar } from "../../services/postulantes";
import { UsuariosActivos } from '../../services/usuarios';

import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function Admin(props) {
  const mountedRef = useRef(true);
  const [_showbackdrop, setBackdrop] = useState(false);
  const [_nropendientes, setPendientes] = useState(0);
  const [_nroactivos, setActivos] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const inicia = async () => {
    setBackdrop(true);


    let res = PendientesDeRevisar();
    res.then(ok => {
      let vector = [];
      vector = ok.data.listPostulantes.items;
      const numero_items = vector.length;
      setPendientes(numero_items);
    }).catch(err => {
      setPendientes(0);
      console.log(err);
    });


    let resx = UsuariosActivos();
    resx.then(ok => {
      let vector = [];
      vector = ok.data.listUsuarios.items;
      const numero_items = vector.length;
      setActivos(numero_items);
    }).catch(err => {
      setActivos(0);
      console.log(err);
    });

    await sleep(1000);
    setBackdrop(false);
  };

  useEffect(() => {
    inicia();
    return () => {
      mountedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handlePostulaciones = async () => {
    props.navigation("postulaciones")
  };

  const handleInfluencers = async () => {
    props.navigation("influencers")
  };

  const handleHome = async () => {
    setAnchorEl(null);
    props.navigation('home');
  }


  const handleAlertas = async () => {
    setAnchorEl(null);
    props.navigation('notificaciones');
  }


  const handleProfile = async () => {
    setAnchorEl(null);
    props.navigation('profile');
  }


  const handleSalir = async () => {
    setAnchorEl(null);
    props.navigation('salir');
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
              <IconButton onClick={handleClick}>
                <MenuIcon
                  style={{ color: Colors.purple, fontSize: "2em" }}
                ></MenuIcon>
              </IconButton>



              <Menu style={{ marginTop: '1vh', borderRadius: '15px', zIndex: 1000000 }}
                id="simple-menu"
                anchorEl={anchorEl}
                elevation={5}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                keepMounted={false}
              >
                {props.usuario.perfil && props.usuario.perfil !== 'undefined' && props.usuario.perfil === 'ADM' ?
                  <MenuList>
                    <MenuItem onClick={() => handleHome()}>
                      <ListItemIcon style={{ width: '280px', padding: '1em', borderRadius: '15px' }}>
                        <HomeIcon style={{ color: Colors.green }} /><span style={{ marginLeft: '1em', color: Colors.green, fontWeight: 800, fontSize: '1em', fontFamily: Fuentes.principal }}>{'HOME'}</span>
                      </ListItemIcon>
                    </MenuItem>
                    <MenuItem onClick={() => handleAlertas()}>
                      <ListItemIcon style={{ width: '280px', padding: '1em', borderRadius: '15px' }}>
                        <Badge badgeContent={props.notificacionesPendientes ? props.notificacionesPendientes : 0} color="primary">
                          <NotificationsIcon style={{ color: Colors.green }} />
                        </Badge>
                        <span style={{ marginLeft: '1em', color: Colors.green, fontWeight: 800, fontSize: '1em', fontFamily: Fuentes.principal }}>{'NOTIFICACIONES'}</span>
                      </ListItemIcon>
                    </MenuItem>

                    <MenuItem onClick={() => handleProfile()}>
                      <ListItemIcon style={{ width: '280px', padding: '1em', borderRadius: '15px' }}>
                        <AccountCircleIcon style={{ color: Colors.green }} /><span style={{ marginLeft: '1em', color: Colors.green, fontWeight: 800, fontSize: '1em', fontFamily: Fuentes.principal }}>{'PERFIL'}</span>
                      </ListItemIcon>
                    </MenuItem>
                    <MenuItem onClick={() => handleSalir()}>
                      <ListItemIcon style={{ width: '280px', padding: '1em', borderRadius: '15px' }}>
                        <ExitToAppIcon style={{ color: Colors.green }} /><span style={{ marginLeft: '1em', color: Colors.green, fontWeight: 800, fontSize: '1em', fontFamily: Fuentes.principal }}>{'SALIR'}</span>
                      </ListItemIcon>
                    </MenuItem>
                  </MenuList> :
                  <MenuList>
                    <MenuItem onClick={() => handleHome()}>
                      <ListItemIcon style={{ width: '280px', padding: '1em', borderRadius: '15px' }}>
                        <HomeIcon style={{ color: Colors.green }} /><span style={{ marginLeft: '1em', color: Colors.green, fontWeight: 800, fontSize: '1em', fontFamily: Fuentes.principal }}>{'HOME'}</span>
                      </ListItemIcon>
                    </MenuItem>
                    <MenuItem onClick={() => handleAlertas()}>
                      <ListItemIcon style={{ width: '280px', padding: '1em', borderRadius: '15px' }}>
                        <Badge badgeContent={props.notificacionesPendientes ? props.notificacionesPendientes : 0} color="primary">
                          <NotificationsIcon style={{ color: Colors.green }} />
                        </Badge>
                        <span style={{ marginLeft: '1em', color: Colors.green, fontWeight: 800, fontSize: '1em', fontFamily: Fuentes.principal }}>{'NOTIFICACIONES'}</span>
                      </ListItemIcon>
                    </MenuItem>
                    <MenuItem onClick={() => handleProfile()}>
                      <ListItemIcon style={{ width: '280px', padding: '1em', borderRadius: '15px' }}>
                        <AccountCircleIcon style={{ color: Colors.green }} /><span style={{ marginLeft: '1em', color: Colors.green, fontWeight: 800, fontSize: '1em', fontFamily: Fuentes.principal }}>{'PERFIL'}</span>
                      </ListItemIcon>
                    </MenuItem>
                    <MenuItem onClick={() => handleSalir()}>
                      <ListItemIcon style={{ width: '280px', padding: '1em', borderRadius: '15px' }}>
                        <ExitToAppIcon style={{ color: Colors.green }} /><span style={{ marginLeft: '1em', color: Colors.green, fontWeight: 800, fontSize: '1em', fontFamily: Fuentes.principal }}>{'SALIR'}</span>
                      </ListItemIcon>
                    </MenuItem>
                  </MenuList>

                }
              </Menu>


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
                {props.usuario.nombre}
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
                label={props.usuario.level}
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
                  color: Colors.red,
                  fontWeight: 800,
                  fontSize: 64,
                }}
              >
                {_nroactivos}
              </Typography>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  color: Colors.purple,
                  fontWeight: 400,
                  fontSize: 16,
                }}
              >
                {_nroactivos > 1 ? 'Rainfluencers activos' : 'Rainfluencer activo'}
              </Typography>

            </Grid>

            <Grid item xs={12} md={12}>
              <BotonSiguiente
                style={{ width: "auto" }}
                disabled={false}
                fullwith={"false"}
                variant="outlined"
                onClick={handleInfluencers}
              >
                Rainfluencers
              </BotonSiguiente>
            </Grid>


            <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
              <Divider light={true} style={{ margin: "1em" }}></Divider>
            </Grid>

            <Grid item xs={12} md={12} style={{ textAlign: "center" }}>


              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  color: Colors.red,
                  fontWeight: 800,
                  fontSize: 64,
                }}
              >
                {_nropendientes}
              </Typography>


              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  color: Colors.purple,
                  fontWeight: 400,
                  fontSize: 16,
                }}
              >
                {_nropendientes > 1 ? 'Postulaciones sin revisar' : 'Postulación sin revisar'}
              </Typography>

            </Grid>

            <Grid item xs={12} md={12}>
              <BotonSiguiente
                style={{ width: "auto" }}
                disabled={false}
                fullwith={"false"}
                variant="outlined"
                onClick={handlePostulaciones}
              >
                postulaciones
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

export default Admin;
