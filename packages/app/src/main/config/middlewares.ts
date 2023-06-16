import { FastifyInstance } from "fastify"
import cors from "@fastify/cors"
import helmet from "@fastify/helmet"
import healthCheck from "fastify-healthcheck"
import formBody from "@fastify/formbody"

export const setupMiddleware = (app: FastifyInstance): void => {
  app.register(cors)
  app.register(helmet)
  app.register(healthCheck)
  app.register(formBody)
}
