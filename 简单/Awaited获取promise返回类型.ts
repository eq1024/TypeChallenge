type ExampleType = Promise<string>

type Result2 = MyAwaited<ExampleType> // string

declare type MyAwaited<T extends Promise<any>> = T extends Promise<infer U> ? U : never

type Tuple = readonly unknown[];