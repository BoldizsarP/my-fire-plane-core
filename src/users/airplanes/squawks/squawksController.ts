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
import { GenericResponse } from "../../../source.files/defaults";
import { AgAirplaneSquawks } from "@prisma/client";
import { Serialize } from "../../../type-helpers/serializer";

@Route("users/{userId}/airplanes/{airplaneId}")
export class UsersController extends Controller {
  @Post("squawks")
  //   PostNewSquawk
  public async postSquawk(
    @Path()
    userId: string,
    @Path() airplaneId: string,
    @Body()
    requestBody: {
      SquawkSummary: string;
      SquawkedBy: string;
      Urgency: number;
      SquawkJson: string;
    }
  ): Promise<GenericResponse<{}>> {
    return {} as any;
  }
  @Get("squawks")
  //   GetAccountSquawks
  public async getSquawks(
    @Path()
    userId: string,
    @Path() airplaneId: string,
    @Query("OpenSquawks") getOpenSquawks: boolean
  ): Promise<
    GenericResponse<{
      IsOpenSquawks: boolean;
      squawks: Serialize<AgAirplaneSquawks>[];
    }>
  > {
    return {} as any;
  }
  @Patch("squawks/{squawkId}/delete")
  //   SetSquawkUserDeleted
  public async patchSquawksDelete(
    @Path()
    userId: string,
    @Path() airplaneId: string,
    @Path() squawkId: number,
    @Body() requestBody: Pick<AgAirplaneSquawks, "isUserDeleted">
  ): Promise<GenericResponse<{}>> {
    return {} as any;
  }
  @Patch("squawks/{squawkId}/close")
  //   CloseSquawk
  public async patchSquawksClose(
    @Path()
    userId: string,
    @Path() airplaneId: string,
    @Path() squawkId: number,
    @Body()
    requestBody: Serialize<
      Pick<AgAirplaneSquawks, "ClosedBy" | "ClosedOn" | "ClosedJson">
    >
  ): Promise<GenericResponse<{}>> {
    return {} as any;
  }
  @Patch("squawks/{squawkId}/defer")
  //   UploadSquawkImage
  public async putSquawksDefer(
    @Path()
    userId: string,
    @Path() airplaneId: string,
    @Path() squawkId: number,
    @Body()
    requestBody: Serialize<
      Pick<AgAirplaneSquawks, "DeferredBy" | "DeferredOn" | "DeferredJson">
    >
  ): Promise<GenericResponse<{}>> {
    return {} as any;
  }
  @Put("squawks/{squawkId}/image")
  //   UploadSquawkImage
  public async putSquawksImage(
    @Path()
    userId: string,
    @Path() airplaneId: string,
    @Path() squawkId: number,
    @Body()
    requestBody: { imageSource: string; fileExtension: string }
  ): Promise<GenericResponse<{ imageUrl: string }>> {
    return {} as any;
  }
}
