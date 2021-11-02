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
} from "../../common/buttons";
import { Colors } from "../../common/colors";
import CloseIcon from "@material-ui/icons/Close";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import { TextForm } from "../../common/textbox";
import { useInput } from "../../../resources/hooks/input-hook";
import { PurpleRadio } from "../../common/radio";
import { makeStyles } from '@material-ui/core/styles';

function Contact(props) {
  const mountedRef = useRef(true);
  const [_showbackdrop, setBackdrop] = useState(false);
  const [_tipoplayer, setTipoPlayer] = useState("");
  const [_existeequipo, setExisteEquipo] = useState("NO");
  const [_muestra_n1, setMuestraN1] = useState(true);
  const [_equipos, setEquipos] = useState([]);

  const useStyles = makeStyles({
    icon: {
      color: Colors.green,
    },
  });

  const classes = useStyles();


  const {
    value: _nickname,
    bind: bindNickName,
    reset: resetNickName,
  } = useInput("");

  const { value: _name, bind: bindName, reset: resetName } = useInput("");
  const { value: _rut, bind: bindRut, reset: resetRut } = useInput("");
  const { value: _email, bind: bindEmail, reset: resetEmail } = useInput("");
  const { value: _equipo, bind: bindEquipo, reset: resetEquipo } = useInput("");

  const {
    value: _pocodeti,
    bind: bindPocoDeTi,
    reset: resetPocoDeTi,
  } = useInput("");

  const [_tipoDoc, setTipoDoc] = useState("RUT");

  const reset = async () => {
    resetNickName();
    resetName();
    resetRut();
    resetEmail();
    resetPocoDeTi();
    resetEquipo();
  }

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
      console.log(ok);
      setBackdrop(false);
    }).catch(err => {
      console.log(err);
      setBackdrop(false);
    });
  }

  useEffect(() => {
    reset();
    loadequipos();
    return () => {
      mountedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = async () => {
    props.navigation("hone");
  };

  const handleGetTipoPlayer = async (tipo) => {
    console.log(tipo);
    setMuestraN1(false);
    setTipoPlayer(tipo);
  };

  const handleChangeExisteEquipo = (event) => {
    setExisteEquipo(event.target.value);
  };

  const handleGetDatosContacto = async () => {
    let data = {};
    data.tipo = _tipoplayer;
    data.nick = _nickname;
    data.name = _name;
    data.tipodoc = _tipoDoc;
    data.doc = _rut;
    data.email = _email;
    data.mas = _pocodeti;
    data.equipo = _equipo;
    props.callback(data);
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
                  {...bindNickName}
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
                  {...bindName}
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
                  {...bindEmail}
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
                  {...bindPocoDeTi}
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
              <Grid item xs={12} md={12}>
                <BotonSiguiente
                  fullwith={"false"}
                  variant="outlined"
                  onClick={handleGetDatosContacto}
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
                    {...bindNickName}
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
              ) : (
                <Grid item xs={12} md={12}>


                  <TextForm select style={{ width: '100%' }}   {...bindEquipo}
                    SelectProps={{ native: true, classes: { icon: classes.icon } }}
                    InputProps={{ style: { fontSize: 16, color: Colors.black, fontFamily: Fuentes.controles, fontWeight: 800 } }}
                    InputLabelProps={{ style: { fontSize: 16, color: Colors.black, fontFamily: Fuentes.controles, fontWeight: 800 } }}
                    variant="outlined" label='Selecciona tu equipo' >
                    {_equipos.map(renderComboGraphQlEquipo)}
                  </TextForm>


                  <TextForm
                    required
                    type="text"
                    style={{
                      width: "100%",
                      marginTop: "5px",
                      marginLeft: "5px",
                      marginRight: "5px",
                    }}
                    {...bindNickName}
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
                    label={"Selecciona tu equipo"}
                  ></TextForm>


                </Grid>
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
                  {...bindName}
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
                  {...bindEmail}
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
                  {...bindPocoDeTi}
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
              <Grid item xs={12} md={12}>
                <BotonSiguiente
                  fullwith={"false"}
                  variant="outlined"
                  onClick={handleGetDatosContacto}
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
