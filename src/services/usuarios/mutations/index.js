import Amplify, { API } from 'aws-amplify';
import awsconfig from '../../../aws-exports';
Amplify.configure(awsconfig);


export const WS_CREA_USUARIO = async (usuario) => {
  const mutation = `mutation MyMutation($bank:CreateUsuarioInput!) {
    createUsuario(input:$bank){
      id
      correo
      password
      nombre
      nickname
      documento
      tipodoc
      tipo
      estado
      grupo
      level
      _version
      },
    }
  `;
  try {


    let result = await API.graphql({
      query: mutation,
      variables: {
        bank: {
          correo: usuario.correo,
          password: usuario.password,
          nombre: usuario.nombre,
          nickname: usuario.nickname,
          documento: usuario.documento,
          tipodoc: usuario.tipodoc,
          tipo: usuario.tipo,
          estado: usuario.estado,
          level: usuario.level,
          grupo: usuario.grupo
        },
      },
    });

    return { codigo: "200", mensaje: "Usuario Creado", data: result.data.createUsuario };
  } catch (error) {
    console.log('error de create Usuario');
    console.log(error);
    return { codigo: "500", mensaje: error.errors[0].message, data: [] };
  }
};




export const WS_UPDATE_USUARIO = async (usuario) => {
  const mutation = `mutation MyMutation($bank:UpdateUsuarioInput!) {
    updateUsuario(input:$bank){
      id
      correo
      password
      nombre
      nickname
      documento
      tipodoc
      tipo
      estado
      level
      _version
      },
    }
  `;
  try {


    let result = await API.graphql({
      query: mutation,
      variables: {
        bank: {
          id: usuario.id,
          estado: usuario.estado,
          password: usuario.password,
          _version: usuario._version
        },
      },
    });

    return { codigo: "200", mensaje: "Usuario Actualizado", data: result.data.updateUsuario };
  } catch (error) {
    console.log('error de update Usuario');
    console.log(error);
    return { codigo: "500", mensaje: error.errors[0].message, data: [] };
  }
};