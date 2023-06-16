import { forbidden, HttpResponse, ok } from "@/application/helpers"
import { Middleware } from "@/application/middlewares"
import { RequiredString } from "@/application/validation"

type HttpRequest = { authorization: string }
type User = {
  id: string
  name: string
  username: string
  role: string
}
type Model =
  | Error
  | {
      userLogged: User
    }
type Authorize = (input: { token: string }) => Promise<any>

export class AuthenticationMiddleware implements Middleware {
  constructor(private readonly authorize: Authorize) {}

  async handle({ authorization }: HttpRequest): Promise<HttpResponse<Model>> {
    if (!this.validate({ authorization })) return forbidden()
    try {
      const response = await this.authorize({ token: authorization })
      return ok({ userLogged: response?.user })
    } catch {
      return forbidden()
    }
  }

  private validate({ authorization }: HttpRequest): boolean {
    const error = new RequiredString(authorization, "authorization").validate()
    return error === undefined
  }
}
