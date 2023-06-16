export class ServerError extends Error {
  constructor(error?: Error) {
    const errorMessage = error ? error.message ?? error.stack : "Server failed. Try again soon"
    super(errorMessage)
    this.name = "ServerError"
    this.stack = error?.stack
  }
}

export class UnauthorizedError extends Error {
  constructor() {
    super("Unauthorized")
    this.name = "UnauthorizedError"
  }
}

export class ForbiddenError extends Error {
  constructor() {
    super("Access denied")
    this.name = "ForbiddenError"
  }
}

export class RequestError extends Error {
  constructor(msg?: string, error?: Error) {
    const errorMessage = msg ?? "Não foi possível concluir a operação"
    super(errorMessage)
    this.name = "RequestError"
    this.stack = error?.stack
  }
}
