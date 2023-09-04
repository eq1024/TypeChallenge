interface Todo33 {
  title: string
  description: string
  completed: boolean
}

type TodoPreview2 = MyOmit<Todo33, 'description' | 'title'>

const todo32: TodoPreview2 = {
  completed: false,
}

//Omit<Type, Keys>用来从对象类型Type中，删除指定的属性Keys，组成一个新的对象类型返回。

type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}