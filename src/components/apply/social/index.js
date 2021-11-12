import React, { useState, useEffect, useRef } from "react";
import { sleep } from "../../../resources/functions";
import {
  Divider,
  Grid,
  Typography,
  IconButton,
  LinearProgress,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import Backloader from "../../common/backloader";
import { Fuentes } from "../../common/fonts";
import { BotonSiguiente, BotonAtras } from "../../common/buttons";
import { Colors } from "../../common/colors";
import CloseIcon from "@material-ui/icons/Close";
import { TextForm } from "../../common/textbox";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import ShareIcon from "@material-ui/icons/Share";

import RedditIcon from "@material-ui/icons/Reddit";
import PinterestIcon from "@material-ui/icons/Pinterest";

function Social(props) {
  const mountedRef = useRef(true);
  const [_showbackdrop, setBackdrop] = useState(false);
  const [_disabled_siguiente, setDisabledSiguiente] = useState(true);

  const [_redes, setRedes] = useState({
    facebook: false,
    twitter: false,
    instagram: false,
    youtube: false,
    others: false,
    discord: false,
    twitch: false,
  });

  const handleChangeCHK = (event) => {
    setRedes({ ..._redes, [event.target.name]: event.target.checked });
  };

  const [_usertwitter, setUserTwitter] = useState('');
  const [_userface, setUserFace] = useState('');
  const [_userinsta, setUserInsta] = useState('');
  const [_useryoutube, setUserYouTube] = useState('');
  const [_userdiscord, setUserDiscord] = useState('');
  const [_usertwich, setUserTwitch] = useState('');
  const [_userothers, setUserOtras] = useState('');

  const handleChangeUserTwitter = (e) => {
    setUserTwitter(e.target.value);
  }

  const handleChangeUserFace = (e) => {
    setUserFace(e.target.value);
  }

  const handleChangeUserInsta = (e) => {
    setUserInsta(e.target.value);
  }

  const handleChangeUserYouTube = (e) => {
    setUserYouTube(e.target.value);
  }

  const handleChangeUserDiscord = (e) => {
    setUserDiscord(e.target.value);
  }

  const handleChangeUserTwitch = (e) => {
    setUserTwitch(e.target.value);
  }

  const handleChangeUserOthers = (e) => {
    setUserOtras(e.target.value);
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const fade = async () => {
    setBackdrop(true);
    await sleep(1000);
    setBackdrop(false);
  };


  useEffect(() => {

    let cumple_face = false;
    let cumple_discord = false;
    let cumple_insta = false;
    let cumple_twitch = false;
    let cumple_twitter = false;
    let cumple_youtube = false;
    let cumple_others = false;

    if (_redes.facebook === true && _userface === '') {
      cumple_face = false
    } else {
      cumple_face = true
    }

    if (_redes.discord === true && _userdiscord === '') {
      cumple_discord = false
    } else {
      cumple_discord = true
    }

    if (_redes.instagram === true && _userinsta === '') {
      cumple_insta = false
    } else {
      cumple_insta = true
    }

    if (_redes.twitch === true && _usertwich === '') {
      cumple_twitch = false
    } else {
      cumple_twitch = true
    }

    if (_redes.twitter === true && _usertwitter === '') {
      cumple_twitter = false
    } else {
      cumple_twitter = true
    }

    if (_redes.youtube === true && _useryoutube === '') {
      cumple_youtube = false
    } else {
      cumple_youtube = true
    }

    if (_redes.others === true && _userothers === '') {
      cumple_others = false
    } else {
      cumple_others = true
    }

    if (cumple_face === true && cumple_insta === true && cumple_twitch === true && cumple_twitter === true && cumple_youtube === true && cumple_discord === true && cumple_others === true) {
      setDisabledSiguiente(false)
    } else {
      setDisabledSiguiente(true);
    }


  }, [_userdiscord, _userface, _userinsta, _userothers, _usertwich, _usertwitter, _useryoutube, _redes])

  useEffect(() => {
    fade();

    let borrador = props.data;
    if (props.data.facebook === undefined) {
      console.log(borrador);
      setDisabledSiguiente(true);
    } else {
      setRedes({
        facebook: borrador.facebook,
        twitter: borrador.twitter,
        instagram: borrador.instagram,
        youtube: borrador.youtube,
        others: borrador.others,
        discord: borrador.discord,
        twitch: borrador.twitch,
      })

      setUserFace(borrador.facebook_user);
      setUserTwitter(borrador.twitter_user);
      setUserTwitch(borrador.twitch_user);
      setUserYouTube(borrador.youtube_user);
      setUserInsta(borrador.instagram_user);
      setUserDiscord(borrador.discord_user);
      setUserOtras(borrador.others_rrss)
    }




    return () => {
      mountedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = async () => {
    props.navigation("home");
  };

  const handleAtras = async () => {
    props.navigation("signup");
  };

  const handleGetCodes = async () => {
    let data = {};
    data.twitter = _redes.twitter;
    data.twitter_user = _usertwitter;

    data.facebook = _redes.facebook;
    data.facebook_user = _userface;

    data.instagram = _redes.instagram;
    data.instagram_user = _userinsta;

    data.youtube = _redes.youtube;
    data.youtube_user = _useryoutube;

    data.discord = _redes.discord;
    data.discord_user = _userdiscord;

    data.twitch = _redes.twitch;
    data.twitch_user = _usertwich;

    data.others = _redes.others;
    data.others_rrss = _userothers;

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
        <Grid item xs={12} md={12}>
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
            <Grid item xs={12} style={{ textAlign: "left" }}>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  color: Colors.black,
                  fontWeight: 400,
                  fontSize: 16,
                }}
              >
                Tus redes sociales
              </Typography>
              <LinearProgress variant="determinate" value={66} />
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{ marginTop: "1em" }}>
            <Grid item xs={12} md={12}>
              <Divider light={true} style={{ marginTop: "5px", marginBottom: "5px" }}></Divider>
              <Typography
                style={{
                  fontFamily: Fuentes.principal,
                  color: Colors.black,
                  fontWeight: 400,
                  fontSize: 16,
                }}
              >
                Selecciona las redes sociales en las que te encuentras
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={
                      <FacebookIcon
                        style={{ color: Colors.lightpurple, fontSize: "1.5em" }}
                      />
                    }
                    checked={_redes.facebook}
                    checkedIcon={
                      <FacebookIcon
                        style={{ color: Colors.purple, fontSize: "1.5em" }}
                      />
                    }
                    name="facebook"
                    onChange={handleChangeCHK}
                  />
                }
                label={
                  <label
                    style={{
                      fontSize: "2em",
                      fontFamily: Fuentes.principal,
                      fontWeight: 800,
                      color: Colors.white,
                    }}
                  ></label>
                }
              />

              <FormControlLabel
                control={
                  <Checkbox
                    icon={
                      <TwitterIcon
                        style={{ color: Colors.lightpurple, fontSize: "1.5em" }}
                      />
                    }
                    checked={_redes.twitter}
                    checkedIcon={
                      <TwitterIcon
                        style={{ color: Colors.purple, fontSize: "1.5em" }}
                      />
                    }
                    name="twitter"
                    onChange={handleChangeCHK}
                  />
                }
                label={
                  <label
                    style={{
                      fontSize: "2em",
                      fontFamily: Fuentes.principal,
                      fontWeight: 800,
                      color: Colors.white,
                    }}
                  ></label>
                }
              />

              <FormControlLabel
                control={
                  <Checkbox
                    icon={
                      <InstagramIcon
                        style={{ color: Colors.lightpurple, fontSize: "1.5em" }}
                      />
                    }
                    checked={_redes.instagram}
                    checkedIcon={
                      <InstagramIcon
                        style={{ color: Colors.purple, fontSize: "1.5em" }}
                      />
                    }
                    name="instagram"
                    onChange={handleChangeCHK}
                  />
                }
                label={
                  <label
                    style={{
                      fontSize: "2em",
                      fontFamily: Fuentes.principal,
                      fontWeight: 800,
                      color: Colors.white,
                    }}
                  ></label>
                }
              />

              <FormControlLabel
                control={
                  <Checkbox
                    icon={
                      <YouTubeIcon
                        style={{ color: Colors.lightpurple, fontSize: "1.5em" }}
                      />
                    }
                    checked={_redes.youtube}
                    checkedIcon={
                      <YouTubeIcon
                        style={{ color: Colors.purple, fontSize: "1.5em" }}
                      />
                    }
                    name="youtube"
                    onChange={handleChangeCHK}
                  />
                }
                label={
                  <label
                    style={{
                      fontSize: "2em",
                      fontFamily: Fuentes.principal,
                      fontWeight: 800,
                      color: Colors.white,
                    }}
                  ></label>
                }
              />

              <FormControlLabel
                control={
                  <Checkbox
                    icon={
                      <RedditIcon
                        style={{ color: Colors.lightpurple, fontSize: "1.5em" }}
                      />
                    }
                    checked={_redes.discord}
                    checkedIcon={
                      <RedditIcon
                        style={{ color: Colors.purple, fontSize: "1.5em" }}
                      />
                    }
                    name="discord"
                    onChange={handleChangeCHK}
                  />
                }
                label={
                  <label
                    style={{
                      fontSize: "2em",
                      fontFamily: Fuentes.principal,
                      fontWeight: 800,
                      color: Colors.white,
                    }}
                  ></label>
                }
              />

              <FormControlLabel
                control={
                  <Checkbox
                    icon={
                      <PinterestIcon
                        style={{ color: Colors.lightpurple, fontSize: "1.5em" }}
                      />
                    }
                    checked={_redes.twitch}
                    checkedIcon={
                      <PinterestIcon
                        style={{ color: Colors.purple, fontSize: "1.5em" }}
                      />
                    }
                    name="twitch"
                    onChange={handleChangeCHK}
                  />
                }
                label={
                  <label
                    style={{
                      fontSize: "2em",
                      fontFamily: Fuentes.principal,
                      fontWeight: 800,
                      color: Colors.white,
                    }}
                  ></label>
                }
              />

              <FormControlLabel
                control={
                  <Checkbox
                    icon={
                      <ShareIcon
                        style={{ color: Colors.lightpurple, fontSize: "1.5em" }}
                      />
                    }
                    checked={_redes.others}
                    checkedIcon={
                      <ShareIcon
                        style={{ color: Colors.purple, fontSize: "1.5em" }}
                      />
                    }
                    name="others"
                    onChange={handleChangeCHK}
                  />
                }
                label={
                  <label
                    style={{
                      fontSize: "2em",
                      fontFamily: Fuentes.principal,
                      fontWeight: 800,
                      color: Colors.white,
                    }}
                  ></label>
                }
              />
            </Grid>

            {_redes.facebook === true || _redes.twitter === true || _redes.instagram === true || _redes.youtube === true || _redes.discord === true || _redes.twitch === true || _redes.others === true ?

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
                  Ingresa los usuarios ocupados en plataformas sociales
                </Typography>
              </Grid> : null
            }

            {_redes.facebook === true &&
              <Grid item xs={12} md={12}>
                <TextForm
                  required
                  type="text"
                  style={{
                    width: "100%",
                    marginTop: "0.5em",
                    marginLeft: "0.5em",
                    marginRight: "0.5em",
                  }}
                  value={_userface}
                  onChange={handleChangeUserFace}

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
                  label={"Facebook"}
                ></TextForm>
              </Grid>}

            {_redes.twitter === true &&
              <Grid item xs={12} md={12} style={{ textAlign: 'center' }}>
                <TextForm
                  required
                  type="text"
                  style={{
                    width: "100%",
                    marginTop: "0.5em",
                    marginLeft: "0.5em",
                    marginRight: "0.5em",
                  }}

                  value={_usertwitter}
                  onChange={handleChangeUserTwitter}

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
                  label={"Twitter"}
                ></TextForm>
              </Grid>}


            {_redes.instagram === true &&
              <Grid item xs={12} md={12}>
                <TextForm
                  required
                  type="text"
                  style={{
                    width: "100%",
                    marginTop: "0.5em",
                    marginLeft: "0.5em",
                    marginRight: "0.5em",
                  }}

                  value={_userinsta}
                  onChange={handleChangeUserInsta}

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
                  label={"Instagram"}
                ></TextForm>
              </Grid>}

            {_redes.youtube === true &&
              <Grid item xs={12} md={12}>
                <TextForm
                  required
                  type="text"
                  style={{
                    width: "100%",
                    marginTop: "0.5em",
                    marginLeft: "0.5em",
                    marginRight: "0.5em",
                  }}

                  value={_useryoutube}
                  onChange={handleChangeUserYouTube}


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
                  label={"Youtube"}
                ></TextForm>
              </Grid>}

            {_redes.discord === true &&
              <Grid item xs={12} md={12}>
                <TextForm
                  required
                  type="text"
                  style={{
                    width: "100%",
                    marginTop: "0.5em",
                    marginLeft: "0.5em",
                    marginRight: "0.5em",
                  }}

                  value={_userdiscord}
                  onChange={handleChangeUserDiscord}

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
                  label={"Discord"}
                ></TextForm>
              </Grid>}

            {_redes.twitch === true &&
              <Grid item xs={12} md={12}>
                <TextForm
                  required
                  type="text"
                  style={{
                    width: "100%",
                    marginTop: "0.5em",
                    marginLeft: "0.5em",
                    marginRight: "0.5em",
                  }}

                  value={_usertwich}
                  onChange={handleChangeUserTwitch}


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
                  label={"Twitch"}
                ></TextForm>
              </Grid>}

            {_redes.others === true &&
              <Grid item xs={12} md={12}>
                <TextForm
                  required
                  type="text"
                  style={{
                    width: "100%",
                    marginTop: "0.5em",
                    marginLeft: "0.5em",
                    marginRight: "0.5em",
                  }}

                  value={_userothers}
                  onChange={handleChangeUserOthers}

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
                  label={"Otras Plataformas"}
                  helperText={
                    "Ingresa la URL completa, si son varias, sepáralas por una coma"
                  }
                ></TextForm>
              </Grid>}

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
                onClick={handleGetCodes}
                disabled={_disabled_siguiente}
              >
                SIGUIENTE
              </BotonSiguiente>
            </Grid>
          </Grid>
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

export default Social;
