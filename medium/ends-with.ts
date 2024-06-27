type endsA = EndsWith<"abc", "bc">; // expected to be true
type endsB = EndsWith<"abc", "abc">; // expected to be true
type endsC = EndsWith<"abc", "d">; // expected to be false

type EndsWith<T extends string, U extends string> = T extends `${infer _R}${U}` ? true : false;
