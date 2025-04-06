import { Ambush } from "../components/abilities/Ambush.tsx";
import { Assault } from "../components/abilities/Assault.tsx";
import { FireOnTheMove } from "../components/abilities/FireOnTheMove.tsx";
import { Sniper } from "../components/abilities/Sniper.tsx";
import { SuppressiveFire } from "../components/abilities/SuppressiveFire.tsx";
import { Signum } from "../components/abilities/Signum.tsx";
import { LimitedRange } from "../components/abilities/LimitedRange.tsx";
import { Librarian } from "../components/abilities/Librarian.tsx";
import { Inspiration } from "../components/abilities/Inspiration.tsx";
import { Flying } from "../components/abilities/Flying.tsx";
import { Order } from "../components/abilities/Order.tsx";
import { Techmarine } from "../components/abilities/Techmarine.tsx";
import { Flamethrower } from "../components/abilities/Flamethrower.tsx";
import { HawkEyed } from "../components/abilities/HawkEyed.tsx";
import { Piercing } from "../components/abilities/Piercing.tsx";
import { Destruction } from "../components/abilities/Destruction.tsx";
import { Howitzer } from "../components/abilities/Howitzer.tsx";
import { FrighteningShot } from "../components/abilities/FrighteningShot.tsx";
import { IndirectFire } from "../components/abilities/IndirectFire.tsx";
import { LimitedFiringArc } from "../components/abilities/LimitedFiringArc.tsx";

export enum Ability {
  Ambush = "Ambush",
  Assault = "Assault",
  Destruction = "Destruction",
  FireOnTheMove = "Fire on the Move",
  Flamethrower = "Flamethrower",
  FrighteningShot = "FrighteningShot",
  Flying = "Flying",
  HawkEyed = "HawkEyed",
  Howitzer = "Howitzer",
  IndirectFire = "IndirectFire",
  Inspiration = "Inspiration",
  Librarian = "Librarian",
  LimitedFiringArc = "LimitedFiringArc",
  LimitedRange = "Limited Range",
  Order = "Order",
  Piercing = "Piercing",
  Signum = "Signum",
  Sniper = "Sniper",
  SuppressiveFire = "Suppressive Fire",
  Techmarine = "Techmarine",
}

export const abilityComponents = {
  [Ability.Ambush]: Ambush,
  [Ability.Assault]: Assault,
  [Ability.Destruction]: Destruction,
  [Ability.FireOnTheMove]: FireOnTheMove,
  [Ability.Flamethrower]: Flamethrower,
  [Ability.FrighteningShot]: FrighteningShot,
  [Ability.Flying]: Flying,
  [Ability.HawkEyed]: HawkEyed,
  [Ability.Howitzer]: Howitzer,
  [Ability.IndirectFire]: IndirectFire,
  [Ability.Inspiration]: Inspiration,
  [Ability.Librarian]: Librarian,
  [Ability.LimitedFiringArc]: LimitedFiringArc,
  [Ability.LimitedRange]: LimitedRange,
  [Ability.Order]: Order,
  [Ability.Piercing]: Piercing,
  [Ability.Signum]: Signum,
  [Ability.Sniper]: Sniper,
  [Ability.SuppressiveFire]: SuppressiveFire,
  [Ability.Techmarine]: Techmarine
};
