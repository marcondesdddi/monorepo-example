import { createYoga, createSchema } from "graphql-yoga"
import fastify from "fastify"
import { createServer } from "node:http"
import { Resolvers } from "./resolvers-types"
import { readFileSync } from "fs"
import { useResponseCache } from "@envelop/response-cache"

const app = fastify({ logger: true })

const typeDefs = readFileSync("./schema.graphql", "utf8")

const resolvers: Resolvers = {
  Query: {
    users: () => [
      {
        id: 1,
        name: "Lucas"
      },
      {
        id: 2,
        name: "Maria"
      }
    ]
  }
}

const schema = createSchema({ typeDefs, resolvers })

const yoga = createYoga({
  schema,
  cors: {
    origin: "*",
    credentials: false
  },
  logging: {
    debug: (...args) => args.forEach((arg) => app.log.debug(arg)),
    info: (...args) => args.forEach((arg) => app.log.info(arg)),
    warn: (...args) => args.forEach((arg) => app.log.warn(arg)),
    error: (...args) => args.forEach((arg) => app.log.error(arg))
  },
  plugins: [useResponseCache({ session: () => null })]
})

app.route({
  url: yoga.graphqlEndpoint,
  method: ["GET", "POST", "OPTIONS"],
  handler: async (req, reply) => {
    const response = await yoga.handleNodeRequest(req, {
      req,
      reply
    })

    response.headers.forEach((value, key) => {
      reply.header(key, value)
    })

    reply.status(response.status)

    reply.send(response.body)

    return reply
  }
})

const server = createServer(yoga)

try {
  server.listen(3000, () => {
    console.info("Server in running on http://localhost:3000/graphql")
  })
} catch (e) {
  console.error(e)
  process.exit(1)
}
