import { FastifyInstance } from "fastify"
import * as controller from "@/main/factories/application/controllers"
import { adaptFastifyRoute } from "@/main/adapters/fastify-router"
import { fileHandle as fileHandleUpload } from "@/main/middlewares"

export default async function Main(app: FastifyInstance) {
  // app.get("/", adaptFastifyRoute(controller.makeTestController()))
  app.post("/upload", fileHandleUpload, adaptFastifyRoute(controller.makeTestController()))
  // app.route({
  //   method: "POST",
  //   url: "/upload",
  //   preHandler: multer().single("file"),
  //   handler: adaptFastifyRoute(controller.makeTestController())
  // })
}
