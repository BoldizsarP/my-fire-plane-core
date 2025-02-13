/*
  Warnings:

  - A unique constraint covering the columns `[ID]` on the table `FaaAirportData` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `NonFaaAirports` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- CreateIndex
ALTER TABLE [dbo].[FaaAirportData] ADD CONSTRAINT [FaaAirportData_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[NonFaaAirports] ADD CONSTRAINT [NonFaaAirports_ID_key] UNIQUE NONCLUSTERED ([ID]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
