type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // 应推导出 'a'
type head2 = First<arr2> // 应推导出 3

type First<T extends any[]> = T extends [infer first, ...infer rest] ? first : never

//answer1
type First1<T extends any[]> = T extends [] ? never : T[0]

//answer2
type First2<T extends any[]> = T['length'] extends 0 ? never : T[0]

//answer3
type First3<T extends any[]> = T extends [infer A, ...infer rest] ? A : never