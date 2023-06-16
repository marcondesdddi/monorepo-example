import { FastifyInstance } from "fastify"

export default async function Main(app: FastifyInstance) {
  app.get("/", async (request, reply) => {
    return reply.send({ msg: "Hello World2!!" })
  })
}
