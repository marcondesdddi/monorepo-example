import { test, expect } from 'vitest'
import { sum } from '@/sei'

test('vitest basic', async () => {
  expect(sum(1, 1)).toBe(2)
})