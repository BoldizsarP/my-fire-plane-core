/*
  Warnings:

  - A unique constraint covering the columns `[ID]` on the table `AgAccounts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `AgAdditionalUsers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `AgAirplanes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `AgAirplaneSquawks` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `AgCounters` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `AgCycles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `AgEngineRuns` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `AgInterfaceOps` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `AgMfratEntries` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `AgNotifications` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `AgPerfEntries` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `AgQuizAssignments` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `AgQuizAttempts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `AgQuizes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `AgQuizQuestions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `AgQuizUserAssignments` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `AgStripePaymentIntents` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `AgStripePayments` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `AgSubscriptionRedemptions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `AgSubscriptions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `AgTrainingConfigs` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `AgTransferCodes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `AgWbConfigs` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `AgWbEntries` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `AgWbEquipLists` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `FaaAirportData` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `FleetReports` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `NonFaaAirports` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ID` to the `FaaAirportData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ID` to the `NonFaaAirports` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[FaaAirportData] ADD [ID] INT NOT NULL IDENTITY(1,1);

-- AlterTable
ALTER TABLE [dbo].[NonFaaAirports] ADD [ID] INT NOT NULL IDENTITY(1,1);

-- CreateIndex
ALTER TABLE [dbo].[AgAccounts] ADD CONSTRAINT [AgAccounts_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[AgAdditionalUsers] ADD CONSTRAINT [AgAdditionalUsers_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[AgAirplanes] ADD CONSTRAINT [AgAirplanes_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[AgAirplaneSquawks] ADD CONSTRAINT [AgAirplaneSquawks_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[AgCounters] ADD CONSTRAINT [AgCounters_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[AgCycles] ADD CONSTRAINT [AgCycles_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[AgEngineRuns] ADD CONSTRAINT [AgEngineRuns_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[AgInterfaceOps] ADD CONSTRAINT [AgInterfaceOps_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[AgMfratEntries] ADD CONSTRAINT [AgMfratEntries_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[AgNotifications] ADD CONSTRAINT [AgNotifications_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[AgPerfEntries] ADD CONSTRAINT [AgPerfEntries_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[AgQuizAssignments] ADD CONSTRAINT [AgQuizAssignments_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[AgQuizAttempts] ADD CONSTRAINT [AgQuizAttempts_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[AgQuizes] ADD CONSTRAINT [AgQuizes_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[AgQuizQuestions] ADD CONSTRAINT [AgQuizQuestions_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[AgQuizUserAssignments] ADD CONSTRAINT [AgQuizUserAssignments_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[AgStripePaymentIntents] ADD CONSTRAINT [AgStripePaymentIntents_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[AgStripePayments] ADD CONSTRAINT [AgStripePayments_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[AgSubscriptionRedemptions] ADD CONSTRAINT [AgSubscriptionRedemptions_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[AgSubscriptions] ADD CONSTRAINT [AgSubscriptions_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[AgTrainingConfigs] ADD CONSTRAINT [AgTrainingConfigs_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[AgTransferCodes] ADD CONSTRAINT [AgTransferCodes_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[AgWbConfigs] ADD CONSTRAINT [AgWbConfigs_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[AgWbEntries] ADD CONSTRAINT [AgWbEntries_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[AgWbEquipLists] ADD CONSTRAINT [AgWbEquipLists_ID_key] UNIQUE NONCLUSTERED ([ID]);

-- CreateIndex
ALTER TABLE [dbo].[FleetReports] ADD CONSTRAINT [FleetReports_ID_key] UNIQUE NONCLUSTERED ([ID]);


COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
