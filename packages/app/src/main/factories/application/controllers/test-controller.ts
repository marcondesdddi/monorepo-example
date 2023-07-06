import { TestController } from "@/application/controllers"
import { makeTestUseCase } from "@/main/factories/domain/use-case"

export const makeTestController = (): TestController => {
  return new TestController(makeTestUseCase())
}
