BEGIN TRY

BEGIN TRAN;

DECLARE @AccountIds TABLE (AccountId INT);

INSERT INTO @AccountIds (AccountId)
SELECT ID FROM [dbo].[AgAccounts];

DECLARE @BadAirplaneUniqueIds TABLE (AirplaneUniqueId VARCHAR(50));

INSERT INTO @BadAirplaneUniqueIds (AirplaneUniqueId)
SELECT AirplaneUniqueId FROM [dbo].[AgAirplanes] as a WHERE LinkedAccount NOT IN (SELECT ID FROM [dbo].[AgAccounts]) AND (
      EXISTS (SELECT 1 FROM AgAirplaneSquawks s WHERE s.AirplaneUniqueId = a.AirplaneUniqueId)
      OR EXISTS (SELECT 1 FROM AgCounters c WHERE c.AirplaneUniqueId = a.AirplaneUniqueId)
      OR EXISTS (SELECT 1 FROM AgCycles cyc WHERE cyc.AirplaneUniqueId = a.AirplaneUniqueId)
      OR EXISTS (SELECT 1 FROM AgEngineRuns er WHERE er.AirplaneUniqueId = a.AirplaneUniqueId)
      OR EXISTS (SELECT 1 FROM AgInterfaceOps io WHERE io.AirplaneUniqueId = a.AirplaneUniqueId)
      OR EXISTS (SELECT 1 FROM AgMfratEntries me WHERE me.AirplaneUniqueId = a.AirplaneUniqueId)
      OR EXISTS (SELECT 1 FROM AgPerfEntries pe WHERE pe.AirplaneUniqueId = a.AirplaneUniqueId)
      OR EXISTS (SELECT 1 FROM AgSubscriptionRedemptions sr WHERE sr.AirplaneUniqueId = a.AirplaneUniqueId)
      OR EXISTS (SELECT 1 FROM AgSubscriptions s2 WHERE s2.AirplaneUniqueId = a.AirplaneUniqueId)
      OR EXISTS (SELECT 1 FROM AgTransferCodes tc WHERE tc.AirplaneUniqueId = a.AirplaneUniqueId)
      OR EXISTS (SELECT 1 FROM AgWbConfigs wc WHERE wc.AirplaneUniqueId = a.AirplaneUniqueId)
      OR EXISTS (SELECT 1 FROM AgWbEntries we WHERE we.AirplaneUniqueId = a.AirplaneUniqueId)
      OR EXISTS (SELECT 1 FROM AgWbEquipLists wel WHERE wel.AirplaneUniqueId = a.AirplaneUniqueId)
  );

-- DropForeignKey
ALTER TABLE [dbo].[AgSubscriptions] DROP CONSTRAINT [AgSubscriptions_AccountId_fkey];

-- AddForeignKey
DELETE FROM [dbo].[AgAdditionalUsers]
WHERE linkedAccount NOT IN (SELECT AccountId FROM @AccountIds);
ALTER TABLE [dbo].[AgAdditionalUsers] ADD CONSTRAINT [AgAdditionalUsers_linkedAccount_fkey] FOREIGN KEY ([linkedAccount]) REFERENCES [dbo].[AgAccounts]([ID]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
DELETE FROM [dbo].[AgAirplaneSquawks]
WHERE AirplaneUniqueId IN (SELECT AirplaneUniqueId FROM @BadAirplaneUniqueIds);
DELETE FROM [dbo].[AgCounters]
WHERE AirplaneUniqueId IN (SELECT AirplaneUniqueId FROM @BadAirplaneUniqueIds);
DELETE FROM [dbo].[AgCycles]
WHERE AirplaneUniqueId IN (SELECT AirplaneUniqueId FROM @BadAirplaneUniqueIds);
DELETE FROM [dbo].[AgEngineRuns]
WHERE AirplaneUniqueId IN (SELECT AirplaneUniqueId FROM @BadAirplaneUniqueIds);
DELETE FROM [dbo].[AgInterfaceOps]
WHERE AirplaneUniqueId IN (SELECT AirplaneUniqueId FROM @BadAirplaneUniqueIds);
DELETE FROM [dbo].[AgMfratEntries]
WHERE AirplaneUniqueId IN (SELECT AirplaneUniqueId FROM @BadAirplaneUniqueIds);
DELETE FROM [dbo].[AgPerfEntries]
WHERE AirplaneUniqueId IN (SELECT AirplaneUniqueId FROM @BadAirplaneUniqueIds);
DELETE FROM [dbo].[AgSubscriptionRedemptions]
WHERE AirplaneUniqueId IN (SELECT AirplaneUniqueId FROM @BadAirplaneUniqueIds);
DELETE FROM [dbo].[AgSubscriptions]
WHERE AirplaneUniqueId IN (SELECT AirplaneUniqueId FROM @BadAirplaneUniqueIds);
DELETE FROM [dbo].[AgTransferCodes]
WHERE AirplaneUniqueId IN (SELECT AirplaneUniqueId FROM @BadAirplaneUniqueIds);
DELETE FROM [dbo].[AgWbConfigs]
WHERE AirplaneUniqueId IN (SELECT AirplaneUniqueId FROM @BadAirplaneUniqueIds);
DELETE FROM [dbo].[AgWbEntries]
WHERE AirplaneUniqueId IN (SELECT AirplaneUniqueId FROM @BadAirplaneUniqueIds);
DELETE FROM [dbo].[AgWbEquipLists]
WHERE AirplaneUniqueId IN (SELECT AirplaneUniqueId FROM @BadAirplaneUniqueIds);

DELETE FROM [dbo].[AgAirplanes]
WHERE LinkedAccount NOT IN (SELECT AccountId FROM @AccountIds);
ALTER TABLE [dbo].[AgAirplanes] ADD CONSTRAINT [AgAirplanes_LinkedAccount_fkey] FOREIGN KEY ([LinkedAccount]) REFERENCES [dbo].[AgAccounts]([ID]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[AgSubscriptions] ADD CONSTRAINT [AgSubscriptions_AccountId_fkey] FOREIGN KEY ([AccountId]) REFERENCES [dbo].[AgAccounts]([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
DELETE FROM [dbo].[AgWbEquipLists]
WHERE LinkedAccount NOT IN (SELECT AccountId FROM @AccountIds);
ALTER TABLE [dbo].[AgWbEquipLists] ADD CONSTRAINT [AgWbEquipLists_LinkedAccount_fkey] FOREIGN KEY ([LinkedAccount]) REFERENCES [dbo].[AgAccounts]([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
