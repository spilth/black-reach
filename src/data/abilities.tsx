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
import { Bodyguard } from "../components/abilities/Bodyguard.tsx";
import { Fragile } from "../components/abilities/Fragile.tsx";
import { GrotOilers } from "../components/abilities/GrotOilers.tsx";
import { Mekaniak } from "../components/abilities/Mekaniak.tsx";
import { MunitionsCarrier } from "../components/abilities/MunitionsCarrier.tsx";
import { Tearing } from "../components/abilities/Tearing.tsx";
import { Weirdboy } from "../components/abilities/Weirdboy.tsx";
import { Large } from "../components/abilities/Large.tsx";
import { Transport } from "../components/abilities/Transport.tsx";
import { MachineGunner } from "../components/abilities/MachineGunner.tsx";
import { DoubleFire } from "../components/abilities/DoubleFire.tsx";
import { TwinLinked } from "../components/abilities/TwinLinked.tsx";
import { Demolishing } from "../components/abilities/Demolishing.tsx";
import { Charge } from "../components/abilities/Charge.tsx";
import { NoWeakPoint } from "../components/abilities/NoWeakPoint.tsx";
import { Explosion } from "../components/abilities/Explosion.tsx";
import { PersonalOrder } from "../components/abilities/PersonalOrder.tsx";
import { Titan } from "../components/abilities/Titan.tsx";
import { LongDistanceAssault } from "../components/abilities/LongDistanceAssault.tsx";
import { Overwatch } from "../components/abilities/Overwatch.tsx";

export enum Ability {
  Ambush = "Ambush",
  Assault = "Assault",
  Bodyguard = "Bodyguard",
  Charge = "Charge",
  Demolishing = "Demolishing",
  Destruction = "Destruction",
  DoubleFire = "Double Fire",
  Explosion = "Explosion",
  FireOnTheMove = "Fire on the Move",
  Flamethrower = "Flamethrower",
  Fragile = "Fragile",
  FrighteningShot = "Frightening Shot",
  Flying = "Flying",
  GrotOilers = "Grot Oilers",
  HawkEyed = "HawkEyed",
  Howitzer = "Howitzer",
  IndirectFire = "Indirect Fire",
  Inspiration = "Inspiration",
  Large = "Large",
  Librarian = "Librarian",
  LimitedFiringArc = "Limited Firing Arc",
  LimitedRange = "Limited Range",
  LongDistanceAssault = "Long Distance Assault",
  MachineGunner = "Machine Gunner",
  Mekaniak = "Mekaniak",
  MunitionsCarrier = "Munitions Carrier",
  NoWeakPoint = "No Weak Point",
  Order = "Order",
  Overwatch = "Overwatch",
  PersonalOrder = "Personal Order",
  Piercing = "Piercing",
  Signum = "Signum",
  Sniper = "Sniper",
  SuppressiveFire = "Suppressive Fire",
  Techmarine = "Techmarine",
  Tearing = "Tearing",
  Titan = "Titan",
  Transport = "Transport",
  TwinLinked = "Twin Linked",
  Weirdboy = "Weirdboy",
}

export const abilityComponents = {
  [Ability.Ambush]: Ambush,
  [Ability.Assault]: Assault,
  [Ability.Bodyguard]: Bodyguard,
  [Ability.Charge]: Charge,
  [Ability.Demolishing]: Demolishing,
  [Ability.Destruction]: Destruction,
  [Ability.DoubleFire]: DoubleFire,
  [Ability.Explosion]: Explosion,
  [Ability.FireOnTheMove]: FireOnTheMove,
  [Ability.Flamethrower]: Flamethrower,
  [Ability.Fragile]: Fragile,
  [Ability.FrighteningShot]: FrighteningShot,
  [Ability.Flying]: Flying,
  [Ability.GrotOilers]: GrotOilers,
  [Ability.HawkEyed]: HawkEyed,
  [Ability.Howitzer]: Howitzer,
  [Ability.IndirectFire]: IndirectFire,
  [Ability.Inspiration]: Inspiration,
  [Ability.Large]: Large,
  [Ability.Librarian]: Librarian,
  [Ability.LimitedFiringArc]: LimitedFiringArc,
  [Ability.LimitedRange]: LimitedRange,
  [Ability.LongDistanceAssault]: LongDistanceAssault,
  [Ability.MachineGunner]: MachineGunner,
  [Ability.Mekaniak]: Mekaniak,
  [Ability.MunitionsCarrier]: MunitionsCarrier,
  [Ability.NoWeakPoint]: NoWeakPoint,
  [Ability.Order]: Order,
  [Ability.Overwatch]: Overwatch,
  [Ability.PersonalOrder]: PersonalOrder,
  [Ability.Piercing]: Piercing,
  [Ability.Signum]: Signum,
  [Ability.Sniper]: Sniper,
  [Ability.SuppressiveFire]: SuppressiveFire,
  [Ability.Tearing]: Tearing,
  [Ability.Techmarine]: Techmarine,
  [Ability.Titan]: Titan,
  [Ability.Transport]: Transport,
  [Ability.TwinLinked]: TwinLinked,
  [Ability.Weirdboy]: Weirdboy
};
