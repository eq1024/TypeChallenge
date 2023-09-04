type X = {
  x: {
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = {
  readonly x: {
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey'
}

type Todoo = DeepReadonly<X> // should be same as `Expected`

type DeepReadonly<T> = {
  readonly [key in keyof T]: T[key] extends object ? DeepReadonly<T[key]> : T[key]
}

const z: Todoo = {
  x: {
    a: 1,
    b: 'hi'
  },
  y: 'hey'
}
// z.x.a = 5 //Error 不能修改
