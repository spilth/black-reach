import { Ability } from "./abilities.tsx";

export enum Faction {
  Ultramarines = "Ultramarines",
  Orks = "Orks",
}

export enum Role {
  Regular = "Regular", // Faction Color
  Leader = "Leader", // Yellow
  HeavyWeapons = "Heavy Weapons" // Red
}

export enum Type {
  Infantry = "Infantry", // Yellow Defence Shield
  LightVehicle = "Light Vehicle", // Red Defence Shield
  HeavyVehicle = "Heavy Vehicle", // Gray Defence Shield
}

export enum Size {
  Individual = "Individual", // 368x368
  Squad = "Squad", // 422x422
  Mech = "Mech", // 552x422
  Vehicle = "Vehicle", // 472x768
  LargeVehicle = "Large Vehicle", // 906x906
  LongVehicle = "Long Vehicle", // 466x929
}

export interface Unit {
  name: string;
  faction: Faction;
  type: Type;
  role: Role;
  size: Size;
  image: string;
  movement: number;
  defence: number;
  infantry: number | null;
  lightVehicles: number | null;
  heavyVehicles: number | null;
  abilities?: Ability[];
}

export const units: Unit[] = [
  {
    name: "Sgt. Vorolanus",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Leader,
    size: Size.Individual,
    image: "sgt-vorolanus.jpg",
    movement: 4,
    defence: 6,
    infantry: 2,
    lightVehicles: 1,
    heavyVehicles: 0,
    abilities: [Ability.Order, Ability.Assault, Ability.FireOnTheMove, Ability.LimitedRange]
  },
  {
    name: "Plasma Gun",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    image: "plasma-gun.jpg",
    movement: 3,
    defence: 6,
    infantry: 3,
    lightVehicles: 3,
    heavyVehicles: 2,
    abilities: [Ability.Assault, Ability.FireOnTheMove, Ability.SuppressiveFire, Ability.LimitedRange]
  },
  {
    name: "Tactical",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    image: "tactical.jpg",
    movement: 3,
    defence: 5,
    infantry: 3,
    lightVehicles: 2,
    heavyVehicles: 0,
    abilities: [Ability.Assault, Ability.FireOnTheMove, Ability.SuppressiveFire]
  },
  {
    name: "Heavy Bolter",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    image: "heavy-bolter.jpg",
    movement: 3,
    defence: 5,
    infantry: 4,
    lightVehicles: 3,
    heavyVehicles: 1,
    abilities: [Ability.Assault, Ability.SuppressiveFire, Ability.Ambush]
  },
  {
    name: "Lascannon",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    image: "lascannon.jpg",
    movement: 3,
    defence: 5,
    infantry: 3,
    lightVehicles: 5,
    heavyVehicles: 4,
    abilities: [Ability.Piercing, Ability.HawkEyed]
  },
  {
    name: "Sgt. Telion",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Leader,
    size: Size.Individual,
    image: "sgt-telion.jpg",
    movement: 4,
    defence: 6,
    infantry: 2,
    lightVehicles: 1,
    heavyVehicles: 0,
    abilities: [Ability.Assault, Ability.Sniper, Ability.Ambush]
  },
  {
    name: "Chaplain Orad",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Individual,
    image: "chaplain-orad.jpg",
    movement: 4,
    defence: 6,
    infantry: 2,
    lightVehicles: 2,
    heavyVehicles: 1,
    abilities: [Ability.Inspiration, Ability.Assault, Ability.LimitedRange]
  },
  {
    name: "Servius",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Individual,
    image: "servius.jpg",
    movement: 4,
    defence: 6,
    infantry: 2,
    lightVehicles: 1,
    heavyVehicles: 0,
    abilities: [Ability.Librarian, Ability.Assault, Ability.LimitedRange]
  },
  {
    name: "Servo-Skull Gunner",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Individual,
    image: "servo-skull-gunner.jpg",
    movement: 4,
    defence: 6,
    infantry: 1,
    lightVehicles: 0,
    heavyVehicles: null,
    abilities: [Ability.Flying, Ability.Signum]
  },
  {
    name: "Sgt. Elias",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Leader,
    size: Size.Individual,
    image: "sgt-elias.jpg",
    movement: 4,
    defence: 6,
    infantry: 2,
    lightVehicles: 1,
    heavyVehicles: null,
    abilities: [Ability.Order, Ability.Assault, Ability.Ambush]
  },
  {
    name: "Brother Millius",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    image: "brother-millius.jpg",
    movement: 3,
    defence: 6,
    infantry: 2,
    lightVehicles: 2,
    heavyVehicles: 2,
    abilities: [Ability.Techmarine, Ability.Assault, Ability.Flamethrower, Ability.FireOnTheMove]
  },
  {
    name: "Scout",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    image: "scout.jpg",
    movement: 4,
    defence: 5,
    infantry: 3,
    lightVehicles: 2,
    heavyVehicles: null,
    abilities: [Ability.Assault, Ability.SuppressiveFire, Ability.Ambush]
  },
  {
    name: "Missile Launcher",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    image: "missile-launcher.jpg",
    movement: 4,
    defence: 5,
    infantry: 3,
    lightVehicles: 4,
    heavyVehicles: 4,
    abilities: [Ability.Destruction, Ability.Howitzer, Ability.Ambush]
  },
  {
    name: "Scout Sniper",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    image: "scout-sniper.jpg",
    movement: 4,
    defence: 5,
    infantry: 2,
    lightVehicles: 0,
    heavyVehicles: null,
    abilities: [Ability.Sniper, Ability.LimitedRange, Ability.Ambush]
  },
  {
    name: "Thunderfire Cannon",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    image: "thunderfire-cannon.jpg",
    movement: 2,
    defence: 6,
    infantry: 3,
    lightVehicles: 4,
    heavyVehicles: 3,
    abilities: [Ability.IndirectFire, Ability.FrighteningShot, Ability.LimitedFiringArc]
  },
  {
    name: "Ammo Runts",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Individual,
    image: "ammo-runts.jpg",
    movement: 4,
    defence: 6,
    infantry: 0,
    lightVehicles: null,
    heavyVehicles: null,
    abilities: [Ability.Fragile, Ability.MunitionsCarrier]
  },
  {
    name: "Big Shoota",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    image: "big-shoota.jpg",
    movement: 3,
    defence: 4,
    infantry: 3,
    lightVehicles: 3,
    heavyVehicles: null,
    abilities: [Ability.Assault, Ability.SuppressiveFire]
  },
  {
    name: "Boss Mob (A)",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Leader,
    size: Size.Individual,
    image: "boss-mob-a.jpg",
    movement: 4,
    defence: 6,
    infantry: 2,
    lightVehicles: 1,
    heavyVehicles: 0,
    abilities: [Ability.Order, Ability.Assault, Ability.Tearing]
  },
  {
    name: "Boss Mob (B)",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Leader,
    size: Size.Individual,
    image: "boss-mob-b.jpg",
    movement: 5,
    defence: 6,
    infantry: 2,
    lightVehicles: 1,
    heavyVehicles: 0,
    abilities: [Ability.Large, Ability.Flying, Ability.Order, Ability.Assault, Ability.LimitedRange]
  },
  {
    name: "Boss Mob (C)",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Leader,
    size: Size.Individual,
    image: "boss-mob-c.jpg",
    movement: 4,
    defence: 6,
    infantry: 2,
    lightVehicles: 4,
    heavyVehicles: 4,
    abilities: [Ability.Order, Ability.Assault, Ability.LimitedRange]
  },
  {
    name: "Gorkargk",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Individual,
    image: "gorkargk.jpg",
    movement: 4,
    defence: 6,
    infantry: 2,
    lightVehicles: 2,
    heavyVehicles: 0,
    abilities: [Ability.Weirdboy, Ability.Assault, Ability.LimitedRange]
  },
  {
    name: "Grot Oiler",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Individual,
    image: "grot-oiler.jpg",
    movement: 4,
    defence: 6,
    infantry: 0,
    lightVehicles: null,
    heavyVehicles: null,
    abilities: [Ability.Fragile, Ability.GrotOilers]
  },
  {
    name: "Malagrah",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    image: "malagrah.jpg",
    movement: 3,
    defence: 7,
    infantry: 3,
    lightVehicles: 3,
    heavyVehicles: 2,
    abilities: [Ability.Large, Ability.Mekaniak, Ability.Assault, Ability.Tearing, Ability.FireOnTheMove]
  },
  {
    name: "Mek Gun",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    image: "mek-gun.jpg",
    movement: 2,
    defence: 6,
    infantry: 1,
    lightVehicles: 0,
    heavyVehicles: null,
    abilities: [Ability.Large, Ability.LimitedFiringArc, Ability.IndirectFire]
  },
  {
    name: "Rokkit Launcha",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    image: "rokkit-launcha.jpg",
    movement: 3,
    defence: 4,
    infantry: 1,
    lightVehicles: 4,
    heavyVehicles: 4,
    abilities: [Ability.Assault, Ability.Destruction, Ability.LimitedRange],
  },
  {
    name: "Shootas",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    image: "shootas.jpg",
    movement: 3,
    defence: 4,
    infantry: 1,
    lightVehicles: 1,
    heavyVehicles: null,
    abilities: [Ability.Assault]
  },
  {
    name: "Sluggas",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    image: "sluggas.jpg",
    movement: 3,
    defence: 4,
    infantry: 1,
    lightVehicles: 1,
    heavyVehicles: null,
    abilities: [Ability.Assault, Ability.SuppressiveFire, Ability.LimitedRange]
  },
  {
    name: "Squigs",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Individual,
    image: "squigs.jpg",
    movement: 4,
    defence: 6,
    infantry: 4,
    lightVehicles: 2,
    heavyVehicles: null,
    abilities: [Ability.Bodyguard, Ability.Assault, Ability.LimitedRange]
  },
  {
    name: "Stormboyz",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    image: "stormboyz.jpg",
    movement: 5,
    defence: 4,
    infantry: 1,
    lightVehicles: 1,
    heavyVehicles: 0,
    abilities: [Ability.Large, Ability.Assault, Ability.SuppressiveFire, Ability.LimitedRange]
  },
  {
    name: "Tankbustas",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    image: "tankbustas.jpg",
    movement: 3,
    defence: 5,
    infantry: 1,
    lightVehicles: 4,
    heavyVehicles: 4,
    abilities: [Ability.Assault, Ability.LimitedRange, Ability.Ambush]
  },
  {
    name: "Uzdrakh",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Leader,
    size: Size.Squad,
    image: "uzdrakh.jpg",
    movement: 3,
    defence: 7,
    infantry: 3,
    lightVehicles: 2,
    heavyVehicles: 2,
    abilities: [Ability.Large, Ability.Order, Ability.Assault, Ability.Tearing, Ability.FireOnTheMove]
  }
].sort((a, b) => a.name.localeCompare(b.name));
