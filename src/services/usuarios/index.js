import Amplify, { API } from 'aws-amplify';
import awsconfig from '../../aws-exports';
Amplify.configure(awsconfig);

export const TodosLosUsuarios = async () => {
  const LISTA = `query MyQuery {
    listUsuarios(limit: 500) {
        items {
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
          grupo
          _version
          }
        }
      }
      `
  const usuarios = await API.graphql({ query: LISTA });
  return usuarios;
}


export const TodosLosInfluencers = async () => {
  const LISTA = `query MyQuery {
    listUsuarios(filter: {grupo: {eq: "RAINFLUENCER"}}) {
        items {
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
          grupo
          _version
          }
        }
      }
      `
  const usuarios = await API.graphql({ query: LISTA });
  return usuarios;
}


export const UsuariosActivos = async () => {
  const LISTA = `query MyQuery {
    listUsuarios(filter: {estado: {eq: "ACTIVO"},grupo: {eq: "RAINFLUENCER"}}) {
        items {
          id
          correo
          nombre
          nickname
          tipo
          estado
          grupo
          level
          }
        }
      }
      `
  const usuarios = await API.graphql({ query: LISTA });
  return usuarios;
}


export const UsuarioPorId = async (usuarioid) => {
  const LISTA = `query MyQuery {
    listUsuarios(filter: {id: {eq: "${usuarioid}"}}) {
        items {
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
          grupo
          _version
          }
        }
      }
      `
  const usuarios = await API.graphql({ query: LISTA });
  return usuarios;
}


export const UsuarioPorEmail = async (usuarioemail) => {
  const LISTA = `query MyQuery {
    listUsuarios(filter: {correo: {eq: "${usuarioemail}"}}) {
        items {
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
          grupo
          _version
          }
        }
      }
      `
  const usuarios = await API.graphql({ query: LISTA });
  return usuarios;
}


export const ValidaUsuarioNick = async (usuario) => {
  const LISTA = `query MyQuery {
    listUsuarios(filter: {nickname: {eq: "${usuario}"}}) {
        items {
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
          grupo
          _version
          }
        }
      }
      `
  const usuarios = await API.graphql({ query: LISTA });
  return usuarios;
}


export const ValidaUsuarioMail = async (usuario) => {
  const LISTA = `query MyQuery {
    listUsuarios(filter: {correo: {eq: "${usuario}"}}) {
        items {
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
          grupo
          _version
          }
        }
      }
      `
  const usuarios = await API.graphql({ query: LISTA });
  return usuarios;
}

