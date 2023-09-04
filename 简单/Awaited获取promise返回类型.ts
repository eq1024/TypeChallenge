type ExampleType = Promise<string>

type Result2 = MyAwaited<ExampleType> // string

type MyAwaited<T extends Promise<any>> = T extends Promise<infer U> ? U : never

type Tuple = readonly unknown[];