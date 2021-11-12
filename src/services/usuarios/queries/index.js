import gql from 'graphql-tag'

export const ALL = gql`
query MyQuery {
  listEquipos(limit: 5000) {
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