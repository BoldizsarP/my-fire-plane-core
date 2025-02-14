/*
  Warnings:

  - A unique constraint covering the columns `[AirplaneUniqueId]` on the table `AgAirplanes` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- CreateIndex
ALTER TABLE [dbo].[AgAirplanes] ADD CONSTRAINT [AgAirplanes_AirplaneUniqueId_key] UNIQUE NONCLUSTERED ([AirplaneUniqueId]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
