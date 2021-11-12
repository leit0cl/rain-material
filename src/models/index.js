// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Usuario, Equipo, Codigo, Postulante } = initSchema(schema);

export {
  Usuario,
  Equipo,
  Codigo,
  Postulante
};