import { FastifyInstance } from "fastify"

export default async function User(app: FastifyInstance) {
  app.get("/user", async (request, reply) => {
    return reply.send({ msg: "Usuario" })
  })
}
