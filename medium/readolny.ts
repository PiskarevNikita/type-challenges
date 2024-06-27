interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const todoMyReadonly2: MyReadonly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

todoMyReadonly2.title = "Hello"; // Error: cannot reassign a readonly property
todoMyReadonly2.description = "barFoo"; // Error: cannot reassign a readonly property
todoMyReadonly2.completed = true; // OK

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P];
} & {
  [P in keyof T as P extends K ? never : P]: T[P];
};
