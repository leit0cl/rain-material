// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Equipo, Codigo, Influencer, Postulante } = initSchema(schema);

export {
  Equipo,
  Codigo,
  Influencer,
  Postulante
};