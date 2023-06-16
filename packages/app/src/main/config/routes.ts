import { FastifyInstance } from "fastify"
import Autoload from "@fastify/autoload"
import path from "path"

export const setupRoutes = (app: FastifyInstance): void => {
  app.register(Autoload, {
    dir: path.join(__dirname, "../routes")
  })
}
