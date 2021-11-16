import Amplify, { API } from 'aws-amplify';
import awsconfig from '../../../aws-exports';
Amplify.configure(awsconfig);


export const WS_CREA_CODIGO = async (Codigo) => {
  const mutation = `mutation MyMutation($bank:CreateCodigoInput!) {
    createCodigo(input:$bank){
      id
      code
      estado
      influencer
      creado
      usado
      externalid
      glosa
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
          code: Codigo.code,
          estado: 'CREADO',
          influencer: Codigo.influencer,
          creado:  today.toISOString(),
          usado: Codigo.usado,
          externalid: Codigo.externalid,
          glosa: Codigo.glosa,
        },
      },
    });

    return { codigo: "200", mensaje: "Codigo Creado", data: result.data.createCodigo };
  } catch (error) {
    console.log('error de create Codigo');
    console.log(error);
    return { codigo: "500", mensaje: error.errors[0].message, data: [] };
  }
};

