export class RequiredFieldError extends Error {
  constructor(fieldName?: string) {
    const message =
      fieldName === undefined ? "Field required" : `The field ${fieldName} is required`
    super(message)
    this.name = "RequiredFieldError"
  }
}

export class RequiredObjectError extends Error {
  constructor(fieldName?: string) {
    const message =
      fieldName === undefined
        ? "Object is empty"
        : `Object body invalid. Field ${fieldName} is required`
    super(message)
    this.name = "RequiredObjectError"
  }
}

export class RequiredArrayError extends Error {
  constructor(fieldName?: string) {
    const message =
      fieldName === undefined
        ? "Array is empty"
        : `Array body invalid. Field ${fieldName} is required`
    super(message)
    this.name = "RequiredArrayError"
  }
}

export class RequiredPropertiesBodyError extends Error {
  constructor(fieldName: string) {
    super(`Property ${fieldName} is required`)
    this.name = "RequiredPropertiesBodyError"
  }
}

export class RequestBodyOptionalError extends Error {
  constructor() {
    super("Requisicão inválida, parametros opcionais não enviados.")
    this.name = "RequestBodyOptionalError"
  }
}
