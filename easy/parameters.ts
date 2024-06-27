const foo = (arg1: string, arg2: number): void => {};

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]

type MyParameters<T extends (...arg: any[]) => unknown> = T extends (...unknown: infer S) => unknown ? S : never;
