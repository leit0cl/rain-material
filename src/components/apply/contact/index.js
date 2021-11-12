import React, { useState, useEffect, useRef } from "react";
import { renderComboGraphQlEquipo } from "../../../resources/functions";
import { TodosLosEquipos } from '../../../services/equipos';
import {
  Divider,
  Grid,
  Typography,
  IconButton,
  LinearProgress,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import Backloader from "../../common/backloader";
import { Fuentes } from "../../common/fonts";
import {
  SinglePlayer,
  DoublePlayer,
  BotonSiguiente,
  BotonAtras
} from "../../common/buttons";
import { Colors } from "../../common/colors";
import CloseIcon from "@material-ui/icons/Close";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import { TextForm } from "../../common/textbox";
import { PurpleRadio } from "../../common/radio";
import { makeStyles } from '@material-ui/core/styles';

function Contact(props) {
  const mountedRef = useRef(true);
  const [_showbackdrop, setBackdrop] = useState(false);
  const [_tipoplayer, setTipoPlayer] = useState("");
  const [_existeequipo, setExisteEquipo] = useState("NO");
  const [_muestra_n1, setMuestraN1] = useState(true);
  const [_equipos, setEquipos] = useState([]);
  const [_nombre_repre, setNombreRepre] = useState("");
  const [_disabledsiguientesingle, setDisabledSiguienteSingle] = useState(true);
  const [_disabledsiguienteequipo, setDisabledSiguienteEquipo] = useState(true);

  const useStyles = makeStyles({
    icon: {
      color: Colors.green,
    },
  });

  const classes = useStyles();

  const [_equipo, setEquipo] = useState("");
  const [_nickname, setNickName] = useState('');
  const [_name, setName] = useState('');
  const [_rut, setRut] = useState('');
  const [_email, setEmail] = useState('');
  const [_pocodeti, setPocoDeti] = useState('');
  const [_tipoDoc, setTipoDoc] = useState("RUT");



  const handleChangeTipoDoc = (event) => {
    setTipoDoc(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };


  const loadequipos = async () => {
    setBackdrop(true);
    let res = TodosLosEquipos();
    res.then(ok => {
      setEquipos(ok.data.listEquipos.items);
      setBackdrop(false);
    }).catch(err => {
      console.log(err);
      setBackdrop(false);
    });
  }



  useEffect(() => {



    let cumple_unpocodeti = false;
    let cumple_equipo = false;
    let cumple_name = false;
    let cumple_email = false;

    if (_existeequipo === 'NO') {


      if (_pocodeti === '') {
        cumple_unpocodeti = false
      } else {
        cumple_unpocodeti = true
      }

      if ((_nickname === '') && (_equipo === '')) {
        cumple_equipo = false
      } else {
        cumple_equipo = true
      }

      if ((_nombre_repre === '') && (_name === '')) {
        cumple_name = false
      } else {
        cumple_name = true
      }

      if (_email === '') {
        cumple_email = false
      } else {
        cumple_email = true
      }

      if (cumple_email === true && cumple_name === true && cumple_equipo === true && cumple_unpocodeti === true) {
        setDisabledSiguienteEquipo(false);
      } else {
        setDisabledSiguienteEquipo(true);
      }
    } else {


      if (_pocodeti === '') {
        cumple_unpocodeti = false
      } else {
        cumple_unpocodeti = true
      }

      if ((_nickname === '') && (_equipo === '')) {
        cumple_equipo = false
      } else {
        cumple_equipo = true
      }

      if ((_nombre_repre === '') && (_name === '')) {
        cumple_name = false
      } else {
        cumple_name = true
      }

      if (_email === '') {
        cumple_email = false
      } else {
        cumple_email = true
      }

      if (cumple_email === true && cumple_name === true && cumple_equipo === true && cumple_unpocodeti === true) {
        setDisabledSiguienteEquipo(false);
      } else {
        setDisabledSiguienteEquipo(true);
      }
    }



  }, [_name, _equipo, _nombre_repre, _email, _existeequipo, _pocodeti, _nickname])




  useEffect(() => {
    let cumple_unpocodeti = false;
    let cumple_nick = false;
    let cumple_name = false;
    let cumple_rut = false;
    let cumple_email = false;

    if (_pocodeti === '') {
      cumple_unpocodeti = false
    } else {
      cumple_unpocodeti = true
    }

    if (_nickname === '') {
      cumple_nick = false
    } else {
      cumple_nick = true
    }

    if (_name === '') {
      cumple_name = false
    } else {
      cumple_name = true
    }

    if (_rut === '') {
      cumple_rut = false
    } else {
      cumple_rut = true
    }

    if (_email === '') {
      cumple_email = false
    } else {
      cumple_email = true
    }

    if (cumple_email === true && cumple_name === true && cumple_nick === true && cumple_rut === true && cumple_unpocodeti === true) {
      setDisabledSiguienteSingle(false);
    } else {
      setDisabledSiguienteSingle(true);
    }


  }, [_nickname, _name, _rut, _email, _tipoDoc, _pocodeti])

  useEffect(() => {
    loadequipos();
    let borrador = props.data;
    if (borrador.tipo === undefined) {
      console.log(borrador);
    } else {
      setTipoPlayer(borrador.tipo);
      if (borrador.tipo !== '') {
        setMuestraN1(false);
        setNickName(borrador.nick)
        setName(borrador.name);
        setRut(borrador.doc);
        setTipoDoc(borrador.tipodoc);
        setEmail(borrador.email);
        setPocoDeti(borrador.mas)
        if (borrador.existe === true) {
          setExisteEquipo('SI')
        } else {
          setExisteEquipo('NO')
        }
      }
    }

    return () => {
      mountedRef.current = false;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = async () => {
    props.navigation("home");
  };

  const handleGetTipoPlayer = async (tipo) => {
    setMuestraN1(false);
    setTipoPlayer(tipo);
  };

  const handleChangeExisteEquipo = (event) => {
    setExisteEquipo(event.target.value);
  };

  const handleGetDatosContacto = async () => {
    let data = {};
    data.tipo = _tipoplayer;
    if (_tipoplayer === 'MULTI') {
      if (_existeequipo === 'NO') {
        data.equipo = _equipo;
        data.nick = _nickname;
        data.name = _name;
        data.tipodoc = '';
        data.doc = '';
        data.email = _email;
        data.mas = _pocodeti;
        data.existe = false;
      } else {
        data.equipo = _equipo;
        data.nick = _nickname;
        data.name = _nombre_repre;
        data.tipodoc = '';
        data.doc = '';
        data.email = _email;
        data.mas = _pocodeti;
        data.existe = true;
      }
    } else {
      data.tipo = _tipoplayer;
      data.nick = _nickname;
      data.name = _name;
      data.tipodoc = _tipoDoc;
      data.doc = _rut;
      data.email = _email;
      data.mas = _pocodeti;
      data.equipo = '';
      data.existe = false;
    }

    props.callback(data);
  };

  const handleAtras = async () => {
    setTipoPlayer('');
    setMuestraN1(true);
  };


  const handleChangeEquipo = (e) => {
    let arreglo = JSON.parse(e.target.value);
    setEquipo(arreglo.id);
    setNombreRepre(arreglo.nombre_repre);
  }

  const handleChangeNickName = (e) => {
    setNickName(e.target.value);
  }

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangeRut = (e) => {
    setRut(e.target.value);
  }

  const handleChangePocoDeTi = (e) => {
    setPocoDeti(e.target.value);
  }


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
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={12} style={{ textAlign: "left", top: 0 }}>
            <Typography
              style={{
                fontFamily: Fuentes.principal,
                color: Colors.black,
                fontWeight: 400,
                fontSize: 16,
              }}
            >
              Información de contacto
            </Typography>
            <LinearProgress variant="determinate" value={25} />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: "2em" }}>

          {_muestra_n1 ? <>
            <Grid item xs={12} md={12}>
              <Divider light={true} style={{ margin: "1em" }}></Divider>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  color: Colors.black,
                  fontWeight: 400,
                  fontSize: 16,
                }}
              >
                ¿Qué tipo de Rainfluencer eres?
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <SinglePlayer onClick={() => handleGetTipoPlayer("SINGLE")}>
                {"Singleplayer"}{" "}
                <VideogameAssetIcon style={{ marginLeft: "5px" }} />
              </SinglePlayer>
              <Divider flexItem={true} style={{ margin: "5px" }}></Divider>
              <label
                style={{ fontWeight: 400, color: Colors.green, fontSize: 14 }}
              >
                solo yo
              </label>
            </Grid>
            <Grid item xs={12} md={6}>
              <DoublePlayer onClick={() => handleGetTipoPlayer("MULTI")}>
                {"Multiplayer "}
                <VideogameAssetIcon style={{ marginLeft: "5px" }} />
                <VideogameAssetIcon />
              </DoublePlayer>
              <Divider flexItem={true} style={{ margin: "5px" }}></Divider>
              <label
                style={{ fontWeight: 400, color: Colors.green, fontSize: 14 }}
              >
                somos un equipo
              </label>
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider light={true} style={{ margin: "1em" }}></Divider>
            </Grid>
          </> : null}

          {_tipoplayer === "SINGLE" && (
            <>
              <Grid item xs={12} md={12}>
                <TextForm
                  required
                  type="text"
                  style={{
                    width: "100%",
                    marginTop: "5px",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}

                  value={_nickname}
                  onChange={handleChangeNickName}

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
                  label={"Nickname / Apodo"}
                ></TextForm>
              </Grid>

              <Grid item xs={12} md={12}>
                <TextForm
                  required
                  type="text"
                  style={{
                    width: "100%",
                    marginTop: "5px",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}

                  value={_name}
                  onChange={handleChangeName}

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
                  label={"Nombre completo "}
                ></TextForm>
              </Grid>

              <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    <Typography
                      style={{
                        fontFamily: Fuentes.principal,
                        color: Colors.green,
                        fontWeight: 600,
                        fontSize: 16,
                      }}
                    >
                      Tipo de documento
                    </Typography>
                  </FormLabel>
                  <RadioGroup
                    aria-label="quiz"
                    name="quiz"
                    value={_tipoDoc}
                    onChange={handleChangeTipoDoc}
                    style={{
                      marginTop: "1em",
                      color: Colors.green,
                    }}
                  >
                    <div>
                      <FormControlLabel
                        value="RUT"
                        control={<PurpleRadio />}
                        label="RUT"
                      />
                      <FormControlLabel
                        value="PASAPORTE"
                        control={<PurpleRadio />}
                        label="Pasaporte"
                      />
                      <FormControlLabel
                        value="OTRO"
                        control={<PurpleRadio />}
                        label="Otro"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={12}>
                <TextForm
                  required
                  type="text"
                  style={{
                    width: "100%",
                    marginTop: "5px",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}

                  value={_rut}
                  onChange={handleChangeRut}

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
                  label={"Ingresa tu " + _tipoDoc}
                ></TextForm>
              </Grid>

              <Grid item xs={12} md={12}>
                <TextForm
                  required
                  type="text"
                  style={{
                    width: "100%",
                    marginTop: "5px",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}
                  value={_email}
                  onChange={handleChangeEmail}

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
                  label={"E-mail"}
                  helperText={"Correo con el que ingresarás a la plataforma"}
                ></TextForm>
              </Grid>

              <Grid item xs={12} md={12}>
                <TextForm
                  required
                  multiline
                  rows={3}
                  style={{
                    width: "100%",
                    marginTop: "5px",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}

                  value={_pocodeti}
                  onChange={handleChangePocoDeTi}

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
                  label={"Cuéntanos un poco de ti"}
                ></TextForm>
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
                  fullwith={"false"}
                  variant="outlined"
                  onClick={handleGetDatosContacto}
                  disabled={_disabledsiguientesingle}
                >
                  SIGUIENTE
                </BotonSiguiente>
              </Grid>
            </>
          )}

          {_tipoplayer === "MULTI" && (
            <>
              <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    <Typography
                      style={{
                        fontFamily: Fuentes.principal,
                        color: Colors.green,
                        fontWeight: 600,
                        fontSize: 16,
                      }}
                    >
                      ¿Ya existe el equipo en esta plataforma?
                    </Typography>
                  </FormLabel>
                  <RadioGroup
                    aria-label="quiz"
                    name="quiz"
                    value={_existeequipo}
                    onChange={handleChangeExisteEquipo}
                    style={{
                      marginTop: "1em",
                      color: Colors.green,
                    }}
                  >
                    <div>
                      <FormControlLabel
                        value="NO"
                        control={<PurpleRadio />}
                        label="Creo que no"
                      />
                      <FormControlLabel
                        value="SI"
                        control={<PurpleRadio />}
                        label="Sí"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </Grid>

              {_existeequipo === "NO" ? (
                <>
                  <Grid item xs={12} md={12}>
                    <TextForm
                      required
                      type="text"
                      style={{
                        width: "100%",
                        marginTop: "5px",
                        marginLeft: "5px",
                        marginRight: "5px",
                      }}

                      value={_nickname}
                      onChange={handleChangeNickName}

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
                      label={"Nombre del grupo / equipo"}
                    ></TextForm>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextForm
                      required
                      type="text"
                      style={{
                        width: "100%",
                        marginTop: "5px",
                        marginLeft: "5px",
                        marginRight: "5px",
                      }}
                      value={_name}
                      onChange={handleChangeName}

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
                      label={"Nombre del representante "}
                    ></TextForm>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={12} md={12}>


                    <TextForm select style={{ width: '100%' }} onChange={handleChangeEquipo}
                      SelectProps={{ native: true, classes: { icon: classes.icon } }}
                      InputProps={{ style: { fontSize: 16, color: Colors.black, fontFamily: Fuentes.controles, fontWeight: 800 } }}
                      InputLabelProps={{ style: { fontSize: 16, color: Colors.green, fontFamily: Fuentes.controles, fontWeight: 800 } }}
                      variant="outlined" label='Selecciona tu equipo' >
                      <option key={''} value={''}>{''}</option>
                      {_equipos.map(renderComboGraphQlEquipo)}
                    </TextForm>



                  </Grid>

                  <Grid item xs={12} md={12}>
                    <TextForm
                      required
                      type="text"
                      style={{
                        width: "100%",
                        marginTop: "5px",
                        marginLeft: "5px",
                        marginRight: "5px",
                      }}
                      value={_nombre_repre}
                      disabled
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
                      label={"Nombre del representante "}
                    ></TextForm>
                  </Grid>
                </>
              )}



              <Grid item xs={12} md={12}>
                <TextForm
                  required
                  type="text"
                  style={{
                    width: "100%",
                    marginTop: "5px",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}


                  value={_email}
                  onChange={handleChangeEmail}

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
                  label={"E-mail"}
                  helperText={"Correo con el que ingresarás a la plataforma"}
                ></TextForm>
              </Grid>

              <Grid item xs={12} md={12}>
                <TextForm
                  required
                  multiline
                  rows={4}
                  style={{
                    width: "100%",
                    marginTop: "5px",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}

                  value={_pocodeti}
                  onChange={handleChangePocoDeTi}

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
                  label={"Cuéntanos un poco de este grupo"}
                ></TextForm>
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
                  fullwith={"false"}
                  variant="outlined"
                  onClick={handleGetDatosContacto}
                  disabled={_disabledsiguienteequipo}
                >
                  SIGUIENTE
                </BotonSiguiente>
              </Grid>
            </>
          )}
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

export default Contact;
