import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();
prismaClient.$connect();
async function main() {
  const activeAirplaneUniqueIds = (
    await prismaClient.agAirplanes.findMany({
      select: { AirplaneUniqueId: true },
    })
  ).map((ar) => ar.AirplaneUniqueId);
  //   agAirplaneSquawks
  const AgAirplaneSquawksMatched = await prismaClient.agAirplaneSquawks.count({
    where: { AirplaneUniqueId: { in: activeAirplaneUniqueIds } },
  });
  const AgAirplaneSquawksUnMatched = await prismaClient.agAirplaneSquawks.count(
    {
      where: { AirplaneUniqueId: { notIn: activeAirplaneUniqueIds } },
    }
  );
  console.log(
    `agAirplaneSquawks: matched ${AgAirplaneSquawksMatched} - unmatched ${AgAirplaneSquawksUnMatched} out of ${await prismaClient.agAirplaneSquawks.count()}`
  );
  //   agCounters
  const AgCountersMatched = await prismaClient.agCounters.count({
    where: { AirplaneUniqueId: { in: activeAirplaneUniqueIds } },
  });
  const AgCountersUnMatched = await prismaClient.agCounters.count({
    where: { AirplaneUniqueId: { notIn: activeAirplaneUniqueIds } },
  });
  console.log(
    `AgCounters: matched ${AgCountersMatched} - unmatched ${AgCountersUnMatched} out of ${await prismaClient.agCounters.count()}`
  );
  //   AgCycles
  const AgCyclesMatched = await prismaClient.agCycles.count({
    where: { AirplaneUniqueId: { in: activeAirplaneUniqueIds } },
  });
  const AgCyclesUnMatched = await prismaClient.agCycles.count({
    where: { AirplaneUniqueId: { notIn: activeAirplaneUniqueIds } },
  });
  console.log(
    `AgCycles: matched ${AgCyclesMatched} - unmatched ${AgCyclesUnMatched} out of ${await prismaClient.agCycles.count()}`
  );
  //   AgEngineRuns
  const AgEngineRunsMatched = await prismaClient.agEngineRuns.count({
    where: { AirplaneUniqueId: { in: activeAirplaneUniqueIds } },
  });
  const AgEngineRunsUnMatched = await prismaClient.agEngineRuns.count({
    where: { AirplaneUniqueId: { notIn: activeAirplaneUniqueIds } },
  });
  console.log(
    `AgEngineRuns: matched ${AgEngineRunsMatched} - unmatched ${AgEngineRunsUnMatched} out of ${await prismaClient.agEngineRuns.count()}`
  );
  //   AgInterfaceOps
  const AgInterfaceOpsMatched = await prismaClient.agInterfaceOps.count({
    where: { AirplaneUniqueId: { in: activeAirplaneUniqueIds } },
  });
  const AgInterfaceOpsUnMatched = await prismaClient.agInterfaceOps.count({
    where: { AirplaneUniqueId: { notIn: activeAirplaneUniqueIds } },
  });
  console.log(
    `AgInterfaceOps: matched ${AgInterfaceOpsMatched} - unmatched ${AgInterfaceOpsUnMatched} out of ${await prismaClient.agInterfaceOps.count()}`
  );
  //   AgMfratEntries
  const AgMfratEntriesMatched = await prismaClient.agMfratEntries.count({
    where: { AirplaneUniqueId: { in: activeAirplaneUniqueIds } },
  });
  const AgMfratEntriesUnMatched = await prismaClient.agMfratEntries.count({
    where: { AirplaneUniqueId: { notIn: activeAirplaneUniqueIds } },
  });
  console.log(
    `AgMfratEntries: matched ${AgMfratEntriesMatched} - unmatched ${AgMfratEntriesUnMatched} out of ${await prismaClient.agMfratEntries.count()}`
  );
  //   AgSubscriptionRedemptions
  const AgSubscriptionRedemptionsMatched =
    await prismaClient.agSubscriptionRedemptions.count({
      where: { AirplaneUniqueId: { in: activeAirplaneUniqueIds } },
    });
  const AgSubscriptionRedemptionsUnMatched =
    await prismaClient.agSubscriptionRedemptions.count({
      where: { AirplaneUniqueId: { notIn: activeAirplaneUniqueIds } },
    });
  console.log(
    `AgSubscriptionRedemptions: matched ${AgSubscriptionRedemptionsMatched} - unmatched ${AgSubscriptionRedemptionsUnMatched} out of ${await prismaClient.agSubscriptionRedemptions.count()}`
  );
  //   AgSubscriptions
  const AgSubscriptionsMatched = await prismaClient.agSubscriptions.count({
    where: { AirplaneUniqueId: { in: activeAirplaneUniqueIds } },
  });
  const AgSubscriptionsUnMatched = await prismaClient.agSubscriptions.count({
    where: { AirplaneUniqueId: { notIn: activeAirplaneUniqueIds } },
  });
  console.log(
    `AgSubscriptions: matched ${AgSubscriptionsMatched} - unmatched ${AgSubscriptionsUnMatched} out of ${await prismaClient.agSubscriptions.count()}`
  );
  //   AgTransferCodes
  const AgTransferCodesMatched = await prismaClient.agTransferCodes.count({
    where: { AirplaneUniqueId: { in: activeAirplaneUniqueIds } },
  });
  const AgTransferCodesUnMatched = await prismaClient.agTransferCodes.count({
    where: { AirplaneUniqueId: { notIn: activeAirplaneUniqueIds } },
  });
  console.log(
    `AgTransferCodes: matched ${AgTransferCodesMatched} - unmatched ${AgTransferCodesUnMatched} out of ${await prismaClient.agTransferCodes.count()}`
  );
  //   AgWbConfigs
  const AgWbConfigsMatched = await prismaClient.agWbConfigs.count({
    where: { AirplaneUniqueId: { in: activeAirplaneUniqueIds } },
  });
  const AgWbConfigsUnMatched = await prismaClient.agWbConfigs.count({
    where: { AirplaneUniqueId: { notIn: activeAirplaneUniqueIds } },
  });
  console.log(
    `AgWbConfigs: matched ${AgWbConfigsMatched} - unmatched ${AgWbConfigsUnMatched} out of ${await prismaClient.agWbConfigs.count()}`
  );
  //   AgWbEntries
  const AgWbEntriesMatched = await prismaClient.agWbEntries.count({
    where: { AirplaneUniqueId: { in: activeAirplaneUniqueIds } },
  });
  const AgWbEntriesUnMatched = await prismaClient.agWbEntries.count({
    where: { AirplaneUniqueId: { notIn: activeAirplaneUniqueIds } },
  });
  console.log(
    `AgWbEntries: matched ${AgWbEntriesMatched} - unmatched ${AgWbEntriesUnMatched} out of ${await prismaClient.agWbEntries.count()}`
  );
  //   AgWbEquipLists
  const AgWbEquipListsMatched = await prismaClient.agWbEquipLists.count({
    where: { AirplaneUniqueId: { in: activeAirplaneUniqueIds } },
  });
  const AgWbEquipListsUnMatched = await prismaClient.agWbEquipLists.count({
    where: { AirplaneUniqueId: { notIn: activeAirplaneUniqueIds } },
  });
  console.log(
    `AgWbEquipLists: matched ${AgWbEquipListsMatched} - unmatched ${AgWbEquipListsUnMatched} out of ${await prismaClient.agWbEquipLists.count()}`
  );
}
if (require.main === module) {
  void main()
    .then(() => {
      prismaClient.$disconnect();
      console.log("Unassigned Aircraft related entities are logges");
    })
    .catch((err) => {
      prismaClient.$disconnect();
      console.error(`Logging unassigned entities failed at ${err} `);
    });
}
