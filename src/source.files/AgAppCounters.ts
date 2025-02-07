import { AgAirplaneCounters } from "./defaults";

export interface GetAllCountersForAirplaneResuls {
  countersStarts: AgAirplaneCounters[];
  countersLandings: AgAirplaneCounters[];
  countersEngineHours: AgAirplaneCounters[];
}
