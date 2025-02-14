import { Subscriptions } from "./defaults";

export interface AirplaneCreate {
  accountNumber: number; // int;
  registrationNumber: string;
  serialNumber: string;
  aircraftType: string;
  engineType: string;
  liquidUnits: string;
  airplaneName: string;
}

// Alias: AgAirplanes_DbData
export interface Airplane {
  id: number; // int;

  registrationNumber: string;
  serialNumber: string;
  aircraftType: string;
  engineType: string;
  airplaneUniqueId: string;

  linkedAccount: number; // int;
  isUserDeleted: number; // bool;

  liquidUnits: string;
  displayColor: string;

  airplaneName: string;
}

// RESPONSES
export interface AirplaneRegistration {
  errors: string[];
  subscriptions: Subscriptions[];

  newAirplaneData: Airplane;
}

export type AirplanePatch = Pick<
  Airplane,
  "displayColor" | "liquidUnits" | "registrationNumber" | "airplaneName"
>;

export interface CustomCounter {
  displayName: string;
  recordType: string; //This is what is used in the database to look up the records (unique code)
  buttonIncrement: number; //double;
}

export interface HobbsCorrectionFormat {
  UseCorrection: boolean;
  CorrectionHours: number;
}
