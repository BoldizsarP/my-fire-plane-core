import { GetAllCountersForAirplaneResuls } from "./AgAppCounters";
import { EngineRuns, LatestCyclesRecord } from "./defaults";

export interface GetAirplaneReport {
  noErrors: boolean;
  invalidAirplane: boolean;

  ReportGeneratedDate: Date;

  CurrentTotals: GetAllCountersForAirplaneResuls;

  AirplaneCounters: GetAllCountersForAirplaneResuls;

  last7Days_Starts: number; // int
  last7Days_Landings: number; // int
  last7Days_Hours: number; // double

  last30Days_Starts: number; // int
  last30Days_Landings: number; // int
  last30Days_Hours: number; // double

  ytd_Starts: number; // int
  ytd_Landings: number; // int
  ytd_Hours: number; // double

  engineRuns: EngineRuns;
  cycles: LatestCyclesRecord;
}
