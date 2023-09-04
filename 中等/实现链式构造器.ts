declare const config: Chainable

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()


// 期望 result 的类型是：
interface Resulttt {
  foo: number
  name: string
  bar: {
    value: string
  }
}


/**
 * 你只需要在类型层面实现这个功能 - 不需要实现任何 TS/JS 的实际逻辑。
 * 你可以假设 key 只接受字符串而 value 接受任何类型，你只需要暴露它传递的类型而不需要进行任何处理。同样的 key 只会被使用一次。
 */
type Chainable<T = {}> = {
  option:<K extends string, V>(key: K extends keyof T ? V extends T[K] ? never : K : K, value: V) => Chainable<T & Record<K, V>>
  get: () => T
}