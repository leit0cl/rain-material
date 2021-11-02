import { API } from "aws-amplify";

export const WS_CREA_EQUIPO = async (equipo) => {
  const mutation = `mutation MyMutation($bank:CreateEquipoInput!) {
    createEquipo(input:$bank){
      id
      nombre
      estado
      nombre_repre
      correo_repre
      _version
      },
    }
  `;
  try {

    let result = await API.graphql({
      query: mutation,
      variables: {
        bank: {
          nombre: equipo.nombre,
          estado: equipo.estado,
          nombre_repre: equipo.nombre_repre,
          correo_repre: equipo.correo_repre,
        },
      },
    });

    return { codigo: "200", mensaje: "Equipo Creado", data: result.data.createEquipo };
  } catch (error) {
    console.log('error de create equipo');
    console.log(error);
    return { codigo: "500", mensaje: error.errors[0].message, data: [] };
  }
};