import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type EquipoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CodigoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type InfluencerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostulanteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Equipo {
  readonly id: string;
  readonly nombre?: string;
  readonly estado?: string;
  readonly nombre_repre?: string;
  readonly correo_repre?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Equipo, EquipoMetaData>);
  static copyOf(source: Equipo, mutator: (draft: MutableModel<Equipo, EquipoMetaData>) => MutableModel<Equipo, EquipoMetaData> | void): Equipo;
}

export declare class Codigo {
  readonly id: string;
  readonly code?: string;
  readonly estado?: string;
  readonly influencer?: string;
  readonly creado?: string;
  readonly usado?: string;
  readonly externali?: string;
  readonly glosa?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Codigo, CodigoMetaData>);
  static copyOf(source: Codigo, mutator: (draft: MutableModel<Codigo, CodigoMetaData>) => MutableModel<Codigo, CodigoMetaData> | void): Codigo;
}

export declare class Influencer {
  readonly id: string;
  readonly level?: string;
  readonly usuario?: string;
  readonly nombre?: string;
  readonly nickname?: string;
  readonly creado?: string;
  readonly data_banca?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Influencer, InfluencerMetaData>);
  static copyOf(source: Influencer, mutator: (draft: MutableModel<Influencer, InfluencerMetaData>) => MutableModel<Influencer, InfluencerMetaData> | void): Influencer;
}

export declare class Postulante {
  readonly id: string;
  readonly tipo?: string;
  readonly nickname?: string;
  readonly representante?: string;
  readonly tipodoc?: string;
  readonly rut?: string;
  readonly email?: string;
  readonly about?: string;
  readonly rrss?: string;
  readonly codes?: string;
  readonly fecha_postulacion?: string;
  readonly equipo?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Postulante, PostulanteMetaData>);
  static copyOf(source: Postulante, mutator: (draft: MutableModel<Postulante, PostulanteMetaData>) => MutableModel<Postulante, PostulanteMetaData> | void): Postulante;
}