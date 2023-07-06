import { Test } from "@monorepo/common/src/domain/types"

type Setup = () => TestUseCase
type Input = Test
type Output = Test

export type TestUseCase = (input: Input) => Promise<Output>

export const setupTest: Setup = () => async (input) => {
  const data: Test = { name: "Diego Gabriel de Souza Marcondes" }
  return data
}
