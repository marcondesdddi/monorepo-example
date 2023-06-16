import { HttpResponse, noContent } from "@/application/helpers"
import { Middleware } from "@/application/middlewares"
import { LoadDataCache } from "@/domain/contracts/repository"

type HttpRequest = {
  body: any
  headers: any
}

type Logger = {
  error: (message: string) => any
  warn: (message: string) => any
  info: (message: string) => any
  verbose: (message: string) => any
  debug: (message: string) => any
  silly: (message: string) => any
}

type Model = void

export class LogRequestMiddleware implements Middleware {
  constructor(
    private readonly cacheRepo: LoadDataCache,
    private readonly logger: Logger,
    private readonly keyCache: string
  ) {}

  async handle(request: HttpRequest): Promise<HttpResponse<Model>> {
    // const enableLog = await this.cacheRepo.load(this.keyCache)
    // if (enableLog) {
    this.logger.debug(`Request Body - ${JSON.stringify(request.body)}`)
    this.logger.debug(`Request Headers - ${JSON.stringify(request.headers)}`)
    // }

    return noContent()
  }
}
