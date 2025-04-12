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
  SmallTitan = "Small Titan",     // 1400x1400
}

export interface Weapon {
  infantry: number | null;
  lightVehicles: number | null;
  heavyVehicles: number | null;
  abilities: Ability[];
}

export interface Front {
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

export interface Unit {
  release: Release;
  name: string;
  faction: Faction;
  type: Type;
  role: Role;
  size: Size;
  front: Front;
}

export const units: Unit[] = [
  {
    release: Release.CB,
    name: "Ammo Runts",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Individual,
    front: {
      image: "cb/ammo-runts.jpg",
      movement: 4,
      defence: 6,
      infantry: 0,
      lightVehicles: null,
      heavyVehicles: null,
      abilities: [Ability.Fragile, Ability.MunitionsCarrier]
    }
  },
  {
    release: Release.CB,
    name: "Battlewagon",
    faction: Faction.Orks,
    type: Type.HeavyVehicle,
    role: Role.Regular,
    size: Size.Vehicle,
    front: {
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
          heavyVehicles: 2,
          abilities: [Ability.IndirectFire]
        }
      ],
      secondaryWeapon: {
        infantry: 3,
        lightVehicles: 3,
        heavyVehicles: 0,
        abilities: [Ability.DoubleFire, Ability.FireOnTheMove, Ability.MachineGunner, Ability.SuppressiveFire]
      }
    }
  },
  {
    release: Release.CB,
    name: "Big Shoota",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    front: {
      image: "cb/big-shoota.jpg",
      movement: 3,
      defence: 4,
      infantry: 3,
      lightVehicles: 3,
      heavyVehicles: null,
      abilities: [Ability.Assault, Ability.SuppressiveFire]
    }
  },
  {
    release: Release.CB,
    name: "Boss Mob (A)",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Leader,
    size: Size.Individual,
    front: {
      image: "cb/boss-mob-a.jpg",
      movement: 4,
      defence: 6,
      infantry: 2,
      lightVehicles: 1,
      heavyVehicles: 0,
      abilities: [Ability.Order, Ability.Assault, Ability.Tearing]
    }
  },
  {
    release: Release.CB,
    name: "Boss Mob (B)",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Leader,
    size: Size.Individual,
    front: {
      image: "cb/boss-mob-b.jpg",
      movement: 5,
      defence: 6,
      infantry: 2,
      lightVehicles: 1,
      heavyVehicles: 0,
      abilities: [Ability.Large, Ability.Flying, Ability.Order, Ability.Assault, Ability.LimitedRange]
    }
  },
  {
    release: Release.CB,
    name: "Boss Mob (C)",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Leader,
    size: Size.Individual,
    front: {
      image: "cb/boss-mob-c.jpg",
      movement: 4,
      defence: 6,
      infantry: 2,
      lightVehicles: 4,
      heavyVehicles: 4,
      abilities: [Ability.Order, Ability.Assault, Ability.LimitedRange]
    }
  },
  {
    release: Release.CB,
    name: "Brother Agnathio",
    faction: Faction.Ultramarines,
    type: Type.HeavyVehicle,
    role: Role.Regular,
    size: Size.Mech,
    front: {
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
          heavyVehicles: 4,
          abilities: [Ability.TwinLinked, Ability.Piercing, Ability.FireOnTheMove]
        }
      ],
      secondaryWeapon: {
        infantry: 2,
        lightVehicles: 1,
        heavyVehicles: 0,
        abilities: [Ability.Assault, Ability.FireOnTheMove, Ability.Demolishing]
      }
    }
  },
  {
    release: Release.CB,
    name: "Brother Millius",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    front: {
      image: "cb/brother-millius.jpg",
      movement: 3,
      defence: 6,
      infantry: 2,
      lightVehicles: 2,
      heavyVehicles: 2,
      abilities: [Ability.Techmarine, Ability.Assault, Ability.Flamethrower, Ability.FireOnTheMove]
    }
  },
  {
    release: Release.CB,
    name: "Chaplain Orad",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Individual,
    front: {
      image: "cb/chaplain-orad.jpg",
      movement: 4,
      defence: 6,
      infantry: 2,
      lightVehicles: 2,
      heavyVehicles: 1,
      abilities: [Ability.Inspiration, Ability.Assault, Ability.LimitedRange]
    }
  },
  {
    release: Release.CB,
    name: "Deff Dread",
    faction: Faction.Orks,
    type: Type.HeavyVehicle,
    role: Role.Regular,
    size: Size.Mech,
    front: {
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
          heavyVehicles: 4,
          abilities: [Ability.Demolishing, Ability.LimitedRange]
        }
      ],
      secondaryWeapon: {
        infantry: 3,
        lightVehicles: 3,
        heavyVehicles: 0,
        abilities: [Ability.Assault, Ability.Charge, Ability.FireOnTheMove]
      }
    }
  },
  {
    release: Release.CB,
    name: "Gorkargk",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Individual,
    front: {
      image: "cb/gorkargk.jpg",
      movement: 4,
      defence: 6,
      infantry: 2,
      lightVehicles: 2,
      heavyVehicles: 0,
      abilities: [Ability.Weirdboy, Ability.Assault, Ability.LimitedRange]
    }
  },
  {
    release: Release.CB,
    name: "Grot Oiler",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Individual,
    front: {
      image: "cb/grot-oiler.jpg",
      movement: 4,
      defence: 6,
      infantry: 0,
      lightVehicles: null,
      heavyVehicles: null,
      abilities: [Ability.Fragile, Ability.GrotOilers]
    }
  },
  {
    release: Release.CB,
    name: "Heavy Bolter",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    front: {
      image: "cb/heavy-bolter.jpg",
      movement: 3,
      defence: 5,
      infantry: 4,
      lightVehicles: 3,
      heavyVehicles: 1,
      abilities: [Ability.Assault, Ability.SuppressiveFire, Ability.Ambush]
    }
  },
  {
    release: Release.CB,
    name: "Killa Kan (A)",
    faction: Faction.Orks,
    type: Type.LightVehicle,
    role: Role.Regular,
    size: Size.Squad,
    front: {
      image: "cb/killa-kan-a.jpg",
      movement: 3,
      defence: 8,
      infantry: 3,
      lightVehicles: 2,
      heavyVehicles: 1,
      abilities: [Ability.LimitedRange, Ability.Assault, Ability.Tearing, Ability.SuppressiveFire, Ability.FireOnTheMove]
    }
  },
  {
    release: Release.CB,
    name: "Killa Kan (B)",
    faction: Faction.Orks,
    type: Type.LightVehicle,
    role: Role.Regular,
    size: Size.Squad,
    front: {
      image: "cb/killa-kan-b.jpg",
      movement: 3,
      defence: 8,
      infantry: 4,
      lightVehicles: 4,
      heavyVehicles: 4,
      abilities: [Ability.Assault, Ability.Piercing, Ability.FireOnTheMove]
    }
  },
  {
    release: Release.CB,
    name: "Land Raider Redeemer",
    faction: Faction.Ultramarines,
    type: Type.HeavyVehicle,
    role: Role.Regular,
    size: Size.LargeVehicle,
    front: {
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
          heavyVehicles: null,
          abilities: [Ability.LimitedFiringArc, Ability.Flamethrower]
        }
      ],
      secondaryWeapon: {
        infantry: 5,
        lightVehicles: 3,
        heavyVehicles: 2,
        abilities: [Ability.TwinLinked, Ability.MachineGunner, Ability.SuppressiveFire, Ability.FireOnTheMove]
      }
    }
  },
  {
    release: Release.CB,
    name: "Land Speeder Storm",
    faction: Faction.Ultramarines,
    type: Type.LightVehicle,
    role: Role.Regular,
    size: Size.Vehicle,
    front: {
      image: "cb/land-speeder-storm.jpg",
      movement: 8,
      defence: 8,
      infantry: 4,
      lightVehicles: 3,
      heavyVehicles: 1,
      abilities: [Ability.Flying, Ability.Howitzer, Ability.SuppressiveFire, Ability.FireOnTheMove, Ability.Transport]
    }
  },
  {
    release: Release.CB,
    name: "Lascannon",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    front: {
      image: "cb/lascannon.jpg",
      movement: 3,
      defence: 5,
      infantry: 3,
      lightVehicles: 5,
      heavyVehicles: 4,
      abilities: [Ability.Piercing, Ability.HawkEyed]
    }
  },
  {
    release: Release.CB,
    name: "Malagrah",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    front: {
      image: "cb/malagrah.jpg",
      movement: 3,
      defence: 7,
      infantry: 3,
      lightVehicles: 3,
      heavyVehicles: 2,
      abilities: [Ability.Large, Ability.Mekaniak, Ability.Assault, Ability.Tearing, Ability.FireOnTheMove]
    }
  },
  {
    release: Release.CB,
    name: "Mek Gun",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    front: {
      image: "cb/mek-gun.jpg",
      movement: 2,
      defence: 6,
      infantry: 1,
      lightVehicles: 0,
      heavyVehicles: null,
      abilities: [Ability.Large, Ability.LimitedFiringArc, Ability.IndirectFire]
    }
  },
  {
    release: Release.CB,
    name: "Missile Launcher",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    front: {
      image: "cb/missile-launcher.jpg",
      movement: 4,
      defence: 5,
      infantry: 3,
      lightVehicles: 4,
      heavyVehicles: 4,
      abilities: [Ability.Destruction, Ability.Howitzer, Ability.Ambush]
    }
  },
  {
    release: Release.CB,
    name: "Plasma Gun",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    front: {
      image: "cb/plasma-gun.jpg",
      movement: 3,
      defence: 6,
      infantry: 3,
      lightVehicles: 3,
      heavyVehicles: 2,
      abilities: [Ability.Assault, Ability.FireOnTheMove, Ability.SuppressiveFire, Ability.LimitedRange]
    }
  },
  {
    release: Release.CB,
    name: "Predator (A)",
    faction: Faction.Ultramarines,
    type: Type.HeavyVehicle,
    role: Role.Regular,
    size: Size.Vehicle,
    front: {
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
          heavyVehicles: 2,
          abilities: [Ability.MachineGunner, Ability.SuppressiveFire, Ability.FireOnTheMove]
        }
      ],
      secondaryWeapon: {
        infantry: 2,
        lightVehicles: 5,
        heavyVehicles: 4,
        abilities: [Ability.Piercing, Ability.FireOnTheMove]
      }
    }
  },
  {
    release: Release.CB,
    name: "Razorback",
    faction: Faction.Ultramarines,
    type: Type.HeavyVehicle,
    role: Role.Regular,
    size: Size.Vehicle,
    front: {
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
          heavyVehicles: 1,
          abilities: [Ability.TwinLinked, Ability.MachineGunner, Ability.SuppressiveFire, Ability.FireOnTheMove]
        }
      ],
      secondaryWeapon: {
        infantry: 2,
        lightVehicles: 1,
        heavyVehicles: null,
        abilities: [Ability.SuppressiveFire, Ability.FireOnTheMove]
      }
    }
  },
  {
    release: Release.CB,
    name: "Rhino",
    faction: Faction.Ultramarines,
    type: Type.HeavyVehicle,
    role: Role.Regular,
    size: Size.Vehicle,
    front: {
      image: "cb/rhino.jpg",
      movement: 6,
      defence: 7,
      infantry: 2,
      lightVehicles: 1,
      heavyVehicles: null,
      abilities: [Ability.Transport, Ability.FireOnTheMove, Ability.SuppressiveFire]
    }
  },
  {
    release: Release.CB,
    name: "Rokkit Launcha",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    front: {
      image: "cb/rokkit-launcha.jpg",
      movement: 3,
      defence: 4,
      infantry: 1,
      lightVehicles: 4,
      heavyVehicles: 4,
      abilities: [Ability.Assault, Ability.Destruction, Ability.LimitedRange]
    }
  },
  {
    release: Release.CB,
    name: "Scout",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    front: {
      image: "cb/scout.jpg",
      movement: 4,
      defence: 5,
      infantry: 3,
      lightVehicles: 2,
      heavyVehicles: null,
      abilities: [Ability.Assault, Ability.SuppressiveFire, Ability.Ambush]
    }
  },
  {
    release: Release.CB,
    name: "Scout Sniper",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    front: {
      image: "cb/scout-sniper.jpg",
      movement: 4,
      defence: 5,
      infantry: 2,
      lightVehicles: 0,
      heavyVehicles: null,
      abilities: [Ability.Sniper, Ability.LimitedRange, Ability.Ambush]
    }
  },
  {
    release: Release.CB,
    name: "Servius",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Individual,
    front: {
      image: "cb/servius.jpg",
      movement: 4,
      defence: 6,
      infantry: 2,
      lightVehicles: 1,
      heavyVehicles: 0,
      abilities: [Ability.Librarian, Ability.Assault, Ability.LimitedRange]
    }
  },
  {
    release: Release.CB,
    name: "Servo-Skull Gunner",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Individual,
    front: {
      image: "cb/servo-skull-gunner.jpg",
      movement: 4,
      defence: 6,
      infantry: 1,
      lightVehicles: 0,
      heavyVehicles: null,
      abilities: [Ability.Flying, Ability.Signum]
    }
  },
  {
    release: Release.CB,
    name: "Sgt. Elias",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Leader,
    size: Size.Individual,
    front: {
      image: "cb/sgt-elias.jpg",
      movement: 4,
      defence: 6,
      infantry: 2,
      lightVehicles: 1,
      heavyVehicles: null,
      abilities: [Ability.Order, Ability.Assault, Ability.Ambush]
    }
  },
  {
    release: Release.CB,
    name: "Sgt. Telion",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Leader,
    size: Size.Individual,
    front: {
      image: "cb/sgt-telion.jpg",
      movement: 4,
      defence: 6,
      infantry: 2,
      lightVehicles: 1,
      heavyVehicles: 0,
      abilities: [Ability.Assault, Ability.Sniper, Ability.Ambush]
    }
  },
  {
    release: Release.CB,
    name: "Sgt. Vorolanus",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Leader,
    size: Size.Individual,
    front: {
      image: "cb/sgt-vorolanus.jpg",
      movement: 4,
      defence: 6,
      infantry: 2,
      lightVehicles: 1,
      heavyVehicles: 0,
      abilities: [Ability.Order, Ability.Assault, Ability.FireOnTheMove, Ability.LimitedRange]
    }
  },
  {
    release: Release.CB,
    name: "Shootas",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    front: {
      image: "cb/shootas.jpg",
      movement: 3,
      defence: 4,
      infantry: 1,
      lightVehicles: 1,
      heavyVehicles: null,
      abilities: [Ability.Assault]
    }
  },
  {
    release: Release.CB,
    name: "Sluggas",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    front: {
      image: "cb/sluggas.jpg",
      movement: 3,
      defence: 4,
      infantry: 1,
      lightVehicles: 1,
      heavyVehicles: null,
      abilities: [Ability.Assault, Ability.SuppressiveFire, Ability.LimitedRange]
    }
  },
  {
    release: Release.CB,
    name: "Squigs",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Individual,
    front: {
      image: "cb/squigs.jpg",
      movement: 4,
      defence: 6,
      infantry: 4,
      lightVehicles: 2,
      heavyVehicles: null,
      abilities: [Ability.Bodyguard, Ability.Assault, Ability.LimitedRange]
    }
  },
  {
    release: Release.CB,
    name: "Stormboyz",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    front: {
      image: "cb/stormboyz.jpg",
      movement: 5,
      defence: 4,
      infantry: 1,
      lightVehicles: 1,
      heavyVehicles: 0,
      abilities: [Ability.Large, Ability.Assault, Ability.SuppressiveFire, Ability.LimitedRange]
    }
  },
  {
    release: Release.CB,
    name: "Tactical",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Squad,
    front: {
      image: "cb/tactical.jpg",
      movement: 3,
      defence: 5,
      infantry: 3,
      lightVehicles: 2,
      heavyVehicles: 0,
      abilities: [Ability.Assault, Ability.FireOnTheMove, Ability.SuppressiveFire]
    }
  },
  {
    release: Release.CB,
    name: "Tankbustas",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    front: {
      image: "cb/tankbustas.jpg",
      movement: 3,
      defence: 5,
      infantry: 1,
      lightVehicles: 4,
      heavyVehicles: 4,
      abilities: [Ability.Assault, Ability.LimitedRange, Ability.Ambush]
    }
  },
  {
    release: Release.CB,
    name: "Thunderfire Cannon",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    front: {
      image: "cb/thunderfire-cannon.jpg",
      movement: 2,
      defence: 6,
      infantry: 3,
      lightVehicles: 4,
      heavyVehicles: 3,
      abilities: [Ability.IndirectFire, Ability.FrighteningShot, Ability.LimitedFiringArc]
    }
  },
  {
    release: Release.CB,
    name: "Trukk",
    faction: Faction.Orks,
    type: Type.LightVehicle,
    role: Role.Regular,
    size: Size.Vehicle,
    front: {
      image: "cb/trukk.jpg",
      movement: 6,
      defence: 8,
      infantry: 3,
      lightVehicles: 3,
      heavyVehicles: null,
      abilities: [Ability.Transport, Ability.FireOnTheMove, Ability.SuppressiveFire]
    }
  },
  {
    release: Release.CB,
    name: "Uzdrakh",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Leader,
    size: Size.Squad,
    front: {
      image: "cb/uzdrakh.jpg",
      movement: 3,
      defence: 7,
      infantry: 3,
      lightVehicles: 2,
      heavyVehicles: 2,
      abilities: [Ability.Large, Ability.Order, Ability.Assault, Ability.Tearing, Ability.FireOnTheMove]
    }
  },
  {
    release: Release.CB,
    name: "Warbuggy",
    faction: Faction.Orks,
    type: Type.LightVehicle,
    role: Role.Regular,
    size: Size.Vehicle,
    front: {
      image: "cb/warbuggy.jpg",
      movement: 6,
      defence: 5,
      infantry: 3,
      lightVehicles: 3,
      heavyVehicles: null,
      abilities: [Ability.SuppressiveFire, Ability.MachineGunner, Ability.FireOnTheMove]
    }
  },
  {
    release: Release.BM,
    name: "Big Shoota",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    front: {
      image: "bm/big-shoota.jpg",
      movement: 3,
      defence: 4,
      infantry: 3,
      lightVehicles: 3,
      heavyVehicles: null,
      abilities: [Ability.Assault, Ability.SuppressiveFire]
    }
  },
  {
    release: Release.BM,
    name: "Bomb Squigs",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Individual,
    front: {
      image: "bm/bomb-squigs.jpg",
      movement: 4,
      defence: 6,
      infantry: 3,
      lightVehicles: 2,
      heavyVehicles: null,
      abilities: [Ability.Explosion, Ability.Assault, Ability.LimitedRange]
    }
  },
  {
    release: Release.BM,
    name: "Grot Mega Tank",
    faction: Faction.Orks,
    type: Type.HeavyVehicle,
    role: Role.Regular,
    size: Size.LongVehicle,
    front: {
      image: "bm/grot-mega-tank.jpg",
      movement: 5,
      defence: 7,
      infantry: null,
      lightVehicles: null,
      heavyVehicles: null,
      abilities: [],
      primaryWeapons: [
        {
          infantry: 3,
          lightVehicles: 3,
          heavyVehicles: 2,
          abilities: [Ability.TwinLinked, Ability.LimitedRange]
        }
      ],
      secondaryWeapon: {
        infantry: 3,
        lightVehicles: 3,
        heavyVehicles: null,
        abilities: [Ability.Flamethrower, Ability.SuppressiveFire]
      }
    }
  },
  {
    release: Release.BM,
    name: "Grot Tank (A)",
    faction: Faction.Orks,
    type: Type.LightVehicle,
    role: Role.Regular,
    size: Size.Squad,
    front: {
      image: "bm/grot-tank-a.jpg",
      movement: 5,
      defence: 7,
      infantry: 1,
      lightVehicles: 0,
      heavyVehicles: null,
      abilities: [Ability.Flamethrower]
    }
  },
  {
    release: Release.BM,
    name: "Grot Tank (B)",
    faction: Faction.Orks,
    type: Type.LightVehicle,
    role: Role.Regular,
    size: Size.Squad,
    front: {
      image: "bm/grot-tank-b.jpg",
      movement: 5,
      defence: 7,
      infantry: 1,
      lightVehicles: 4,
      heavyVehicles: 4,
      abilities: [Ability.Destruction, Ability.FireOnTheMove, Ability.LimitedRange]
    }
  },
  {
    release: Release.BM,
    name: "Grot Tank (C)",
    faction: Faction.Orks,
    type: Type.LightVehicle,
    role: Role.Regular,
    size: Size.Squad,
    front: {
      image: "bm/grot-tank-c.jpg",
      movement: 5,
      defence: 7,
      infantry: 3,
      lightVehicles: 3,
      heavyVehicles: null,
      abilities: [Ability.SuppressiveFire, Ability.FireOnTheMove]
    }
  },
  {
    release: Release.BM,
    name: "Killa Kan (A)",
    faction: Faction.Orks,
    type: Type.LightVehicle,
    role: Role.Regular,
    size: Size.Squad,
    front: {
      image: "bm/killa-kan-a.jpg",
      movement: 3,
      defence: 8,
      infantry: 3,
      lightVehicles: 2,
      heavyVehicles: 1,
      abilities: [Ability.LimitedRange, Ability.Assault, Ability.Tearing, Ability.SuppressiveFire, Ability.FireOnTheMove]
    }
  },
  {
    release: Release.BM,
    name: "Killa Kan (B)",
    faction: Faction.Orks,
    type: Type.LightVehicle,
    role: Role.Regular,
    size: Size.Squad,
    front: {
      image: "bm/killa-kan-b.jpg",
      movement: 3,
      defence: 8,
      infantry: 4,
      lightVehicles: 4,
      heavyVehicles: 4,
      abilities: [Ability.Assault, Ability.Piercing, Ability.FireOnTheMove]
    }
  },
  {
    release: Release.BM,
    name: "Killa Kan (C)",
    faction: Faction.Orks,
    type: Type.LightVehicle,
    role: Role.Regular,
    size: Size.Squad,
    front: {
      image: "bm/killa-kan-c.jpg",
      movement: 3,
      defence: 8,
      infantry: 3,
      lightVehicles: 4,
      heavyVehicles: 4,
      abilities: [Ability.Assault, Ability.Tearing, Ability.FireOnTheMove, Ability.LimitedRange]
    }
  },
  {
    release: Release.BM,
    name: "Mega Nob (A)",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Leader,
    size: Size.Squad,
    front: {
    image: "bm/mega-nob-a.jpg",
    movement: 3,
    defence: 6,
    infantry: 2,
    lightVehicles: 3,
    heavyVehicles: 2,
    abilities: [Ability.Large, Ability.Assault, Ability.Piercing, Ability.FireOnTheMove, Ability.LimitedRange]
    }
  },
  {
    release: Release.BM,
    name: "Mega Nob (B)",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Leader,
    size: Size.Squad,
    front: {
      image: "bm/mega-nob-b.jpg",
      movement: 3,
      defence: 6,
      infantry: 2,
      lightVehicles: 2,
      heavyVehicles: 0,
      abilities: [Ability.Large, Ability.Assault, Ability.Tearing, Ability.Flamethrower]
    }
  },
  {
    release: Release.BM,
    name: "Mega Nob (C)",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Leader,
    size: Size.Squad,
    front: {
      image: "bm/mega-nob-c.jpg",
      movement: 3,
      defence: 6,
      infantry: 3,
      lightVehicles: 2,
      heavyVehicles: 1,
      abilities: [Ability.Large, Ability.Assault, Ability.Tearing, Ability.Piercing, Ability.FireOnTheMove]
    }
  },
  {
    release: Release.BM,
    name: "Meka Dread",
    faction: Faction.Orks,
    type: Type.HeavyVehicle,
    role: Role.Regular,
    size: Size.Mech,
    front: {
      image: "bm/meka-dread.jpg",
      movement: 3,
      defence: 8,
      infantry: null,
      lightVehicles: null,
      heavyVehicles: null,
      abilities: [Ability.Mekaniak, Ability.PersonalOrder],
      primaryWeapons: [
        {
          infantry: 3,
          lightVehicles: 3,
          heavyVehicles: 3,
          abilities: [Ability.Piercing, Ability.FrighteningShot, Ability.FireOnTheMove],
        }
      ],
      secondaryWeapon: {
        infantry: 4,
        lightVehicles: 3,
        heavyVehicles: 2,
        abilities: [Ability.IndirectFire, Ability.Demolishing, Ability.Assault, Ability.Charge]
      }
    }
  },
  {
    release: Release.BM,
    name: "Rokkit Launcha",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    front: {
      image: "bm/rokkit-launcha.jpg",
      movement: 3,
      defence: 4,
      infantry: 1,
      lightVehicles: 4,
      heavyVehicles: 4,
      abilities: [Ability.Assault, Ability.Destruction, Ability.LimitedRange]
    }
  },
  {
    release: Release.BM,
    name: "Skaablitz",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Leader,
    size: Size.Individual,
    front: {
      image: "bm/skaablitz.jpg",
      movement: 4,
      defence: 6,
      infantry: 2,
      lightVehicles: 2,
      heavyVehicles: 0,
      abilities: [Ability.Order, Ability.Large, Ability.Assault, Ability.Tearing, Ability.Charge, Ability.Howitzer]
    }
  },
  {
    release: Release.BM,
    name: "Stompa",
    faction: Faction.Orks,
    type: Type.HeavyVehicle,
    role: Role.Regular,
    size: Size.SmallTitan,
    front: {
      image: "bm/stompa.jpg",
      movement: 2,
      defence: 9,
      infantry: null,
      lightVehicles: null,
      heavyVehicles: null,
      abilities: [Ability.PersonalOrder, Ability.Transport, Ability.Titan],
      primaryWeapons: [
        {
          infantry: 3,
          lightVehicles: 3,
          heavyVehicles: 0,
          abilities: [Ability.IndirectFire, Ability.TwinLinked, Ability.SuppressiveFire, Ability.FireOnTheMove],
        },
        {
          infantry: 4,
          lightVehicles: 6,
          heavyVehicles: 5,
          abilities: [Ability.Charge, Ability.LimitedRange, Ability.Destruction, Ability.Tearing]
        }
      ],
      secondaryWeapon: {
        infantry: 3,
        lightVehicles: 4,
        heavyVehicles: 3,
        abilities: [Ability.Flamethrower, Ability.SuppressiveFire, Ability.FireOnTheMove, Ability.DoubleFire],
      }
    }
  },
  {
    release: Release.BM,
    name: "Trukk",
    faction: Faction.Orks,
    type: Type.LightVehicle,
    role: Role.Regular,
    size: Size.LongVehicle,
    front: {
      image: "bm/trukk.jpg",
      movement: 6,
      defence: 8,
      infantry: 3,
      lightVehicles: 3,
      heavyVehicles: null,
      abilities: [Ability.Transport, Ability.FireOnTheMove, Ability.SuppressiveFire],
    }
  },
  {
    release: Release.BM,
    name: "Warbuggy",
    faction: Faction.Orks,
    type: Type.LightVehicle,
    role: Role.Regular,
    size: Size.Vehicle,
    front: {
      image: "bm/warbuggy.jpg",
      movement: 6,
      defence: 5,
      infantry: 3,
      lightVehicles: 3,
      heavyVehicles: null,
      abilities: [Ability.SuppressiveFire, Ability.MachineGunner, Ability.FireOnTheMove]
    }
  }
];
