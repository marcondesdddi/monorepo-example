import { FastifyInstance } from "fastify"
import autoload from "@fastify/autoload"
import path from "path"

export const setupRoutes = (app: FastifyInstance): void => {
  const pathRoutes = process.env.NODE_ENV === "dev" ? "../routes" : "main/routes"
  app.register(autoload, {
    dir: path.join(__dirname, pathRoutes)
  })
}
