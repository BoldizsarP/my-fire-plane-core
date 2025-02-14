import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();
prismaClient.$connect();
async function main() {
  const AccountIds = (
    await prismaClient.agAccounts.findMany({
      select: { ID: true },
    })
  ).map((ar) => ar.ID);
  //   agAirplaneSquawks
  const AccountIdsMatched = await prismaClient.agSubscriptions.count({
    where: { AccountId: { in: AccountIds } },
  });
  const AccountIdsUnMatched = await prismaClient.agSubscriptions.count({
    where: { AccountId: { notIn: AccountIds } },
  });
  console.log(
    `AccountIds: matched ${AccountIdsMatched} - unmatched ${AccountIdsUnMatched} out of ${await prismaClient.agSubscriptions.count()}`
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
