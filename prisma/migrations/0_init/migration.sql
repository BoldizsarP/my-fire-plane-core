BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[__MigrationHistory] (
    [MigrationId] NVARCHAR(150) NOT NULL,
    [ContextKey] NVARCHAR(300) NOT NULL,
    [Model] VARBINARY(max) NOT NULL,
    [ProductVersion] NVARCHAR(32) NOT NULL,
    CONSTRAINT [PK_dbo.__MigrationHistory] PRIMARY KEY CLUSTERED ([MigrationId],[ContextKey])
);

-- CreateTable
CREATE TABLE [dbo].[AgAccounts] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [AccountEmail] VARCHAR(250) NOT NULL,
    [WebDashboardPassword] VARCHAR(50) NOT NULL,
    [LogoUrl] VARCHAR(250),
    [LogoVersion] INT,
    [CreatedDateTime] DATETIME,
    [PremiumRequest] VARCHAR(500)
);

-- CreateTable
CREATE TABLE [dbo].[AgAdditionalUsers] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [UserName] VARCHAR(100) NOT NULL,
    [ActualName] VARCHAR(100) NOT NULL,
    [Email] VARCHAR(100),
    [Password] VARCHAR(50) NOT NULL,
    [linkedAccount] INT NOT NULL,
    [PermissionsData] VARCHAR(250),
    [isUserDeleted] BIT
);

-- CreateTable
CREATE TABLE [dbo].[AgAirplanes] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [RegistrationNumber] VARCHAR(50) NOT NULL,
    [SerialNumber] VARCHAR(50) NOT NULL,
    [AircraftType] VARCHAR(50) NOT NULL,
    [EngineType] VARCHAR(50) NOT NULL,
    [AirplaneUniqueId] VARCHAR(50) NOT NULL,
    [LinkedAccount] INT NOT NULL,
    [isUserDeleted] BIT NOT NULL,
    [LiquidUnits] VARCHAR(50),
    [DisplayColor] VARCHAR(50),
    [AirplaneName] VARCHAR(50),
    [PerformanceConfig] VARCHAR(250),
    [HobbsCorrection] VARCHAR(250),
    [Interfaces] VARCHAR(250),
    [CustomCounterDefs] VARCHAR(5000)
);

-- CreateTable
CREATE TABLE [dbo].[AgAirplaneSquawks] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [AirplaneUniqueId] VARCHAR(50) NOT NULL,
    [AccountNumber] INT NOT NULL,
    [SquawkSummary] VARCHAR(250) NOT NULL,
    [SquawkedBy] VARCHAR(250) NOT NULL,
    [SquawkedOn] DATETIME NOT NULL,
    [Urgency] INT NOT NULL,
    [SquawkJson] VARCHAR(max),
    [ClosedBy] VARCHAR(250),
    [ClosedOn] DATETIME,
    [ClosedJson] VARCHAR(max),
    [isUserDeleted] BIT,
    [DeferredBy] VARCHAR(250),
    [DeferredOn] DATETIME,
    [DeferredJson] VARCHAR(max)
);

-- CreateTable
CREATE TABLE [dbo].[AgCounters] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [AirplaneUniqueId] VARCHAR(50) NOT NULL,
    [RecordType] VARCHAR(20) NOT NULL,
    [ActionType] VARCHAR(20) NOT NULL,
    [ActionValue] FLOAT(53) NOT NULL,
    [RecordDateTime] DATETIME NOT NULL,
    [IsMobileEntry] BIT,
    [MobileEntryDateTime] DATETIME,
    [EntryUser] VARCHAR(50)
);

-- CreateTable
CREATE TABLE [dbo].[AgCycles] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [AirplaneUniqueId] VARCHAR(50) NOT NULL,
    [isInitialized] BIT NOT NULL,
    [RecordDate] DATETIME NOT NULL,
    [JsonData] VARCHAR(max)
);

-- CreateTable
CREATE TABLE [dbo].[AgEngineRuns] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [AirplaneUniqueId] VARCHAR(50) NOT NULL,
    [Altitude] FLOAT(53) NOT NULL,
    [Temperature] FLOAT(53) NOT NULL,
    [TargetTorque] FLOAT(53) NOT NULL,
    [NgRef] FLOAT(53) NOT NULL,
    [IttRef] FLOAT(53) NOT NULL,
    [WfRef] FLOAT(53) NOT NULL,
    [Ng] FLOAT(53) NOT NULL,
    [Itt] FLOAT(53) NOT NULL,
    [Wf] FLOAT(53) NOT NULL,
    [RecordDateTime] DATETIME NOT NULL,
    [isUserDeleted] BIT
);

-- CreateTable
CREATE TABLE [dbo].[AgInterfaceOps] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [AirplaneUniqueId] VARCHAR(50) NOT NULL,
    [OpDateTime] DATETIME NOT NULL,
    [InterfaceName] VARCHAR(50) NOT NULL,
    [OpType] VARCHAR(50) NOT NULL,
    [OpResult] VARCHAR(50) NOT NULL,
    [JsonData] VARCHAR(max) NOT NULL
);

-- CreateTable
CREATE TABLE [dbo].[AgMfratEntries] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [AirplaneUniqueId] VARCHAR(50) NOT NULL,
    [SavedDateTime] DATETIME NOT NULL,
    [JsonData] VARCHAR(max) NOT NULL,
    [CreatedBy] VARCHAR(200) NOT NULL
);

-- CreateTable
CREATE TABLE [dbo].[AgNotifications] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [DistributionType] VARCHAR(50) NOT NULL,
    [CreationDateTime] DATETIME NOT NULL,
    [ExpiryDateTime] DATETIME NOT NULL,
    [AccountNumber] INT NOT NULL,
    [DeviceKey] VARCHAR(50) NOT NULL,
    [NotificationSimpleText] VARCHAR(max),
    [NotificationHtml] VARCHAR(max)
);

-- CreateTable
CREATE TABLE [dbo].[AgPerfEntries] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [AirplaneUniqueId] VARCHAR(50) NOT NULL,
    [SavedDateTime] DATETIME NOT NULL,
    [JsonData] VARCHAR(max) NOT NULL,
    [CreatedBy] VARCHAR(200) NOT NULL
);

-- CreateTable
CREATE TABLE [dbo].[AgQuizAssignments] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [AccountNumber] INT NOT NULL,
    [SavedDateTime] DATETIME NOT NULL,
    [DueDate] DATETIME NOT NULL,
    [AssignmentName] VARCHAR(200) NOT NULL,
    [AssignedBy] VARCHAR(200) NOT NULL,
    [IsComplete] BIT NOT NULL,
    [QuizIDs] VARCHAR(500) NOT NULL,
    [AssignedUsers] VARCHAR(2000) NOT NULL
);

-- CreateTable
CREATE TABLE [dbo].[AgQuizAttempts] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [AccountNumber] INT NOT NULL,
    [SavedDateTime] DATETIME NOT NULL,
    [JsonData] VARCHAR(max) NOT NULL,
    [AttemptUser] VARCHAR(200) NOT NULL,
    [IsUserDeleted] BIT NOT NULL,
    [IsUserAvailable] BIT NOT NULL,
    [NumQuestions] INT NOT NULL,
    [NumQuestionsCorrect] INT NOT NULL,
    [QuizID] INT NOT NULL,
    [AssignmentID] INT NOT NULL
);

-- CreateTable
CREATE TABLE [dbo].[AgQuizes] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [AccountNumber] INT NOT NULL,
    [SavedDateTime] DATETIME NOT NULL,
    [JsonData] VARCHAR(max) NOT NULL,
    [CreatedBy] VARCHAR(200) NOT NULL,
    [Category] VARCHAR(200) NOT NULL,
    [IsUserDeleted] BIT,
    [IsUserAvailable] BIT
);

-- CreateTable
CREATE TABLE [dbo].[AgQuizQuestions] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [AccountNumber] INT NOT NULL,
    [SavedDateTime] DATETIME NOT NULL,
    [JsonData] VARCHAR(max) NOT NULL,
    [CreatedBy] VARCHAR(200) NOT NULL,
    [Category] VARCHAR(200) NOT NULL
);

-- CreateTable
CREATE TABLE [dbo].[AgQuizUserAssignments] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [AccountNumber] INT NOT NULL,
    [UserName] VARCHAR(200) NOT NULL,
    [AssignmentID] INT NOT NULL,
    [QuizID] INT NOT NULL,
    [DueDate] DATETIME NOT NULL,
    [IsComplete] BIT NOT NULL
);

-- CreateTable
CREATE TABLE [dbo].[AgStripePaymentIntents] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [AccountNumber] INT NOT NULL,
    [DateCreated] DATE NOT NULL,
    [PaymentIntentId] VARCHAR(250) NOT NULL,
    [PaymentAmountCents] INT NOT NULL,
    [CartItemsJson] VARCHAR(max) NOT NULL,
    [ChargeCompleted] BIT,
    [IgnoreRecord] BIT,
    [ChargeId] VARCHAR(250)
);

-- CreateTable
CREATE TABLE [dbo].[AgStripePayments] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [ChargeDateTime] DATE NOT NULL,
    [chargeJson] VARCHAR(max) NOT NULL,
    [AccountNumber] INT NOT NULL
);

-- CreateTable
CREATE TABLE [dbo].[AgSubscriptionRedemptions] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [AccountNumber] INT NOT NULL,
    [RedemptionDateTime] DATETIME NOT NULL,
    [PaymentIntentId] VARCHAR(250) NOT NULL,
    [ChargeId] VARCHAR(250) NOT NULL,
    [AirplaneUniqueId] VARCHAR(50) NOT NULL,
    [BeforeRedemptionSubscriptionType] VARCHAR(50) NOT NULL,
    [BeforeRedemptionBeginDateTime] DATETIME NOT NULL,
    [BeforeRedemptionEndDateTime] DATETIME NOT NULL,
    [AfterRedemptionSubscriptionType] VARCHAR(50) NOT NULL,
    [AfterRedemptionBeginDateTime] DATETIME NOT NULL,
    [AfterRedemptionEndDateTime] DATETIME NOT NULL,
    [RedemptionTrigger] VARCHAR(50) NOT NULL
);

-- CreateTable
CREATE TABLE [dbo].[AgSubscriptions] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [AccountId] INT NOT NULL,
    [SubscriptionType] VARCHAR(50) NOT NULL,
    [BeginDateTime] DATETIME NOT NULL,
    [EndDateTime] DATETIME NOT NULL,
    [AirplaneSerialNumber] VARCHAR(50),
    [AirplaneRegistrationNumber] VARCHAR(50),
    [AirplaneUniqueId] VARCHAR(50),
    [UniqueId] VARCHAR(50) NOT NULL
);

-- CreateTable
CREATE TABLE [dbo].[AgTrainingConfigs] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [AccountNumber] INT NOT NULL,
    [SavedDateTime] DATETIME NOT NULL,
    [JsonData] VARCHAR(max) NOT NULL,
    [AdminList] VARCHAR(500) NOT NULL
);

-- CreateTable
CREATE TABLE [dbo].[AgTransferCodes] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [CodeUniqueId] VARCHAR(20) NOT NULL,
    [AirplaneUniqueId] VARCHAR(50) NOT NULL,
    [OriginAccount] INT NOT NULL,
    [CodeCreatedDateTime] DATE NOT NULL,
    [CodeExpiryDateTime] DATE NOT NULL,
    [HasBeenClaimed] BIT NOT NULL
);

-- CreateTable
CREATE TABLE [dbo].[AgWbConfigs] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [AirplaneUniqueId] VARCHAR(50) NOT NULL,
    [ConfigDateTime] DATETIME NOT NULL,
    [JsonData] VARCHAR(max) NOT NULL,
    [IsUserDeleted] BIT
);

-- CreateTable
CREATE TABLE [dbo].[AgWbEntries] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [AirplaneUniqueId] VARCHAR(50) NOT NULL,
    [SavedDateTime] DATETIME NOT NULL,
    [JsonData] VARCHAR(max) NOT NULL,
    [CreatedBy] VARCHAR(200) NOT NULL,
    [IsUserDeleted] BIT
);

-- CreateTable
CREATE TABLE [dbo].[AgWbEquipLists] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [UniqueId] VARCHAR(50) NOT NULL,
    [AirplaneUniqueId] VARCHAR(50) NOT NULL,
    [LinkedAccount] INT NOT NULL,
    [ConfigDateTime] DATETIME NOT NULL,
    [JsonData] VARCHAR(max) NOT NULL
);

-- CreateTable
CREATE TABLE [dbo].[FaaAirportData] (
    [SiteNumber] VARCHAR(50),
    [State] VARCHAR(50),
    [BaseEndId] VARCHAR(50),
    [RunwayLength] VARCHAR(50),
    [RunwayWidth] VARCHAR(50),
    [BaseEndTrueAlignment] VARCHAR(50),
    [BaseEndPhysicalLatitude] VARCHAR(50),
    [BaseEndPhysicalLongitude] VARCHAR(50),
    [BaseEndPhysicalElevation] VARCHAR(50),
    [ReciprocalEndID] VARCHAR(50),
    [ReciprocalEndTrueAlignment] VARCHAR(50),
    [ReciprocalEndPhysicalLatitude] VARCHAR(50),
    [ReciprocalEndPhysicalLongitude] VARCHAR(50),
    [ReciprocalEndPhysicalElevation] VARCHAR(50),
    [LocationID] VARCHAR(50),
    [County] VARCHAR(50),
    [City] VARCHAR(50),
    [FacilityName] VARCHAR(50),
    [ARPLatitude] VARCHAR(50),
    [ARPLongitude] VARCHAR(50),
    [ARPElevation] VARCHAR(50),
    [IcaoIdentifier] VARCHAR(50),
    [Column 22] VARCHAR(50)
);

-- CreateTable
CREATE TABLE [dbo].[FleetReports] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [UniqueId] VARCHAR(20) NOT NULL,
    [ReportType] VARCHAR(20) NOT NULL,
    [JsonData] VARCHAR(max) NOT NULL,
    [ReportDateTime] DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE [dbo].[NonFaaAirports] (
    [ident] NVARCHAR(50) NOT NULL,
    [type] NVARCHAR(50) NOT NULL,
    [name] NVARCHAR(100) NOT NULL,
    [latitude_deg] FLOAT(53) NOT NULL,
    [longitude_deg] FLOAT(53) NOT NULL,
    [elevation_ft] INT,
    [continent] NVARCHAR(50) NOT NULL,
    [iso_country] NVARCHAR(50) NOT NULL,
    [iso_region] NVARCHAR(50) NOT NULL,
    [scheduled_service] NVARCHAR(50) NOT NULL,
    [gps_code] NVARCHAR(50),
    [iata_code] NVARCHAR(50)
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH

