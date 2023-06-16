import { FastifyInstance } from "fastify"
import cors from "@fastify/cors"

export const setupMiddleware = (app: FastifyInstance): void => {
  app.register(cors)
}
