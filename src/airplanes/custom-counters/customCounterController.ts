import { Body, Controller, Delete, Get, Path, Post, Route } from "tsoa";
import { CustomCounter } from "../../source.files/airplane";
import { GenericResponse } from "../../source.files/defaults";

@Route("airplanes/{airplaneId}")
export class AirplaneCustomCounter extends Controller {
  @Get("custom-counters")
  public async getCustomCounters(
    @Path() airplaneId: string
  ): Promise<GenericResponse<CustomCounter>> {
    return {} as any;
  }
  @Post("custom-counters")
  public async addCustomCounter(
    @Path() airplaneId: string,
    @Body() requestBody: Omit<CustomCounter, "recordType">
  ): Promise<GenericResponse<CustomCounter>> {
    return {} as any;
  }
  @Delete("custom-counters")
  public async deleteCustomCounter(
    @Path() airplaneId: string,
    @Body() requestBody: CustomCounter
  ): Promise<GenericResponse<{}>> {
    return {} as any;
  }
}
