import { Route, Controller, Put, Path, Body, Get } from "tsoa";
import { GenericResponse } from "../../source.files/defaults";

@Route("airplanes/{airplaneId}")
export class AirplaneInterface extends Controller {
  @Put("interface")
  public async updateAirplaneInterface(
    @Path() airplaneId: string,
    @Body() requestBody: { jsonData: string }
  ): Promise<GenericResponse<{}>> {
    return {} as any;
  }
  @Get("interface")
  public async getAirplaneInterface(
    @Path() airplaneId: string
  ): Promise<GenericResponse<{ jsonData: string }>> {
    return {} as any;
  }
}
