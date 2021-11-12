import Amplify, { API } from 'aws-amplify';
import awsconfig from '../../aws-exports';
Amplify.configure(awsconfig);

export const TodosLosPostulantes = async () => {
  const LISTA = `query MyQuery {
    listPostulantes(limit: 500) {
        items {
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
          _version
          }
        }
      }
      `
  const postulantes = await API.graphql({ query: LISTA });
  return postulantes;
}



export const PostulantePorId = async (postulanteid) => {
  const LISTA = `query MyQuery {
    listPostulantes(filter: {id: {eq: "${postulanteid}"}}) {
        items {
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
          _version
          }
        }
      }
      `
  const postulantes = await API.graphql({ query: LISTA });
  return postulantes;
}



export const PendientesDeRevisar = async () => {
  const LISTA = `query MyQuery {
    listPostulantes(filter: {estado: {eq: "PENDIENTE"}}) {
        items {
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
          _version
          }
        }
      }
      `
  const postulantes = await API.graphql({ query: LISTA });
  return postulantes;
}

