import { Controller } from "@/application/controllers"
import { HttpResponse, ok } from "@/application/helpers"
import { Validator } from "@/application/validation"

type HttpRequest = any
type Response = { msg: string }

export class TestController extends Controller {
  constructor() {
    super()
  }

  async perform(request: HttpRequest): Promise<HttpResponse<Response>> {
    console.log(request.file.name)
    return ok({ msg: "Deu certo!!" })
  }

  override buildValidators(): Validator[] {
    return []
  }
}
