import React from 'react';
import { Grid } from '@material-ui/core';
import { Colors } from "../../../src/components/common/colors";
import { Fuentes } from "../../../src/components/common/fonts";

const emailEstilos = {
    color: Colors.white,
    fontFamily: Fuentes.controles,
    backgroundColor: Colors.lightpurple
}

function EmailBienvenida(props) {
    return (
        <Grid container spacing={2} style={emailEstilos}>
            <Grid item xs={12} style={{
                paddingBottom: 'calc(16px + 0.5vw)', paddingTop: 'calc(16px + 0.5vw)', marginTop: '0.5vw', marginLeft: 'auto', marginRight: 'auto'
            }}>
                <img src={'https://rainbowinfluencers.s3.amazonaws.com/img/logo_rainfluencers.png'} alt={''}></img>
            </Grid>
            <Grid item className="cloud" style={{ backgroundColor: Colors.black }}>
                <Grid item xs={6} style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
                    <img className="floatingspace" src={'https://rainbowinfluencers.s3.amazonaws.com/img/maracuya.png'} alt="" border="0" />
                </Grid>
                <Grid item xs={6} style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
                    <img className="floatingspacekey" src={'https://rainbowinfluencers.s3.amazonaws.com/img/llave.png'} alt="" style={{ width: '72px' }} border="0" />
                </Grid>
            </Grid>

            <Grid item xs={12} style={{
                paddingBottom: 'calc(16px + 0.5vw)', paddingTop: 'calc(16px + 0.5vw)', color: Colors.white, marginTop: '1vw', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'
            }}>
                <h1 style={{ fontFamily: Fuentes.titulo }}>{'Bienvenido ' + props.destinatario.nombre}!</h1>
                <h4 style={{ fontFamily: Fuentes.titulo }}>Te damos la bienvenida a la familia de #rainfluencers!</h4>
                <div style={{ backgroundColor: Colors.pink, width: '100%', borderRadius: '25px', paddingTop: '20px', paddingBottom: '20px', marginBottom: '20px', marginTop: '20px' }}>
                    <h5 style={{ fontFamily: Fuentes.controles }}>Para acceder a tu plataforma de atención tu usuario es : </h5>
                    <h3>{props.destinatario.email}</h3>
                    <h5 style={{ fontFamily: Fuentes.controles }}>La contraseña inicial es : </h5>
                    <h3>{props.destinatario.password}</h3>
                </div>
            </Grid>

            <Grid item xs={12} md={4} style={{
                paddingBottom: 'calc(16px + 0.5vw)', paddingTop: 'calc(16px + 0.5vw)', marginTop: '0vw', marginLeft: 'auto', marginRight: 'auto'
            }}>
                <label style={{ fontFamily: Fuentes.controles, color: Colors.white, marginRight: '10px', fontSize: 'calc(10px + 0.3vw)' }} >{'Síguenos '}</label>
                <div className="botones-rrss" size={'lg'} type="button"><img style={{}} src={'https://rainbowinfluencers.s3.amazonaws.com/img/instagram.svg'} alt={''}></img> </div>
                <div className="botones-rrss" size={'lg'} type="button"><img style={{}} src={'https://rainbowinfluencers.s3.amazonaws.com/img/twitter.svg'} alt={''}></img> </div>
                <div className="botones-rrss" size={'lg'} type="button"><img style={{}} src={'https://rainbowinfluencers.s3.amazonaws.com/img/facebook.svg'} alt={''}></img> </div>
            </Grid>
            <Grid item xs={12} md={4} style={{
                paddingBottom: 'calc(16px + 0.5vw)', paddingTop: 'calc(16px + 0.5vw)', marginTop: '0vw', marginLeft: 'auto', marginRight: 'auto'
            }}>
            </Grid>
            <Grid item xs={12} md={4} style={{
                paddingBottom: 'calc(16px + 0.5vw)', paddingTop: 'calc(16px + 0.5vw)', marginTop: '0vw', marginLeft: 'auto', marginRight: 'auto'
            }}>
                <a href="https://www.rainbowenergy.cl" target="_blank" rel="noreferrer"><img
                    src="https://rainbowinfluencers.s3.amazonaws.com/img/pack.png" width="82px" height="82px"
                    border="0" alt="" align="middle" style={{ display: 'block' }} /></a>
            </Grid>
        </Grid>
    );
}
export default EmailBienvenida;