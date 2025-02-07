export enum UserRoles {
  Admin = "ADMIN",
  Pilot = "PILOT",
  MX = "MX",
  OBS = "OBS",
}

export enum RecordType {
  START = "START",
  LANDING = "LANDING",
  ENGINEHOURS = "ENGINEHOURS",
  ERROR = "ERROR",
}

export enum ActionType {
  ADD = "ADD",
  SUBTRACT = "SUBTRACT",
  ADJUST = "ADJUST",
  ERROR = "ERROR",
}

export type GenericResponse<T extends object> = T & { noErrors: boolean };

export interface AgAirplaneCounters {
  id: number;

  airplaneUniqueId: string;

  recordType: RecordType; //START,LANDING,ENGINEHOURS,ERROR
  actionType: ActionType; //ADD,SUBTRACT,ADJUST,ERROR
  actionValue: number; // float
  recordDateTime: Date;

  isMobileEntry?: boolean; //can be NULL
  mobileEntryDateTime?: Date; //can be NULL
  entryUser: string;
}

export interface EngineRuns {
  id: number;
  AirplaneUniqueId: string;

  altitude: number; //double
  temperature: number; // double ;

  targetTorque: number; // double ;
  ngRef: number; // double ;
  ittRef: number; // double ;
  wfRef: number; // double ;
  ng: number; // double ;
  itt: number; // double ;
  wf: number; // double ;

  recordDateTime: Date;
}

export interface LatestCyclesRecord {
  jsonData: string;
}

export interface Subscriptions {
  id: number; //int;
  accountId: number; //int;
  subscriptionType: string;
  beginDateTime: Date; //DateTime;
  endDateTime: Date; //DateTime;
  airplaneSerialNumber: string;
  airplaneRegistrationNumber: string;
  airplaneUniqueId: string;
  uniqueId: string;
}
