import { HttpResponse } from "@/application/helpers"

export interface Middleware<R = Promise<HttpResponse>> {
  handle: (httpRequest: any) => R
}
