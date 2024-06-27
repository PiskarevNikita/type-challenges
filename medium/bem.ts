type BEM<B extends string, E extends string[], M extends string[]> = `${B}${E extends []
  ? ""
  : `__${E[number]}`}${M extends [] ? "" : `--${M[number]}`}`;

type buttonClasses = BEM<"button", ["base", "bet"], ["disable", "hover", "active"]>;
