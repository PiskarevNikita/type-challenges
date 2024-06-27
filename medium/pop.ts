type popArr1 = ["a", "b", "c", "d"];
type popArr2 = [3, 2, 1];

type re1 = Pop<popArr1>; // expected to be ['a', 'b', 'c']
type re2 = Pop<popArr2>; // expected to be [3, 2]

type Pop<T extends unknown[]> = T extends [...infer F, infer _L] ? F : never;
