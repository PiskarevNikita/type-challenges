type a = StartsWith<"abc", "ac">; // expected to be false
type b = StartsWith<"abc", "ab">; // expected to be true
type c = StartsWith<"abc", "abcd">; // expected to be false

type StartsWith<T extends string, U extends string> = T extends `${U}${infer _R}` ? true : false;
