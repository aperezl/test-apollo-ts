import { hello } from '../hello'

describe('hello.test', () => {
  it('should return hello', () => {
    expect(hello()).toBe('Hello')
  })
})
