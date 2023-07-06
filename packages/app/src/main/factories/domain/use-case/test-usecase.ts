import { TestUseCase, setupTest } from "@/domain/use-case"

export const makeTestUseCase = (): TestUseCase => {
  return setupTest()
}
