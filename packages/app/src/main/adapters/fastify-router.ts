import { Controller } from "@/application/controllers"

import { FastifyReply, FastifyRequest, RouteHandlerMethod } from "fastify"

type Adapter = (controller: Controller) => RouteHandlerMethod

export const adaptFastifyRoute: Adapter =
  (controller) => async (req: FastifyRequest, res: FastifyReply) => {
    const { body, headers, params } = req
    const { statusCode, data } = await controller.handle({
      ...(body ?? {}),
      ...(headers ?? {}),
      ...(params ?? {})
    })
    const json = [200, 204].includes(statusCode) ? data : { error: data.message }
    res.status(statusCode).header("Content-Type", "application/json; charset=utf-8").send(json)
  }
