// src/app.ts
import express, {
  json,
  urlencoded,
  Response as ExResponse,
  Request as ExRequest,
  ErrorRequestHandler,
} from "express";
import { RegisterRoutes } from "../generated/routes";
import swaggerUi from "swagger-ui-express";
import { ValidateError } from "tsoa";

export const app = express();

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

RegisterRoutes(app);

// Adding Swagger UI as devtool
app.use(
  "/docs",
  swaggerUi.serve,
  async (_req: ExRequest, res: ExResponse): Promise<void> => {
    res.send(swaggerUi.generateHTML(await import("../generated/swagger.json")));
  }
);

// Not Found 404 errors:
app.use(function notFoundHandler(_req, res: ExResponse) {
  res.status(404).send({
    message: "Not Found",
  });
});

// Catch-all error handling
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    res.status(422).json({
      message: "Validation Failed",
      details: err?.fields,
    });
    return;
  }
  if (err instanceof Error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
    return;
  }

  next();
};
app.use(errorHandler);
