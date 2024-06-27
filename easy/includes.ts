type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Santana">;
type isNoPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`

type Includes<T extends unknown[], U> = U extends T[number] ? true : false;
