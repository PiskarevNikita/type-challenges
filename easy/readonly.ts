interface RTodo {
  title: string;
  description: string;
}
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

const rTodo: MyReadonly<RTodo> = {
  title: "Hey",
  description: "foobar",
};

rTodo.title = "Hello"; // Error: cannot reassign a readonly property
rTodo.description = "barFoo"; // Error: cannot reassign a readonly property
