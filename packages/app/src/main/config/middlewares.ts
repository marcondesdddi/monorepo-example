import { FastifyInstance } from "fastify"
import cors from "@fastify/cors"
import helmet from "@fastify/helmet"

export const setupMiddleware = (app: FastifyInstance): void => {
  app.register(cors)
  app.register(helmet)
}
