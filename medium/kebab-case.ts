type FooBarBaz = KebabCase<"fooBarBaz">;
const foobarbaz: FooBarBaz = "foo-bar-baz";

type DoNothing = KebabCase<"do-nothing">;
const doNothing: DoNothing = "do-nothing";

type PascalCase = KebabCase<"PascalCase">;
const pascalcase: PascalCase = "pascal-case";

type KebabCase<S> = S extends `${infer F}${infer L}`
  ? L extends Uncapitalize<L>
    ? `${Uncapitalize<F>}${KebabCase<L>}`
    : `${Uncapitalize<F>}-${KebabCase<L>}`
  : S;
