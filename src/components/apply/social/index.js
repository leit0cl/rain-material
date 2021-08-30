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
import { useInput } from "../../../resources/hooks/input-hook";

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

  const {
    value: _usertwitter,
    bind: bindUserTwitter,
    reset: resetUserTwitter,
  } = useInput("");

  const {
    value: _userface,
    bind: bindUserFace,
    reset: resetUserFace,
  } = useInput("");

  const {
    value: _userinsta,
    bind: bindInstagram,
    reset: resetInsta,
  } = useInput("");

  const {
    value: _useryoutube,
    bind: bindYouTube,
    reset: resetYouTube,
  } = useInput("");

  const {
    value: _userdiscord,
    bind: bindDiscord,
    reset: resetDiscord,
  } = useInput("");

  const {
    value: _usertwich,
    bind: bindTwich,
    reset: resettwich,
  } = useInput("");

  const { value: _otras, bind: bindOtras, reset: resetOtras } = useInput("");

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
    resetform();
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

    data.instagram = _redes.twitter;
    data.instagram_user = _userinsta;

    data.youtube = _redes.youtube;
    data.youtube_user = _useryoutube;

    data.discord = _redes.discord;
    data.discord_user = _userdiscord;

    data.twitch = _redes.twitch;
    data.twitch_user = _usertwich;

    data.others = _redes.others;
    data.others_rrss = _otras;

    props.callback(data);
  };

  const resetform = async () => {
    resetOtras();
    resetUserTwitter();
    resetUserFace();
    resetInsta();
    resetYouTube();
    resetDiscord();
    resettwich();
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
          <Grid container spacing={2} style={{ marginTop: "2em" }}>
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
                Selecciona las redes sociales en las que te encuentras
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={
                      <FacebookIcon
                        style={{ color: Colors.lightpurple, fontSize: "3em" }}
                      />
                    }
                    checked={_redes.facebook}
                    checkedIcon={
                      <FacebookIcon
                        style={{ color: Colors.purple, fontSize: "3em" }}
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
                        style={{ color: Colors.lightpurple, fontSize: "3em" }}
                      />
                    }
                    checked={_redes.twitter}
                    checkedIcon={
                      <TwitterIcon
                        style={{ color: Colors.purple, fontSize: "3em" }}
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
                        style={{ color: Colors.lightpurple, fontSize: "3em" }}
                      />
                    }
                    checked={_redes.instagram}
                    checkedIcon={
                      <InstagramIcon
                        style={{ color: Colors.purple, fontSize: "3em" }}
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
                        style={{ color: Colors.lightpurple, fontSize: "3em" }}
                      />
                    }
                    checked={_redes.youtube}
                    checkedIcon={
                      <YouTubeIcon
                        style={{ color: Colors.purple, fontSize: "3em" }}
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
                        style={{ color: Colors.lightpurple, fontSize: "3em" }}
                      />
                    }
                    checked={_redes.discord}
                    checkedIcon={
                      <RedditIcon
                        style={{ color: Colors.purple, fontSize: "3em" }}
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
                        style={{ color: Colors.lightpurple, fontSize: "3em" }}
                      />
                    }
                    checked={_redes.twitch}
                    checkedIcon={
                      <PinterestIcon
                        style={{ color: Colors.purple, fontSize: "3em" }}
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
                        style={{ color: Colors.lightpurple, fontSize: "3em" }}
                      />
                    }
                    checked={_redes.otros}
                    checkedIcon={
                      <ShareIcon
                        style={{ color: Colors.purple, fontSize: "3em" }}
                      />
                    }
                    name="otros"
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
            </Grid>

            <Grid item xs={12} md={12}>
              <TextForm
                required
                type="text"
                style={{
                  width: "50%",
                  marginTop: "1em",
                  marginLeft: "25%",
                  marginRight: "25%",
                }}
                {...bindUserTwitter}
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
            </Grid>

            <Grid item xs={12} md={12}>
              <TextForm
                required
                type="text"
                style={{
                  width: "50%",
                  marginTop: "1em",
                  marginLeft: "25%",
                  marginRight: "25%",
                }}
                {...bindUserFace}
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
            </Grid>

            <Grid item xs={12} md={12}>
              <TextForm
                required
                type="text"
                style={{
                  width: "50%",
                  marginTop: "1em",
                  marginLeft: "25%",
                  marginRight: "25%",
                }}
                {...bindInstagram}
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
            </Grid>

            <Grid item xs={12} md={12}>
              <TextForm
                required
                type="text"
                style={{
                  width: "50%",
                  marginTop: "1em",
                  marginLeft: "25%",
                  marginRight: "25%",
                }}
                {...bindYouTube}
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
            </Grid>

            <Grid item xs={12} md={12}>
              <TextForm
                required
                type="text"
                style={{
                  width: "50%",
                  marginTop: "1em",
                  marginLeft: "25%",
                  marginRight: "25%",
                }}
                {...bindDiscord}
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
            </Grid>

            <Grid item xs={12} md={12}>
              <TextForm
                required
                type="text"
                style={{
                  width: "50%",
                  marginTop: "1em",
                  marginLeft: "25%",
                  marginRight: "25%",
                }}
                {...bindTwich}
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
            </Grid>

            <Grid item xs={12} md={12}>
              <TextForm
                required
                type="text"
                style={{
                  width: "50%",
                  marginTop: "1em",
                  marginLeft: "25%",
                  marginRight: "25%",
                }}
                {...bindOtras}
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
                onClick={handleGetCodes}
              >
                SIGUIENTE
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

export default Social;
