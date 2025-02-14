BEGIN TRY

BEGIN TRAN;
DECLARE @AccountIds TABLE (AccountId INT);

INSERT INTO @AccountIds (AccountId)
SELECT ID FROM [dbo].[AgAccounts];

-- AddForeignKey
DELETE FROM [dbo].[AgSubscriptions]
WHERE AccountId NOT IN (SELECT AccountId FROM @AccountIds);
ALTER TABLE [dbo].[AgSubscriptions] ADD CONSTRAINT [AgSubscriptions_AccountId_fkey] FOREIGN KEY ([AccountId]) REFERENCES [dbo].[AgAccounts]([ID]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
