// This file referencing
// AgAppCounters
// AgAppAirplaneSquawks

import {
  Body,
  Controller,
  Get,
  Patch,
  Path,
  Post,
  Put,
  Query,
  Route,
} from "tsoa";
import { GenericResponse } from "../../source.files/defaults";
import { Serialize } from "../../type-helpers/serializer";
import { AgCounters } from "@prisma/client";

@Route("airplanes/{airplaneId}/counters")
export class UsersController extends Controller {
  @Get("totals")
  //   GetAccountSquawks
  public async getCounterTotals(
    @Path()
    airplaneId: string
  ): Promise<
    GenericResponse<{
      totalStarts: number; //int
      totalLandings: number; //int
      totalHours: number; //float
      lastUpdated: string; //DateTime
    }>
  > {
    return {} as any;
  }
  @Get("all")
  //   GetAllCountersForAirplane
  public async getAllCounters(
    @Path()
    airplaneId: string
  ): Promise<
    GenericResponse<{
      countersStarts: Serialize<AgCounters>[];
      countersLandings: Serialize<AgCounters>[];
      countersEngineHours: Serialize<AgCounters>[];
    }>
  > {
    return {} as any;
  }
  @Put("push")
  //   ApplyCounterButtonPush
  public async putCounterButton(
    @Path()
    airplaneId: string,
    @Body()
    requestBody: Serialize<
      Pick<
        AgCounters,
        | "RecordType"
        | "ActionType"
        | "ActionValue"
        | "IsMobileEntry"
        | "MobileEntryDateTime"
        | "EntryUser"
      >
    >
  ): Promise<
    GenericResponse<
      Serialize<Pick<AgCounters, "RecordType" | "ActionType" | "ActionValue">>
    >
  > {
    return {} as any;
  }
  @Get("totals/before/{beforeDate}")
  //   GetCounterTotalsForAirplaneBeforeDate
  public async getCounterTotalsBeforeDate(
    @Path()
    airplaneId: string,
    @Path()
    beforeDate: string
  ): Promise<
    GenericResponse<{
      counterTotalsBeforeDate: {
        compareDate: string;
        totalStarts: number;
        totalLandings: number;
        totalHours: number;
      }[];
    }>
  > {
    return {} as any;
  }
  @Get("last")
  //   GetLastCounter
  public async getLastCounter(
    @Path()
    airplaneId: string
  ): Promise<
    GenericResponse<{
      LastCounter: Serialize<AgCounters>;
    }>
  > {
    return {} as any;
  }
  @Get("custom/{recordType}/totals")
  //   GetCustomCounterTotal
  public async getCustomCounterTotal(
    @Path()
    airplaneId: string,
    @Path() recordType: string
  ): Promise<
    GenericResponse<{
      RecordType: string;
      Total: number;
      TodaysTotal: number;
      LastUpdated: string;
    }>
  > {
    return {} as any;
  }
}
