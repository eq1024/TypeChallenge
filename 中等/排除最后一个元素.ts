/**
 * 实现一个泛型Pop<T>，它接受一个数组T，并返回一个由数组T的前 N-1 项（N 为数组T的长度）以相同的顺序组成的数组。
 */
type arr112 = ['a', 'b', 'c', 'd']
type arr212 = [3, 2, 1]

type re1 = Pop<arr112> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr212> // expected to be [3, 2]

type Pop<T> = T extends [...infer rest, infer last] ? rest : never