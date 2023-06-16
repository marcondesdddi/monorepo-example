import { FastifyInstance } from "fastify"
import * as controller from "@/main/factories/application/controllers"
import { adaptFastifyRoute } from "@/main/adapters/fastify-router"

export default async function Main(app: FastifyInstance) {
  app.get("/", adaptFastifyRoute(controller.makeTestController()))
}
