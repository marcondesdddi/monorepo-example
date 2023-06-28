import { FastifyInstance, FastifyPluginAsync } from "fastify"
import * as controller from "@/main/factories/application/controllers"
import { adaptFastifyRoute } from "@/main/adapters/fastify-router"
import { fileHandle as fileHandleUpload } from "@/main/middlewares"

const main: FastifyPluginAsync = async (app: FastifyInstance): Promise<void> => {
  app.get("/", adaptFastifyRoute(controller.makeTestController()))
  app.post("/upload", fileHandleUpload, adaptFastifyRoute(controller.makeTestController()))
}

export default main
