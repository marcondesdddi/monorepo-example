import { setupMiddleware } from "@/main/config/middlewares"
import { setupRoutes } from "@/main/config/routes"
import Fastify from "fastify"

const app = Fastify({ logger: false })

setupMiddleware(app)
setupRoutes(app)

export { app }
