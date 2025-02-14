import { AgAirplaneSquawks } from "@prisma/client";
import { Serialize } from "../type-helpers/serializer";

type GetSquawksResult = {
  IsOpenSquawks: boolean;
  squawks: Serialize<AgAirplaneSquawks>[];
};
