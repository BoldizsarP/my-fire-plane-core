// src/app.ts
import express, {
  json,
  urlencoded,
  Response as ExResponse,
  Request as ExRequest,
} from "express";
import { RegisterRoutes } from "../generated/routes";
import swaggerUi from "swagger-ui-express";

export const app = express();

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

RegisterRoutes(app);

app.use(
  "/docs",
  swaggerUi.serve,
  async (_req: ExRequest, res: ExResponse): Promise<void> => {
    res.send(swaggerUi.generateHTML(await import("../generated/swagger.json")));
  }
);
