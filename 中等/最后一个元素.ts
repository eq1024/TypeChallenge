/**
 * 实现一个Last<T>泛型，它接受一个数组T并返回其最后一个元素的类型。
 */

type arr142 = ['a', 'b', 'c']
type arr242 = [3, 2, 1]

type tail1 = Last<arr142> // 应推导出 'c'
type tail2 = Last<arr242> // 应推导出 1


type Last<T> = T extends [...infer result, infer last] ? last : never