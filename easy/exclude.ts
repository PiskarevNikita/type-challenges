type MyExclude<T, U> = T extends U ? never : T;

type MyExcludeResult = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'
