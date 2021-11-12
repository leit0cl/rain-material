import Amplify, { API } from 'aws-amplify';
import awsconfig from '../../aws-exports';
Amplify.configure(awsconfig);

export const TodosLosEquipos = async () => {
  const LISTA = `query MyQuery {
    listEquipos(limit: 500) {
        items {
          id
          nombre
          estado
          nombre_repre
          correo_repre
          }
        }
      }
      `
  const equipo = await API.graphql({ query: LISTA });
  return equipo;
}



export const EquipoPorId = async (equipoid) => {
  const LISTA = `query MyQuery {
    listEquipos(filter: {id: {eq: "${equipoid}"}}) {
        items {
          id
          nombre
          estado
          nombre_repre
          correo_repre
          _version
          }
        }
      }
      `
  const equipo = await API.graphql({ query: LISTA });
  return equipo;
}


export const EquipoPorRep = async (representanteemail) => {
  const LISTA = `query MyQuery {
    listEquipos(filter: {correo_repre: {eq: "${representanteemail}"}}) {
        items {
          id
          nombre
          estado
          nombre_repre
          correo_repre
          _version
          }
        }
      }
      `
  const equipo = await API.graphql({ query: LISTA });
  return equipo;
}
