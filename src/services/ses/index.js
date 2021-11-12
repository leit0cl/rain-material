import awsSesMail from 'aws-ses-mail';
import { renderToString } from 'react-dom/server';


export const enviarEmail = async (destino, asunto, componente) => {

    let contenido = new Document();
    let header = document.createElement('head');

    let bootstrap = document.createElement('link');
    bootstrap.rel = "stylesheet";
    bootstrap.type = "text/css";
    bootstrap.href = "https://code.getmdl.io/1.3.0/material.indigo-pink.min.css";
    //  bootstrap.integrity = "sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
    bootstrap.crossOrigin = "anonymous";
    header.appendChild(bootstrap);


    let iconsmaterial = document.createElement('link');
    iconsmaterial.rel = "stylesheet";
    iconsmaterial.type = "text/css";
    iconsmaterial.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
    //  bootstrap.integrity = "sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
    iconsmaterial.crossOrigin = "anonymous";
    header.appendChild(iconsmaterial);

    let indexcss = document.createElement('link');
    indexcss.rel = "stylesheet";
    indexcss.type = "text/css";
    indexcss.crossOrigin = "anonymous";
    indexcss.href = "https://rainbowinfluencers.s3.amazonaws.com/css/index.css";
    header.appendChild(indexcss);

    let indexapp = document.createElement('link');
    indexapp.rel = "stylesheet";
    indexapp.type = "text/css";
    indexapp.crossOrigin = "anonymous";
    indexapp.href = "https://rainbowinfluencers.s3.amazonaws.com/css/App.css";
    header.appendChild(indexapp);


    let visorport = document.createElement('meta');
    visorport.name = "viewport";
    visorport.content = "width=device-width, initial-scale=1";
    header.appendChild(visorport);

    let corsallow = document.createElement('meta');
    corsallow.httpEquiv = "Access-Control-Allow-Origin";
    corsallow.content = "*";
    header.appendChild(corsallow);

    let bootjs = document.createElement('script');
    bootjs.rel = "script";
    bootjs.type = "text/javascript";
    // bootjs.integrity = "sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0";
    bootjs.src = "https://code.getmdl.io/1.3.0/material.min.js";
    bootjs.crossorigin = "anonymous";
    //header.appendChild(bootjs);

    let pagina = document.createElement('html');
    pagina.appendChild(header);
    let cuerpo = renderToString(componente);

    let body = document.createElement('body');
    body.innerHTML = cuerpo;
    body.appendChild(bootjs);
    pagina.appendChild(body);
    contenido.appendChild(pagina);
    let elebien = new XMLSerializer().serializeToString(pagina);

    let sesMail = new awsSesMail();
    const sesConfig = { accessKeyId: 'AKIAVR6NBXBES5FBPLXH', secretAccessKey: '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', region: 'us-east-1' };
    sesMail.setConfig(sesConfig);
    let options = {
        from: 'Rainfluencers <rainfluencers@rainbowenergy.services>',
        to: destino,
        subject: asunto,
        content: elebien
    };

    try {
        await sesMail.sendEmail(options, function (err, data) {
            if (err) {
                return { codigo: '400', error: err, data: {} }
            } else {
                return { codigo: '200', error: {}, data: data }
            }
        });
    } catch (error) {
        return { codigo: '500', error: error, data: {} }
    }
}