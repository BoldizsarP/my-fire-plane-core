BEGIN TRY

BEGIN TRAN;

DECLARE @AccountIds TABLE (AccountId INT);

INSERT INTO @AccountIds (AccountId)
SELECT ID FROM [dbo].[AgAccounts];

-- AddForeignKey
DELETE FROM [dbo].[AgAirplaneSquawks]
WHERE AccountNumber NOT IN (SELECT AccountId FROM @AccountIds);
ALTER TABLE [dbo].[AgAirplaneSquawks] ADD CONSTRAINT [AgAirplaneSquawks_AccountNumber_fkey] FOREIGN KEY ([AccountNumber]) REFERENCES [dbo].[AgAccounts]([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
DELETE FROM [dbo].[AgNotifications]
WHERE AccountNumber NOT IN (SELECT AccountId FROM @AccountIds);
ALTER TABLE [dbo].[AgNotifications] ADD CONSTRAINT [AgNotifications_AccountNumber_fkey] FOREIGN KEY ([AccountNumber]) REFERENCES [dbo].[AgAccounts]([ID]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
DELETE FROM [dbo].[AgQuizAssignments]
WHERE AccountNumber NOT IN (SELECT AccountId FROM @AccountIds);
ALTER TABLE [dbo].[AgQuizAssignments] ADD CONSTRAINT [AgQuizAssignments_AccountNumber_fkey] FOREIGN KEY ([AccountNumber]) REFERENCES [dbo].[AgAccounts]([ID]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
DELETE FROM [dbo].[AgQuizAttempts]
WHERE AccountNumber NOT IN (SELECT AccountId FROM @AccountIds);
ALTER TABLE [dbo].[AgQuizAttempts] ADD CONSTRAINT [AgQuizAttempts_AccountNumber_fkey] FOREIGN KEY ([AccountNumber]) REFERENCES [dbo].[AgAccounts]([ID]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
DELETE FROM [dbo].[AgQuizes]
WHERE AccountNumber NOT IN (SELECT AccountId FROM @AccountIds);
ALTER TABLE [dbo].[AgQuizes] ADD CONSTRAINT [AgQuizes_AccountNumber_fkey] FOREIGN KEY ([AccountNumber]) REFERENCES [dbo].[AgAccounts]([ID]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
DELETE FROM [dbo].[AgQuizQuestions]
WHERE AccountNumber NOT IN (SELECT AccountId FROM @AccountIds);
ALTER TABLE [dbo].[AgQuizQuestions] ADD CONSTRAINT [AgQuizQuestions_AccountNumber_fkey] FOREIGN KEY ([AccountNumber]) REFERENCES [dbo].[AgAccounts]([ID]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
DELETE FROM [dbo].[AgQuizUserAssignments]
WHERE AccountNumber NOT IN (SELECT AccountId FROM @AccountIds);
ALTER TABLE [dbo].[AgQuizUserAssignments] ADD CONSTRAINT [AgQuizUserAssignments_AccountNumber_fkey] FOREIGN KEY ([AccountNumber]) REFERENCES [dbo].[AgAccounts]([ID]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
DELETE FROM [dbo].[AgStripePaymentIntents]
WHERE AccountNumber NOT IN (SELECT AccountId FROM @AccountIds);
ALTER TABLE [dbo].[AgStripePaymentIntents] ADD CONSTRAINT [AgStripePaymentIntents_AccountNumber_fkey] FOREIGN KEY ([AccountNumber]) REFERENCES [dbo].[AgAccounts]([ID]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
DELETE FROM [dbo].[AgStripePayments]
WHERE AccountNumber NOT IN (SELECT AccountId FROM @AccountIds);
ALTER TABLE [dbo].[AgStripePayments] ADD CONSTRAINT [AgStripePayments_AccountNumber_fkey] FOREIGN KEY ([AccountNumber]) REFERENCES [dbo].[AgAccounts]([ID]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
DELETE FROM [dbo].[AgSubscriptionRedemptions]
WHERE AccountNumber NOT IN (SELECT AccountId FROM @AccountIds);
ALTER TABLE [dbo].[AgSubscriptionRedemptions] ADD CONSTRAINT [AgSubscriptionRedemptions_AccountNumber_fkey] FOREIGN KEY ([AccountNumber]) REFERENCES [dbo].[AgAccounts]([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
DELETE FROM [dbo].[AgTrainingConfigs]
WHERE AccountNumber NOT IN (SELECT AccountId FROM @AccountIds);
ALTER TABLE [dbo].[AgTrainingConfigs] ADD CONSTRAINT [AgTrainingConfigs_AccountNumber_fkey] FOREIGN KEY ([AccountNumber]) REFERENCES [dbo].[AgAccounts]([ID]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
