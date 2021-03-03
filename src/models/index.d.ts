import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Logger {
  readonly id: string;
  readonly user: string;
  readonly timestamp: string;
  readonly message?: string;
  constructor(init: ModelInit<Logger>);
  static copyOf(source: Logger, mutator: (draft: MutableModel<Logger>) => MutableModel<Logger> | void): Logger;
}

export declare class Drive {
  readonly id: string;
  readonly is_jit: boolean;
  readonly driver: string;
  readonly fleet?: string;
  readonly commander?: string;
  readonly vehicle?: string;
  readonly vehicle_type?: string;
  readonly start_time?: string;
  readonly end_time?: string;
  readonly start_location?: string;
  readonly end_location?: string;
  readonly start_odometer?: number;
  readonly end_odometer?: number;
  readonly fuel_level?: number;
  readonly status?: string;
  readonly comments?: string;
  readonly company?: string;
  readonly created?: string;
  readonly date?: string;
  readonly incamp?: boolean;
  readonly is_maintenance?: boolean;
  constructor(init: ModelInit<Drive>);
  static copyOf(source: Drive, mutator: (draft: MutableModel<Drive>) => MutableModel<Drive> | void): Drive;
}

export declare class Mtrac {
  readonly id: string;
  readonly accidentcommander?: boolean;
  readonly accidentdriver?: boolean;
  readonly accidentpsger?: boolean;
  readonly admincommander?: boolean;
  readonly admindriver?: boolean;
  readonly cmdchecklistcomplete?: boolean;
  readonly cmddanger?: boolean;
  readonly cmdlicense?: boolean;
  readonly cmdreverse?: boolean;
  readonly cmdroute?: boolean;
  readonly cmdspeedlimit?: boolean;
  readonly commander?: string;
  readonly commandermtrac?: boolean;
  readonly company?: string;
  readonly counterName?: string;
  readonly counterSignature?: string;
  readonly created?: string;
  readonly detailType?: string;
  readonly driver?: string;
  readonly drivermtrac?: boolean;
  readonly endLocation?: string;
  readonly fleet?: string;
  readonly frontName?: string;
  readonly frontSignature?: string;
  readonly health?: string;
  readonly incamp?: boolean;
  readonly is_jit?: boolean;
  readonly licenseTyp?: string;
  readonly loadcommander?: boolean;
  readonly loaddriver?: boolean;
  readonly mtraccompletecommander?: boolean;
  readonly mtraccompletedriver?: boolean;
  readonly psgerdange?: boolean;
  readonly psgerlicense?: boolean;
  readonly psgerspeedlimit?: boolean;
  readonly rest?: string;
  readonly safetyMeasures?: string;
  readonly safetystrapcommander?: boolean;
  readonly safetystrapdriver?: boolean;
  readonly seatbeltcommander?: boolean;
  readonly seatbletdriver?: boolean;
  readonly smokingcommander?: boolean;
  readonly smokingdriver?: boolean;
  readonly startLocation?: string;
  readonly status?: string;
  readonly vc?: string;
  readonly vehicleNumber?: string;
  readonly vehicleServiceability?: string;
  readonly vehicleType2?: string;
  readonly vehicle_type?: string;
  readonly weather?: string;
  readonly route?: string;
  constructor(init: ModelInit<Mtrac>);
  static copyOf(source: Mtrac, mutator: (draft: MutableModel<Mtrac>) => MutableModel<Mtrac> | void): Mtrac;
}