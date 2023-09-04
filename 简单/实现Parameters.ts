const foo = (arg1: string, arg2: number): void => { }

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]

type MyParameters<T extends (...P: any[]) => any> = T extends (...P: infer arg) => any ? arg : never