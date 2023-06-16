import { Controller } from "@/application/controllers"
import { HttpResponse, ok } from "@/application/helpers"
import { Validator } from "@/application/validation"

type Model = { msg: string }

export class TestController extends Controller {
  constructor() {
    super()
  }

  async perform(): Promise<HttpResponse<Model>> {
    return ok({ msg: "Teste Controller" })
  }

  override buildValidators(): Validator[] {
    return []
  }
}
