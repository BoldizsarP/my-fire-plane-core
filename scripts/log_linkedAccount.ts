import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();
prismaClient.$connect();
async function main() {
  const AccountIds = (
    await prismaClient.agAccounts.findMany({
      select: { ID: true },
    })
  ).map((ar) => ar.ID);
  //   AgAdditionalUsers
  const linkedAccountMatched = await prismaClient.agAdditionalUsers.count({
    where: { linkedAccount: { in: AccountIds } },
  });
  const linkedAccountUnMatched = await prismaClient.agAdditionalUsers.count({
    where: { linkedAccount: { notIn: AccountIds } },
  });
  console.log(
    `AgAdditionalUsers: matched ${linkedAccountMatched} - unmatched ${linkedAccountUnMatched} out of ${await prismaClient.agAdditionalUsers.count()}`
  );
  //   AgAirplanes
  const AgAirplanesMatched = await prismaClient.agAirplanes.count({
    where: { LinkedAccount: { in: AccountIds } },
  });
  const AgAirplanesUnMatched = await prismaClient.agAirplanes.count({
    where: { LinkedAccount: { notIn: AccountIds } },
  });
  const AgAirplanesUnMatchedHasRelation = await prismaClient.agAirplanes.count({
    where: {
      LinkedAccount: { notIn: AccountIds },
      OR: [
        { AgAirplaneSquawks: { some: {} } },
        { AgCounters: { some: {} } },
        { AgCycles: { some: {} } },
        { AgEngineRuns: { some: {} } },
        { AgInterfaceOps: { some: {} } },
        { AgMfratEntries: { some: {} } },
        { AgPerfEntries: { some: {} } },
        { AgSubscriptionRedemptions: { some: {} } },
        { AgSubscriptions: { some: {} } },
        { AgTransferCodes: { some: {} } },
        { AgWbConfigs: { some: {} } },
        { AgWbEntries: { some: {} } },
        { AgWbEquipLists: { some: {} } },
      ],
    },
  });
  console.log(
    `AgAirplanes: matched ${AgAirplanesMatched} - unmatched ${AgAirplanesUnMatched} out of ${await prismaClient.agAirplanes.count()}`
  );
  console.log(
    `AgAirplanes: unmatched with orphan data ${AgAirplanesUnMatchedHasRelation} out of ${await prismaClient.agAirplanes.count()}`
  );
  //   AgWbEquipLists
  const AgWbEquipListsMatched = await prismaClient.agWbEquipLists.count({
    where: { LinkedAccount: { in: AccountIds } },
  });
  const AgWbEquipListsUnMatched = await prismaClient.agWbEquipLists.count({
    where: { LinkedAccount: { notIn: AccountIds } },
  });
  console.log(
    `AgWbEquipLists: matched ${AgWbEquipListsMatched} - unmatched ${AgWbEquipListsUnMatched} out of ${await prismaClient.agWbEquipLists.count()}`
  );
}
if (require.main === module) {
  void main()
    .then(() => {
      prismaClient.$disconnect();
      console.log("Unassigned AccountId related entities are logges");
    })
    .catch((err) => {
      prismaClient.$disconnect();
      console.error(`Logging unassigned entities failed at ${err} `);
    });
}
