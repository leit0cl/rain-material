import { API, graphqlOperation } from 'aws-amplify';
import { ALL } from './queries';

export const TodosLosEquipos = async () => {
  const equipos = await API.graphql(graphqlOperation(ALL));
  return equipos;
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
