type ConcatResult = Concat<[1], [2]>; // expected to be [1, 2]

type Concat<T extends number[], U extends number[]> = [...T, ...U];
