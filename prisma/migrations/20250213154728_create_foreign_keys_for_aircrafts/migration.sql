BEGIN TRY

BEGIN TRAN;
DECLARE @AirplaneUniqueIds TABLE (AirplaneUniqueId VARCHAR(50));

INSERT INTO @AirplaneUniqueIds (AirplaneUniqueId)
SELECT AirplaneUniqueId FROM [dbo].[AgAirplanes];


-- AddForeignKey
DELETE FROM [dbo].[AgAirplaneSquawks]
WHERE AirplaneUniqueId NOT IN (SELECT AirplaneUniqueId FROM @AirplaneUniqueIds);
ALTER TABLE [dbo].[AgAirplaneSquawks] ADD CONSTRAINT [AgAirplaneSquawks_AirplaneUniqueId_fkey] FOREIGN KEY ([AirplaneUniqueId]) REFERENCES [dbo].[AgAirplanes]([AirplaneUniqueId]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
DELETE FROM [dbo].[AgCounters]
WHERE AirplaneUniqueId NOT IN (SELECT AirplaneUniqueId FROM @AirplaneUniqueIds);
ALTER TABLE [dbo].[AgCounters] ADD CONSTRAINT [AgCounters_AirplaneUniqueId_fkey] FOREIGN KEY ([AirplaneUniqueId]) REFERENCES [dbo].[AgAirplanes]([AirplaneUniqueId]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
DELETE FROM [dbo].[AgCycles]
WHERE AirplaneUniqueId NOT IN (SELECT AirplaneUniqueId FROM @AirplaneUniqueIds);
ALTER TABLE [dbo].[AgCycles] ADD CONSTRAINT [AgCycles_AirplaneUniqueId_fkey] FOREIGN KEY ([AirplaneUniqueId]) REFERENCES [dbo].[AgAirplanes]([AirplaneUniqueId]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
DELETE FROM [dbo].[AgEngineRuns]
WHERE AirplaneUniqueId NOT IN (SELECT AirplaneUniqueId FROM @AirplaneUniqueIds);
ALTER TABLE [dbo].[AgEngineRuns] ADD CONSTRAINT [AgEngineRuns_AirplaneUniqueId_fkey] FOREIGN KEY ([AirplaneUniqueId]) REFERENCES [dbo].[AgAirplanes]([AirplaneUniqueId]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
DELETE FROM [dbo].[AgInterfaceOps]
WHERE AirplaneUniqueId NOT IN (SELECT AirplaneUniqueId FROM @AirplaneUniqueIds);
ALTER TABLE [dbo].[AgInterfaceOps] ADD CONSTRAINT [AgInterfaceOps_AirplaneUniqueId_fkey] FOREIGN KEY ([AirplaneUniqueId]) REFERENCES [dbo].[AgAirplanes]([AirplaneUniqueId]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
DELETE FROM [dbo].[AgMfratEntries]
WHERE AirplaneUniqueId NOT IN (SELECT AirplaneUniqueId FROM @AirplaneUniqueIds);
ALTER TABLE [dbo].[AgMfratEntries] ADD CONSTRAINT [AgMfratEntries_AirplaneUniqueId_fkey] FOREIGN KEY ([AirplaneUniqueId]) REFERENCES [dbo].[AgAirplanes]([AirplaneUniqueId]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
DELETE FROM [dbo].[AgPerfEntries]
WHERE AirplaneUniqueId NOT IN (SELECT AirplaneUniqueId FROM @AirplaneUniqueIds);
ALTER TABLE [dbo].[AgPerfEntries] ADD CONSTRAINT [AgPerfEntries_AirplaneUniqueId_fkey] FOREIGN KEY ([AirplaneUniqueId]) REFERENCES [dbo].[AgAirplanes]([AirplaneUniqueId]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
DELETE FROM [dbo].[AgSubscriptionRedemptions]
WHERE AirplaneUniqueId NOT IN (SELECT AirplaneUniqueId FROM @AirplaneUniqueIds);
ALTER TABLE [dbo].[AgSubscriptionRedemptions] ADD CONSTRAINT [AgSubscriptionRedemptions_AirplaneUniqueId_fkey] FOREIGN KEY ([AirplaneUniqueId]) REFERENCES [dbo].[AgAirplanes]([AirplaneUniqueId]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
DELETE FROM [dbo].[AgSubscriptions]
WHERE AirplaneUniqueId NOT IN (SELECT AirplaneUniqueId FROM @AirplaneUniqueIds);
ALTER TABLE [dbo].[AgSubscriptions] ADD CONSTRAINT [AgSubscriptions_AirplaneUniqueId_fkey] FOREIGN KEY ([AirplaneUniqueId]) REFERENCES [dbo].[AgAirplanes]([AirplaneUniqueId]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
DELETE FROM [dbo].[AgTransferCodes]
WHERE AirplaneUniqueId NOT IN (SELECT AirplaneUniqueId FROM @AirplaneUniqueIds);
ALTER TABLE [dbo].[AgTransferCodes] ADD CONSTRAINT [AgTransferCodes_AirplaneUniqueId_fkey] FOREIGN KEY ([AirplaneUniqueId]) REFERENCES [dbo].[AgAirplanes]([AirplaneUniqueId]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
DELETE FROM [dbo].[AgWbConfigs]
WHERE AirplaneUniqueId NOT IN (SELECT AirplaneUniqueId FROM @AirplaneUniqueIds);
ALTER TABLE [dbo].[AgWbConfigs] ADD CONSTRAINT [AgWbConfigs_AirplaneUniqueId_fkey] FOREIGN KEY ([AirplaneUniqueId]) REFERENCES [dbo].[AgAirplanes]([AirplaneUniqueId]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
DELETE FROM [dbo].[AgWbEntries]
WHERE AirplaneUniqueId NOT IN (SELECT AirplaneUniqueId FROM @AirplaneUniqueIds);
ALTER TABLE [dbo].[AgWbEntries] ADD CONSTRAINT [AgWbEntries_AirplaneUniqueId_fkey] FOREIGN KEY ([AirplaneUniqueId]) REFERENCES [dbo].[AgAirplanes]([AirplaneUniqueId]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
DELETE FROM [dbo].[AgWbEquipLists]
WHERE AirplaneUniqueId NOT IN (SELECT AirplaneUniqueId FROM @AirplaneUniqueIds);
ALTER TABLE [dbo].[AgWbEquipLists] ADD CONSTRAINT [AgWbEquipLists_AirplaneUniqueId_fkey] FOREIGN KEY ([AirplaneUniqueId]) REFERENCES [dbo].[AgAirplanes]([AirplaneUniqueId]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
