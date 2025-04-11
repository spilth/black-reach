import { Ability } from "./abilities.tsx";

export enum Faction {
  Ultramarines = "Ultramarines",
  Orks = "Orks",
}

export enum Role {
  Regular = "Regular",           // Faction Color
  Leader = "Leader",             // Yellow
  HeavyWeapons = "Heavy Weapons" // Red
}

export enum Type {
  Infantry = "Infantry",          // Yellow Defence Shield
  LightVehicle = "Light Vehicle", // Red Defence Shield
  HeavyVehicle = "Heavy Vehicle", // Gray Defence Shield
}

export enum Release {
  BM = "Bad Moon Reinforcements",
  CB = "Core Box",
  CK = "Cassius and Kragot Promo",
  ORK = "Ork Reinforcements",
  ULTRA = "Ultramarine Reinforcements",
  VSF = "Vanguard Squad & Freebooterz",
  ZK = "Zoggrim"
}

export enum Size {
  Individual = "Individual",      // 368x368
  Squad = "Squad",                // 422x422
  Mech = "Mech",                  // 552x422
  Vehicle = "Vehicle",            // 472x768
  LargeVehicle = "Large Vehicle", // 906x906
  LongVehicle = "Long Vehicle",   // 466x929
}

export interface Weapon {
  infantry: number | null;
  lightVehicles: number | null;
  heavyVehicles: number | null;
  abilities: Ability[];
}

export interface Unit {
  release: Release;
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
  primaryWeapons?: Weapon[];
  secondaryWeapon?: Weapon | null;
}

export const units: Unit[] = [
  {
    release: Release.CB,
    name: "Ammo Runts",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Individual,
    image: "cb/ammo-runts.jpg",
    movement: 4,
    defence: 6,
    infantry: 0,
    lightVehicles: null,
    heavyVehicles: null,
    abilities: [Ability.Fragile, Ability.MunitionsCarrier]
  },
  {
    release: Release.CB,
    name: "Battlewagon",
    faction: Faction.Orks,
    type: Type.HeavyVehicle,
    role: Role.Regular,
    size: Size.Vehicle,
    image: "cb/battlewagon.jpg",
    movement: 4,
    defence: 8,
    infantry: null,
    lightVehicles: null,
    heavyVehicles: null,
    abilities: [Ability.Transport],
    primaryWeapons: [
      {
        infantry: 2,
        lightVehicles: 3,
        heavyVehicle: 2,
        abilities: [Ability.IndirectFire]
      }
    ],
    secondaryWeapon: {
      infantry: 3,
      lightVehicles: 3,
      heavyVehicle: 0,
      abilities: [Ability.DoubleFire, Ability.FireOnTheMove, Ability.MachineGunner, Ability.SuppressiveFire]
    }
  },
  {
    release: Release.CB,
    name: "Big Shoota",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    image: "cb/big-shoota.jpg",
    movement: 3,
    defence: 4,
    infantry: 3,
    lightVehicles: 3,
    heavyVehicles: null,
    abilities: [Ability.Assault, Ability.SuppressiveFire]
  },
  {
    release: Release.CB,
    name: "Boss Mob (A)",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Leader,
    size: Size.Individual,
    image: "cb/boss-mob-a.jpg",
    movement: 4,
    defence: 6,
    infantry: 2,
    lightVehicles: 1,
    heavyVehicles: 0,
    abilities: [Ability.Order, Ability.Assault, Ability.Tearing]
  },
  {
    release: Release.CB,
    name: "Boss Mob (B)",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Leader,
    size: Size.Individual,
    image: "cb/boss-mob-b.jpg",
    movement: 5,
    defence: 6,
    infantry: 2,
    lightVehicles: 1,
    heavyVehicles: 0,
    abilities: [Ability.Large, Ability.Flying, Ability.Order, Ability.Assault, Ability.LimitedRange]
  },
  {
    release: Release.CB,
    name: "Boss Mob (C)",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Leader,
    size: Size.Individual,
    image: "cb/boss-mob-c.jpg",
    movement: 4,
    defence: 6,
    infantry: 2,
    lightVehicles: 4,
    heavyVehicles: 4,
    abilities: [Ability.Order, Ability.Assault, Ability.LimitedRange]
  },
  {
    release: Release.CB,
    name: "Brother Agnathio",
    faction: Faction.Ultramarines,
    type: Type.HeavyVehicle,
    role: Role.Regular,
    size: Size.Mech,
    image: "cb/brother-agnathio.jpg",
    movement: 3,
    defence: 8,
    infantry: null,
    lightVehicles: null,
    heavyVehicles: null,
    primaryWeapons: [
      {
        infantry: 2,
        lightVehicles: 5,
        heavyVehicle: 4,
        abilities: [Ability.TwinLinked, Ability.Piercing, Ability.FireOnTheMove]
      }
    ],
    secondaryWeapon: {
      infantry: 2,
      lightVehicles: 1,
      heavyVehicle: 0,
      abilities: [Ability.Assault, Ability.FireOnTheMove, Ability.Demolishing]
    }
  },
  {
    release: Release.CB,
    name: "Brother Millius",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    image: "cb/brother-millius.jpg",
    movement: 3,
    defence: 6,
    infantry: 2,
    lightVehicles: 2,
    heavyVehicles: 2,
    abilities: [Ability.Techmarine, Ability.Assault, Ability.Flamethrower, Ability.FireOnTheMove]
  },
  {
    release: Release.CB,
    name: "Chaplain Orad",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Individual,
    image: "cb/chaplain-orad.jpg",
    movement: 4,
    defence: 6,
    infantry: 2,
    lightVehicles: 2,
    heavyVehicles: 1,
    abilities: [Ability.Inspiration, Ability.Assault, Ability.LimitedRange]
  },
  {
    release: Release.CB,
    name: "Deff Dread",
    faction: Faction.Orks,
    type: Type.HeavyVehicle,
    role: Role.Regular,
    size: Size.Mech,
    image: "cb/deff-dread.jpg",
    movement: 3,
    defence: 8,
    infantry: null,
    lightVehicles: null,
    heavyVehicles: null,
    primaryWeapons: [
      {
        infantry: 1,
        lightVehicles: 4,
        heavyVehicle: 4,
        abilities: [Ability.Demolishing, Ability.LimitedRange]
      }
    ],
    secondaryWeapon: {
      infantry: 3,
      lightVehicles: 3,
      heavyVehicle: 0,
      abilities: [Ability.Assault, Ability.Charge, Ability.FireOnTheMove]
    }
  },
  {
    release: Release.CB,
    name: "Gorkargk",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Individual,
    image: "cb/gorkargk.jpg",
    movement: 4,
    defence: 6,
    infantry: 2,
    lightVehicles: 2,
    heavyVehicles: 0,
    abilities: [Ability.Weirdboy, Ability.Assault, Ability.LimitedRange]
  },
  {
    release: Release.CB,
    name: "Grot Oiler",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Individual,
    image: "cb/grot-oiler.jpg",
    movement: 4,
    defence: 6,
    infantry: 0,
    lightVehicles: null,
    heavyVehicles: null,
    abilities: [Ability.Fragile, Ability.GrotOilers]
  },
  {
    release: Release.CB,
    name: "Heavy Bolter",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    image: "cb/heavy-bolter.jpg",
    movement: 3,
    defence: 5,
    infantry: 4,
    lightVehicles: 3,
    heavyVehicles: 1,
    abilities: [Ability.Assault, Ability.SuppressiveFire, Ability.Ambush]
  },
  {
    release: Release.CB,
    name: "Killa Kan (A)",
    faction: Faction.Orks,
    type: Type.LightVehicle,
    role: Role.Regular,
    size: Size.Squad,
    image: "cb/killa-kan-a.jpg",
    movement: 3,
    defence: 8,
    infantry: 3,
    lightVehicles: 2,
    heavyVehicles: 1,
    abilities: [Ability.LimitedRange, Ability.Assault, Ability.Tearing, Ability.SuppressiveFire, Ability.FireOnTheMove]
  },
  {
    release: Release.CB,
    name: "Killa Kan (B)",
    faction: Faction.Orks,
    type: Type.LightVehicle,
    role: Role.Regular,
    size: Size.Squad,
    image: "cb/killa-kan-b.jpg",
    movement: 3,
    defence: 8,
    infantry: 4,
    lightVehicles: 4,
    heavyVehicles: 4,
    abilities: [Ability.Assault, Ability.Piercing, Ability.FireOnTheMove]
  },
  {
    release: Release.CB,
    name: "Land Raider Redeemer",
    faction: Faction.Ultramarines,
    type: Type.HeavyVehicle,
    role: Role.Regular,
    size: Size.LargeVehicle,
    image: "cb/land-raider-redeemer.jpg",
    movement: 4,
    defence: 9,
    infantry: null,
    lightVehicles: null,
    heavyVehicles: null,
    abilities: [Ability.NoWeakPoint, Ability.Transport],
    primaryWeapons: [
      {
        infantry: null,
        lightVehicles: null,
        heavyVehicle: null,
        abilities: [Ability.LimitedFiringArc, Ability.Flamethrower]
      }
    ],
    secondaryWeapon: {
      infantry: 5,
      lightVehicles: 3,
      heavyVehicle: 2,
      abilities: [Ability.TwinLinked, Ability.MachineGunner, Ability.SuppressiveFire, Ability.FireOnTheMove]
    }
  },
  {
    release: Release.CB,
    name: "Land Speeder Storm",
    faction: Faction.Ultramarines,
    type: Type.LightVehicle,
    role: Role.Regular,
    size: Size.Vehicle,
    image: "cb/land-speeder-storm.jpg",
    movement: 8,
    defence: 8,
    infantry: 4,
    lightVehicles: 3,
    heavyVehicles: 1,
    abilities: [Ability.Flying, Ability.Howitzer, Ability.SuppressiveFire, Ability.FireOnTheMove, Ability.Transport]
  },
  {
    release: Release.CB,
    name: "Lascannon",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    image: "cb/lascannon.jpg",
    movement: 3,
    defence: 5,
    infantry: 3,
    lightVehicles: 5,
    heavyVehicles: 4,
    abilities: [Ability.Piercing, Ability.HawkEyed]
  },
  {
    release: Release.CB,
    name: "Malagrah",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    image: "cb/malagrah.jpg",
    movement: 3,
    defence: 7,
    infantry: 3,
    lightVehicles: 3,
    heavyVehicles: 2,
    abilities: [Ability.Large, Ability.Mekaniak, Ability.Assault, Ability.Tearing, Ability.FireOnTheMove]
  },
  {
    release: Release.CB,
    name: "Mek Gun",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    image: "cb/mek-gun.jpg",
    movement: 2,
    defence: 6,
    infantry: 1,
    lightVehicles: 0,
    heavyVehicles: null,
    abilities: [Ability.Large, Ability.LimitedFiringArc, Ability.IndirectFire]
  },
  {
    release: Release.CB,
    name: "Missile Launcher",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    image: "cb/missile-launcher.jpg",
    movement: 4,
    defence: 5,
    infantry: 3,
    lightVehicles: 4,
    heavyVehicles: 4,
    abilities: [Ability.Destruction, Ability.Howitzer, Ability.Ambush]
  },
  {
    release: Release.CB,
    name: "Plasma Gun",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    image: "cb/plasma-gun.jpg",
    movement: 3,
    defence: 6,
    infantry: 3,
    lightVehicles: 3,
    heavyVehicles: 2,
    abilities: [Ability.Assault, Ability.FireOnTheMove, Ability.SuppressiveFire, Ability.LimitedRange]
  },
  {
    release: Release.CB,
    name: "Predator (A)",
    faction: Faction.Ultramarines,
    type: Type.HeavyVehicle,
    role: Role.Regular,
    size: Size.Vehicle,
    image: "cb/predator-a.jpg",
    movement: 4,
    defence: 8,
    infantry: null,
    lightVehicles: null,
    heavyVehicles: null,
    abilities: [],
    primaryWeapons: [
      {
        infantry: 4,
        lightVehicles: 4,
        heavyVehicle: 2,
        abilities: [Ability.MachineGunner, Ability.SuppressiveFire, Ability.FireOnTheMove]
      }
    ],
    secondaryWeapon: {
      infantry: 2,
      lightVehicles: 5,
      heavyVehicle: 4,
      abilities: [Ability.Piercing, Ability.FireOnTheMove]
    }
  },
  {
    release: Release.CB,
    name: "Razorback",
    faction: Faction.Ultramarines,
    type: Type.HeavyVehicle,
    role: Role.Regular,
    size: Size.Vehicle,
    image: "cb/razorback.jpg",
    movement: 6,
    defence: 7,
    infantry: null,
    lightVehicles: null,
    heavyVehicles: null,
    abilities: [Ability.Transport],
    primaryWeapons: [
      {
        infantry: 4,
        lightVehicles: 3,
        heavyVehicle: 1,
        abilities: [Ability.TwinLinked, Ability.MachineGunner, Ability.SuppressiveFire, Ability.FireOnTheMove]
      }
    ],
    secondaryWeapon: {
      infantry: 2,
      lightVehicles: 1,
      heavyVehicle: null,
      abilities: [Ability.SuppressiveFire, Ability.FireOnTheMove]
    }
  },
  {
    release: Release.CB,
    name: "Rhino",
    faction: Faction.Ultramarines,
    type: Type.HeavyVehicle,
    role: Role.Regular,
    size: Size.Vehicle,
    image: "cb/rhino.jpg",
    movement: 6,
    defence: 7,
    infantry: 2,
    lightVehicles: 1,
    heavyVehicles: null,
    abilities: [Ability.Transport, Ability.FireOnTheMove, Ability.SuppressiveFire]
  },
  {
    release: Release.CB,
    name: "Rokkit Launcha",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    image: "cb/rokkit-launcha.jpg",
    movement: 3,
    defence: 4,
    infantry: 1,
    lightVehicles: 4,
    heavyVehicles: 4,
    abilities: [Ability.Assault, Ability.Destruction, Ability.LimitedRange]
  },
  {
    release: Release.CB,
    name: "Scout",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    image: "cb/scout.jpg",
    movement: 4,
    defence: 5,
    infantry: 3,
    lightVehicles: 2,
    heavyVehicles: null,
    abilities: [Ability.Assault, Ability.SuppressiveFire, Ability.Ambush]
  },
  {
    release: Release.CB,
    name: "Scout Sniper",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    image: "cb/scout-sniper.jpg",
    movement: 4,
    defence: 5,
    infantry: 2,
    lightVehicles: 0,
    heavyVehicles: null,
    abilities: [Ability.Sniper, Ability.LimitedRange, Ability.Ambush]
  },
  {
    release: Release.CB,
    name: "Servius",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Individual,
    image: "cb/servius.jpg",
    movement: 4,
    defence: 6,
    infantry: 2,
    lightVehicles: 1,
    heavyVehicles: 0,
    abilities: [Ability.Librarian, Ability.Assault, Ability.LimitedRange]
  },
  {
    release: Release.CB,
    name: "Servo-Skull Gunner",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Individual,
    image: "cb/servo-skull-gunner.jpg",
    movement: 4,
    defence: 6,
    infantry: 1,
    lightVehicles: 0,
    heavyVehicles: null,
    abilities: [Ability.Flying, Ability.Signum]
  },
  {
    release: Release.CB,
    name: "Sgt. Elias",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Leader,
    size: Size.Individual,
    image: "cb/sgt-elias.jpg",
    movement: 4,
    defence: 6,
    infantry: 2,
    lightVehicles: 1,
    heavyVehicles: null,
    abilities: [Ability.Order, Ability.Assault, Ability.Ambush]
  },
  {
    release: Release.CB,
    name: "Sgt. Telion",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Leader,
    size: Size.Individual,
    image: "cb/sgt-telion.jpg",
    movement: 4,
    defence: 6,
    infantry: 2,
    lightVehicles: 1,
    heavyVehicles: 0,
    abilities: [Ability.Assault, Ability.Sniper, Ability.Ambush]
  },
  {
    release: Release.CB,
    name: "Sgt. Vorolanus",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Leader,
    size: Size.Individual,
    image: "cb/sgt-vorolanus.jpg",
    movement: 4,
    defence: 6,
    infantry: 2,
    lightVehicles: 1,
    heavyVehicles: 0,
    abilities: [Ability.Order, Ability.Assault, Ability.FireOnTheMove, Ability.LimitedRange]
  },
  {
    release: Release.CB,
    name: "Shootas",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    image: "cb/shootas.jpg",
    movement: 3,
    defence: 4,
    infantry: 1,
    lightVehicles: 1,
    heavyVehicles: null,
    abilities: [Ability.Assault]
  },
  {
    release: Release.CB,
    name: "Sluggas",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    image: "cb/sluggas.jpg",
    movement: 3,
    defence: 4,
    infantry: 1,
    lightVehicles: 1,
    heavyVehicles: null,
    abilities: [Ability.Assault, Ability.SuppressiveFire, Ability.LimitedRange]
  },
  {
    release: Release.CB,
    name: "Squigs",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Individual,
    image: "cb/squigs.jpg",
    movement: 4,
    defence: 6,
    infantry: 4,
    lightVehicles: 2,
    heavyVehicles: null,
    abilities: [Ability.Bodyguard, Ability.Assault, Ability.LimitedRange]
  },
  {
    release: Release.CB,
    name: "Stormboyz",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    image: "cb/stormboyz.jpg",
    movement: 5,
    defence: 4,
    infantry: 1,
    lightVehicles: 1,
    heavyVehicles: 0,
    abilities: [Ability.Large, Ability.Assault, Ability.SuppressiveFire, Ability.LimitedRange]
  },
  {
    release: Release.CB,
    name: "Tactical",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    image: "cb/tactical.jpg",
    movement: 3,
    defence: 5,
    infantry: 3,
    lightVehicles: 2,
    heavyVehicles: 0,
    abilities: [Ability.Assault, Ability.FireOnTheMove, Ability.SuppressiveFire]
  },
  {
    release: Release.CB,
    name: "Tankbustas",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    image: "cb/tankbustas.jpg",
    movement: 3,
    defence: 5,
    infantry: 1,
    lightVehicles: 4,
    heavyVehicles: 4,
    abilities: [Ability.Assault, Ability.LimitedRange, Ability.Ambush]
  },
  {
    release: Release.CB,
    name: "Thunderfire Cannon",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    image: "cb/thunderfire-cannon.jpg",
    movement: 2,
    defence: 6,
    infantry: 3,
    lightVehicles: 4,
    heavyVehicles: 3,
    abilities: [Ability.IndirectFire, Ability.FrighteningShot, Ability.LimitedFiringArc]
  },
  {
    release: Release.CB,
    name: "Trukk",
    faction: Faction.Orks,
    type: Type.LightVehicle,
    role: Role.Regular,
    size: Size.Vehicle,
    image: "cb/trukk.jpg",
    movement: 6,
    defence: 8,
    infantry: 3,
    lightVehicles: 3,
    heavyVehicles: null,
    abilities: [Ability.Transport, Ability.FireOnTheMove, Ability.SuppressiveFire]
  },
  {
    release: Release.CB,
    name: "Uzdrakh",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Leader,
    size: Size.Squad,
    image: "cb/uzdrakh.jpg",
    movement: 3,
    defence: 7,
    infantry: 3,
    lightVehicles: 2,
    heavyVehicles: 2,
    abilities: [Ability.Large, Ability.Order, Ability.Assault, Ability.Tearing, Ability.FireOnTheMove]
  },
  {
    release: Release.CB,
    name: "Warbuggy",
    faction: Faction.Orks,
    type: Type.LightVehicle,
    role: Role.Regular,
    size: Size.Vehicle,
    image: "cb/warbuggy.jpg",
    movement: 6,
    defence: 5,
    infantry: 3,
    lightVehicles: 3,
    heavyVehicles: null,
    abilities: [Ability.SuppressiveFire, Ability.MachineGunner, Ability.FireOnTheMove]
  }
];