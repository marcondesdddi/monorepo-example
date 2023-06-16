import { badRequest, HttpResponse, serverError } from "@/application/errors"
import { ValidationComposite, Validator } from "@/application/validation"

export abstract class Controller {
  abstract perform(httpRequest: any): Promise<HttpResponse>

  async afterRequest<T = any>(input?: T): Promise<void> {
    return
  }

  buildValidators(httpRequest: any): Validator[] {
    return []
  }

  async handle(httpRequest: any): Promise<HttpResponse> {
    const error = this.validate(httpRequest)
    if (error !== undefined) return badRequest(error)
    try {
      return await this.perform(httpRequest)
    } catch (error) {
      return serverError(error)
    }
  }

  private validate(httpRequest: any): Error | undefined {
    const validators = this.buildValidators(httpRequest)
    return new ValidationComposite(validators).validate()
  }
}