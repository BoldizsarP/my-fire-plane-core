import { Body, Controller, Delete, Get, Patch, Path, Post, Route } from "tsoa";
import {
  AdditionalUsersReturn,
  AdditionalUserFormat,
} from "../../source.files/AgAppAdditionalUsers";
import { GenericResponse } from "../../source.files/defaults";

@Route("users/linked")
export class LinkedUsersController extends Controller {
  /**
   * AgAppAdditionalUsers.GetAdditionalUsers
   * Facilitates getting all linked users
   */
  @Get("{linkedAccount}")
  public async getLinkedUser(
    @Path() linkedAccount: number
  ): Promise<GenericResponse<AdditionalUsersReturn>> {
    linkedAccount;
    return {} as any;
  }
  /**
   * AgAppAdditionalUsers.AddAdditionalUserResults
   * Facilitates adding a new user under a linked account
   */
  @Post("{linkedAccount}")
  public async addLinkedUser(
    @Path() linkedAccount: number,
    @Body() requestBody: AdditionalUserFormat
  ): Promise<GenericResponse<AdditionalUsersReturn>> {
    return {} as any;
  }
  /**
   * AgAppAdditionalUsers.DeleteAdditionalUser
   * Deletes a linked user
   */
  @Delete("{linkedAccount}")
  public async deleteLinkedUser(
    @Path() linkedAccount: number,
    @Body() requestBody: Pick<AdditionalUserFormat, "userName">
  ): Promise<GenericResponse<{}>> {
    return {} as any;
  }

  @Patch("{linkedAccount}")
  public async updateLinkedUserPassword(
    @Path() linkedAccount: number,
    @Body()
    requestBody: Partial<Omit<AdditionalUserFormat, "userName">> & {
      userName: string;
    }
  ): Promise<GenericResponse<{}>> {
    return {} as any;
  }
}
