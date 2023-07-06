import { Controller } from "@/application/controllers"
import { HttpResponse, ok } from "@/application/helpers"
import { Validator } from "@/application/validation"
import { TestUseCase } from "@/domain/use-case"

type HttpRequest = any
type Response = { msg: string }

export class TestController extends Controller {
  constructor(private readonly testUseCase: TestUseCase) {
    super()
  }

  async perform(request: HttpRequest): Promise<HttpResponse<Response>> {
    const response = await this.testUseCase({ name: "Test de nome" })
    return ok({ msg: response.name })
  }

  override buildValidators(): Validator[] {
    return []
  }
}
