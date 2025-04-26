import type { Unit } from "./interfaces.tsx";
import { ultra } from "./units/ultra.tsx";
import { cb } from "./units/cb.tsx";
import { bm } from "./units/bm.tsx";

export const units: Unit[] = cb
  .concat(bm)
  .concat(ultra);
