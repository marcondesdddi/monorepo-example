import { setupRoutes } from "@/main/config/routes"
import Fastify from "fastify"

const app = Fastify({ logger: false })
setupRoutes(app)

export { app }
