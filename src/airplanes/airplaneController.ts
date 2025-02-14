import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Path,
  Post,
  Put,
  Route,
} from "tsoa";
import { GenericResponse } from "../source.files/defaults";
import {
  Airplane,
  AirplaneCreate,
  AirplanePatch,
  AirplaneRegistration,
  CustomCounter,
  HobbsCorrectionFormat,
} from "../source.files/airplane";
import { GetAirplaneReport } from "../source.files/AgAppAirplaneReport";

@Route("airplanes")
export class AirplanesMain extends Controller {
  /**
   * RegisterNewAirplane
   */
  @Post()
  public async createAirplane(
    @Body() requestBody: AirplaneCreate
  ): Promise<GenericResponse<AirplaneRegistration>> {
    return {} as any;
  }
}

@Route("accounts/{accountId}")
export class AccountStub extends Controller {
  @Get("airplanes")
  public async getAccountAirplanes(
    @Path() accountId: number
  ): Promise<GenericResponse<{ allAirplanes: Airplane; errors: string[] }>> {
    return {} as any;
  }
}

@Route("airplanes/{airplaneId}")
export class AirplanesController extends Controller {
  @Get("report")
  public async getAirplaneReport(
    @Path() airplaneId: string
  ): Promise<GenericResponse<GetAirplaneReport>> {
    return {} as any;
  }
  @Patch()
  public async updateAirplane(
    @Path() airplaneId: string,
    @Body()
    requestBody: { linkedAccount: number } & AirplanePatch
  ): Promise<
    GenericResponse<
      AirplanePatch & {
        changedUniqueId: string;
        authorizedToChange: boolean;
        changedRegistrationNumber: boolean;
      }
    >
  > {
    return {} as any;
  }

  @Get("hobs-correction")
  //   GetHobbsCorrection
  public async getHobbsCorrection(
    @Path()
    airplaneId: string
  ): Promise<
    GenericResponse<{
      correction: HobbsCorrectionFormat;
    }>
  > {
    return {} as any;
  }
  @Put("hobs-correction")
  //   GetHobbsCorrection
  public async putHobbsCorrection(
    @Path()
    airplaneId: string,
    @Body() requestBody: { correction: HobbsCorrectionFormat }
  ): Promise<GenericResponse<{}>> {
    return {} as any;
  }
}
