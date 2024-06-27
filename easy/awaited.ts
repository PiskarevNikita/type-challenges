type ExampleType = Promise<string>;

type MyAwaited<T> = T extends PromiseLike<infer U> ? U : T;
type Result = MyAwaited<ExampleType>; // string
