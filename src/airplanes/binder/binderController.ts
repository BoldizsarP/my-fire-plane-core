// Referencing API in
// AgAppBinder

import { Route, Controller, Put, Path, Body, Get, Post } from "tsoa";
import { GenericResponse } from "../../source.files/defaults";

@Route("airplanes/{airplaneId}")
export class AirplaneInterface extends Controller {
  @Put("scratch-pad")
  // UpdateScratchPad
  public async putScratchPad(
    @Path() airplaneId: string,
    @Body() requestBody: { jsonData: string }
  ): Promise<GenericResponse<{}>> {
    return {} as any;
  }
  @Get("scratch-pad")
  // GetLatestScratchPadData
  public async getScratchPad(
    @Path() airplaneId: string
  ): Promise<GenericResponse<{ jsonData: string }>> {
    return {} as any;
  }
  @Get("browser-data")
  // GetFileBrowserData
  public async getFileBrowserData(
    @Path() airplaneId: string
  ): Promise<GenericResponse<{ jsonData: string }>> {
    return {} as any;
  }
  @Put("browser-data")
  // UpdateFileBrowserData
  public async putFileBrowser(
    @Path() airplaneId: string,
    @Body() requestBody: { jsonData: string }
  ): Promise<GenericResponse<{}>> {
    return {} as any;
  }
  @Post("file-data")
  // UploadBinderFile
  public async postBinderFile(
    @Path() airplaneId: string,
    @Body()
    requestBody: {
      fileNameWithoutExtension: string;
      fileExtension: string;
      base64Data: string;
    }
  ): Promise<GenericResponse<{}>> {
    return {} as any;
  }
}
