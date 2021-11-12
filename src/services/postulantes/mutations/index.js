import Amplify, { API } from 'aws-amplify';
import awsconfig from '../../../aws-exports';
Amplify.configure(awsconfig);


export const WS_CREA_POSTULANTE = async (postulante) => {
  const mutation = `mutation MyMutation($bank:CreatePostulanteInput!) {
    createPostulante(input:$bank){
      id
      tipo
      nickname
      representante
      tipodoc
      rut
      email
      about
      rrss
      codes
      fecha_postulacion
      equipo
      estado
      },
    }
  `;
  try {

    let today = new Date();

    let result = await API.graphql({
      query: mutation,
      variables: {
        bank: {
          tipo: postulante.tipo,
          nickname: postulante.nickname,
          representante: postulante.representante,
          tipodoc: postulante.tipodoc,
          rut: postulante.rut,
          email: postulante.email,
          about: postulante.about,
          rrss: JSON.stringify(postulante.rrss),
          codes: JSON.stringify(postulante.codes),
          fecha_postulacion: today.toISOString(),
          equipo: postulante.equipo,
          estado: 'PENDIENTE'
        },
      },
    });

    return { codigo: "200", mensaje: "Postulante Creado", data: result.data.createPostulante };
  } catch (error) {
    console.log('error de create Postulante');
    console.log(error);
    return { codigo: "500", mensaje: error.errors[0].message, data: [] };
  }
};




export const WS_UPDATE_POSTULANTE = async (postulante) => {
  const mutation = `mutation MyMutation($bank:UpdatePostulanteInput!) {
    updatePostulante(input:$bank){
      id
      tipo
      nickname
      representante
      tipodoc
      rut
      email
      about
      rrss
      codes
      fecha_postulacion
      fecha_evaluacion
      equipo
      estado
      _version
      },
    }
  `;
  try {

    let today = new Date();

    let result = await API.graphql({
      query: mutation,
      variables: {
        bank: {
          id: postulante.id,
          estado: postulante.estado,
          _version: postulante._version,
          fecha_evaluacion: today,
        },
      },
    });

    return { codigo: "200", mensaje: "Postulante Actualizado", data: result.data.updatePostulante };
  } catch (error) {
    console.log('error de update Postulante');
    console.log(error);
    return { codigo: "500", mensaje: error.errors[0].message, data: [] };
  }
};