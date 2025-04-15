import { Ability } from "./abilities.tsx";
import { TerrainEffect } from "./terrainEffects.tsx";
import { Faction, Release, Role, Size, Type } from "./enums.tsx";
import type { Unit } from "./interfaces.tsx";

export const units: Unit[] = [
  {
    release: Release.CB,
    name: "Ammo Runts",
    faction: Faction.Orks,
    type: Type.Infantry,
    role: Role.Regular,
    size: Size.Individual,
    front: {
      image: "cb/ammo-runts-front.jpg",
      movement: 4,
      defence: 6,
      infantry: 0,
      lightVehicles: null,
      heavyVehicles: null,
      abilities: [Ability.Fragile, Ability.MunitionsCarrier]
    },
    back: {
      image: "cb/ammo-runts-back.jpg",
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
      image: "cb/battlewagon-front.jpg",
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
    },
    back: {
      image: "cb/battlewagon-back.jpg",
      terrainEffects: [TerrainEffect.Impassable, TerrainEffect.ObstacleBlocks, TerrainEffect.Structure]
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
      image: "cb/big-shoota-front.jpg",
      movement: 3,
      defence: 4,
      infantry: 3,
      lightVehicles: 3,
      heavyVehicles: null,
      abilities: [Ability.Assault, Ability.SuppressiveFire]
    },
    back: {
      image: "cb/big-shoota-back.jpg",
      movement: 3,
      defence: 4,
      infantry: 3,
      lightVehicles: 2,
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
      image: "cb/boss-mob-a-front.jpg",
      movement: 4,
      defence: 6,
      infantry: 2,
      lightVehicles: 1,
      heavyVehicles: 0,
      abilities: [Ability.Order, Ability.Assault, Ability.Tearing]
    },
    back: {
      image: "cb/boss-mob-a-back.jpg",
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
      image: "cb/boss-mob-b-front.jpg",
      movement: 5,
      defence: 6,
      infantry: 2,
      lightVehicles: 1,
      heavyVehicles: 0,
      abilities: [Ability.Large, Ability.Flying, Ability.Order, Ability.Assault, Ability.LimitedRange]
    },
    back: {
      image: "cb/boss-mob-b-back.jpg",
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
      image: "cb/boss-mob-c-front.jpg",
      movement: 4,
      defence: 6,
      infantry: 2,
      lightVehicles: 4,
      heavyVehicles: 4,
      abilities: [Ability.Order, Ability.Assault, Ability.LimitedRange]
    },
    back: {
      image: "cb/boss-mob-c-back.jpg",
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
      image: "cb/brother-agnathio-front.jpg",
      movement: 3,
      defence: 8,
      infantry: null,
      lightVehicles: null,
      heavyVehicles: null,
      abilities: [],
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
    },
    back: {
      image: "cb/brother-agnathio-back.jpg",
      terrainEffects: [TerrainEffect.DefensiveBonus, TerrainEffect.Structure, TerrainEffect.ObstacleObscures, TerrainEffect.ImpassableToSomeUnits]
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
      image: "cb/brother-millius-front.jpg",
      movement: 3,
      defence: 6,
      infantry: 2,
      lightVehicles: 2,
      heavyVehicles: 2,
      abilities: [Ability.Techmarine, Ability.Assault, Ability.Flamethrower, Ability.FireOnTheMove]
    },
    back: {
      image: "cb/brother-millius-back.jpg",
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
      image: "cb/chaplain-orad-front.jpg",
      movement: 4,
      defence: 6,
      infantry: 2,
      lightVehicles: 2,
      heavyVehicles: 1,
      abilities: [Ability.Inspiration, Ability.Assault, Ability.LimitedRange]
    },
    back: {
      image: "cb/chaplain-orad-back.jpg",
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
      image: "cb/deff-dread-front.jpg",
      movement: 3,
      defence: 8,
      infantry: null,
      lightVehicles: null,
      heavyVehicles: null,
      abilities: [],
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
    },
    back: {
      image: "cb/deff-dread-back.jpg",
      terrainEffects: [TerrainEffect.DefensiveBonus, TerrainEffect.Structure, TerrainEffect.ObstacleObscures, TerrainEffect.ImpassableToSomeUnits]
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
      image: "cb/gorkargk-front.jpg",
      movement: 4,
      defence: 6,
      infantry: 2,
      lightVehicles: 2,
      heavyVehicles: 0,
      abilities: [Ability.Weirdboy, Ability.Assault, Ability.LimitedRange]
    },
    back: {
      image: "cb/gorkargk-back.jpg",
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
      image: "cb/grot-oiler-front.jpg",
      movement: 4,
      defence: 6,
      infantry: 0,
      lightVehicles: null,
      heavyVehicles: null,
      abilities: [Ability.Fragile, Ability.GrotOilers]
    },
    back: {
      image: "cb/grot-oiler-back.jpg",
    }
  },
  {
    release: Release.CB,
    name: "Heavy Bolter (A)",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    front: {
      image: "cb/heavy-bolter-a-front.jpg",
      movement: 4,
      defence: 5,
      infantry: 4,
      lightVehicles: 3,
      heavyVehicles: 1,
      abilities: [Ability.Assault, Ability.SuppressiveFire, Ability.Ambush]
    },
    back: {
      image: "cb/heavy-bolter-a-back.jpg",
      movement: 4,
      abilities: []
    }
  },
  {
    release: Release.CB,
    name: "Heavy Bolter (B)",
    faction: Faction.Ultramarines,
    type: Type.Infantry,
    role: Role.HeavyWeapons,
    size: Size.Squad,
    front: {
      image: "cb/heavy-bolter-b-front.jpg",
      movement: 3,
      defence: 5,
      infantry: 4,
      lightVehicles: 3,
      heavyVehicles: 1,
      abilities: [Ability.Assault, Ability.FireOnTheMove, Ability.SuppressiveFire]
    },
    back: {
      image: "cb/heavy-bolter-b-back.jpg",
      movement: 3,
      defence: 6,
      infantry: 3,
      lightVehicles: 2,
      heavyVehicles: 0,
      abilities: [Ability.Assault, Ability.FireOnTheMove, Ability.SuppressiveFire]
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
      image: "cb/killa-kan-a-front.jpg",
      movement: 3,
      defence: 8,
      infantry: 3,
      lightVehicles: 2,
      heavyVehicles: 1,
      abilities: [Ability.LimitedRange, Ability.Assault, Ability.Tearing, Ability.SuppressiveFire, Ability.FireOnTheMove]
    },
    back: {
      image: "cb/killa-kan-a-back.jpg",
      terrainEffects: [TerrainEffect.ObstacleObscures, TerrainEffect.DefensiveBonus, TerrainEffect.Structure]
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
      image: "cb/killa-kan-b-front.jpg",
      movement: 3,
      defence: 8,
      infantry: 4,
      lightVehicles: 4,
      heavyVehicles: 4,
      abilities: [Ability.Assault, Ability.Piercing, Ability.FireOnTheMove]
    },
    back: {
      image: "cb/killa-kan-b-back.jpg",
      terrainEffects: [TerrainEffect.ObstacleObscures, TerrainEffect.DefensiveBonus, TerrainEffect.Structure]
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
      image: "cb/land-raider-redeemer-front.jpg",
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
        },
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
    },
    back: {
      image: "cb/land-raider-redeemer-back.jpg",
      terrainEffects: [TerrainEffect.Structure, TerrainEffect.Impassable, TerrainEffect.ObstacleBlocks]
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
      image: "cb/land-speeder-storm-front.jpg",
      movement: 8,
      defence: 8,
      infantry: 4,
      lightVehicles: 3,
      heavyVehicles: 1,
      abilities: [Ability.Flying, Ability.Howitzer, Ability.SuppressiveFire, Ability.FireOnTheMove, Ability.Transport]
    },
    back: {
      image: "cb/land-speeder-storm-back.jpg",
      movement: null,
      infantry: 4,
      lightVehicles: 3,
      heavyVehicles: 1,
      abilities: [Ability.SuppressiveFire, Ability.FireOnTheMove, Ability.Transport]
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
      image: "cb/lascannon-front.jpg",
      movement: 3,
      defence: 5,
      infantry: 3,
      lightVehicles: 5,
      heavyVehicles: 4,
      abilities: [Ability.Piercing, Ability.HawkEyed]
    },
    back: {
      image: "cb/lascannon-back.jpg",
      movement: 3,
      defence: 6,
      infantry: 2,
      lightVehicles: 4,
      heavyVehicles: 3,
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
      image: "cb/malagrah-front.jpg",
      movement: 3,
      defence: 7,
      infantry: 3,
      lightVehicles: 3,
      heavyVehicles: 2,
      abilities: [Ability.Large, Ability.Mekaniak, Ability.Assault, Ability.Tearing, Ability.FireOnTheMove]
    },
    back: {
      image: "cb/malagrah-back.jpg",
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
      image: "cb/mek-gun-front.jpg",
      movement: 2,
      defence: 6,
      infantry: 1,
      lightVehicles: 0,
      heavyVehicles: null,
      abilities: [Ability.Large, Ability.LimitedFiringArc, Ability.IndirectFire]
    },
    back: {
      image: "cb/mek-gun-back.jpg"
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
      image: "cb/missile-launcher-front.jpg",
      movement: 4,
      defence: 5,
      infantry: 3,
      lightVehicles: 4,
      heavyVehicles: 4,
      abilities: [Ability.Destruction, Ability.Howitzer, Ability.Ambush]
    },
    back: {
      image: "cb/missile-launcher-back.jpg",
      movement: 4,
      abilities: []
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
      image: "cb/plasma-gun-front.jpg",
      movement: 3,
      defence: 6,
      infantry: 3,
      lightVehicles: 3,
      heavyVehicles: 2,
      abilities: [Ability.Assault, Ability.FireOnTheMove, Ability.SuppressiveFire, Ability.LimitedRange]
    },
    back: {
      image: "cb/plasma-gun-back.jpg",
      movement: 3,
      defence: 6,
      infantry: 2,
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
      image: "cb/predator-a-front.jpg",
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
    },
    back: {
      image: "cb/predator-a-back.jpg",
      terrainEffects: [TerrainEffect.Structure, TerrainEffect.Impassable, TerrainEffect.ObstacleBlocks]
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
      image: "cb/razorback-front.jpg",
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
    },
    back: {
      image: "cb/razorback-back.jpg",
      terrainEffects: [TerrainEffect.Structure, TerrainEffect.Impassable, TerrainEffect.ObstacleBlocks]
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
      image: "cb/rhino-front.jpg",
      movement: 6,
      defence: 7,
      infantry: 2,
      lightVehicles: 1,
      heavyVehicles: null,
      abilities: [Ability.Transport, Ability.FireOnTheMove, Ability.SuppressiveFire]
    },
    back: {
      image: "cb/rhino-back.jpg",
      terrainEffects: [TerrainEffect.Structure, TerrainEffect.Impassable, TerrainEffect.ObstacleBlocks]
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
      image: "cb/rokkit-launcha-front.jpg",
      movement: 3,
      defence: 4,
      infantry: 1,
      lightVehicles: 4,
      heavyVehicles: 4,
      abilities: [Ability.Assault, Ability.Destruction, Ability.LimitedRange]
    },
    back: {
      image: "cb/rokkit-launcha-back.jpg",
      movement: 3,
      defence: 4,
      infantry: 0,
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
      image: "cb/scout-front.jpg",
      movement: 4,
      defence: 5,
      infantry: 3,
      lightVehicles: 2,
      heavyVehicles: null,
      abilities: [Ability.Assault, Ability.SuppressiveFire, Ability.Ambush]
    },
    back: {
      image: "cb/scout-back.jpg",
      movement: 4,
      abilities: []
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
      image: "cb/scout-sniper-front.jpg",
      movement: 4,
      defence: 5,
      infantry: 2,
      lightVehicles: 0,
      heavyVehicles: null,
      abilities: [Ability.Sniper, Ability.LimitedRange, Ability.Ambush]
    },
    back: {
      image: "cb/scout-sniper-back.jpg",
      movement: 4,
      abilities: [Ability.Sniper]
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
      image: "cb/servius-front.jpg",
      movement: 4,
      defence: 6,
      infantry: 2,
      lightVehicles: 1,
      heavyVehicles: 0,
      abilities: [Ability.Librarian, Ability.Assault, Ability.LimitedRange]
    },
    back: {
      image: "cb/servius-back.jpg",
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
      image: "cb/servo-skull-gunner-front.jpg",
      movement: 4,
      defence: 6,
      infantry: 1,
      lightVehicles: 0,
      heavyVehicles: null,
      abilities: [Ability.Flying, Ability.Signum]
    },
    back: {
      image: "cb/servo-skull-gunner-back.jpg"
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
      image: "cb/sgt-elias-front.jpg",
      movement: 4,
      defence: 6,
      infantry: 2,
      lightVehicles: 1,
      heavyVehicles: null,
      abilities: [Ability.Order, Ability.Assault, Ability.Ambush]
    },
    back: {
      image: "cb/sgt-elias-back.jpg"
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
      image: "cb/sgt-telion-front.jpg",
      movement: 4,
      defence: 6,
      infantry: 2,
      lightVehicles: 1,
      heavyVehicles: 0,
      abilities: [Ability.Assault, Ability.Sniper, Ability.Ambush]
    },
    back: {
      image: "cb/sgt-telion-back.jpg",
      movement: 4,
      abilities: [Ability.Sniper]
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
      image: "cb/sgt-vorolanus-front.jpg",
      movement: 4,
      defence: 6,
      infantry: 2,
      lightVehicles: 1,
      heavyVehicles: 0,
      abilities: [Ability.Order, Ability.Assault, Ability.FireOnTheMove, Ability.LimitedRange]
    },
    back: {
      image: "cb/sgt-vorolanus-back.jpg",
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
      image: "cb/shootas-front.jpg",
      movement: 3,
      defence: 4,
      infantry: 1,
      lightVehicles: 1,
      heavyVehicles: null,
      abilities: [Ability.Assault]
    },
    back: {
      image: "cb/shootas-back.jpg",
      movement: 3,
      defence: 4,
      infantry: 1,
      lightVehicles: 0,
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
      image: "cb/sluggas-front.jpg",
      movement: 3,
      defence: 4,
      infantry: 1,
      lightVehicles: 1,
      heavyVehicles: null,
      abilities: [Ability.Assault, Ability.SuppressiveFire, Ability.LimitedRange]
    },
    back: {
      image: "cb/sluggas-back.jpg",
      movement: 3,
      defence: 4,
      infantry: 1,
      lightVehicles: 0,
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
      image: "cb/squigs-front.jpg",
      movement: 4,
      defence: 6,
      infantry: 4,
      lightVehicles: 2,
      heavyVehicles: null,
      abilities: [Ability.Bodyguard, Ability.Assault, Ability.LimitedRange]
    },
    back: {
      image: "cb/squigs-back.jpg",
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
      image: "cb/stormboyz-front.jpg",
      movement: 5,
      defence: 4,
      infantry: 1,
      lightVehicles: 1,
      heavyVehicles: 0,
      abilities: [Ability.Large, Ability.Assault, Ability.SuppressiveFire, Ability.LimitedRange]
    },
    back: {
      image: "cb/stormboyz-back.jpg",
      movement: 5,
      defence: 4,
      infantry: 1,
      lightVehicles: 0,
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
      image: "cb/tactical-front.jpg",
      movement: 3,
      defence: 5,
      infantry: 3,
      lightVehicles: 2,
      heavyVehicles: 0,
      abilities: [Ability.Assault, Ability.FireOnTheMove, Ability.SuppressiveFire]
    },
    back: {
      image: "cb/tactical-back.jpg",
      movement: 3,
      defence: 6,
      infantry: 2,
      lightVehicles: 1,
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
      image: "cb/tankbustas-front.jpg",
      movement: 3,
      defence: 5,
      infantry: 1,
      lightVehicles: 4,
      heavyVehicles: 4,
      abilities: [Ability.Assault, Ability.LimitedRange]
    },
    back: {
      image: "cb/tankbustas-back.jpg",
      movement: 1,
      defence: 5,
      infantry: 1,
      lightVehicles: 4,
      heavyVehicles: 4,
      abilities: [Ability.Overwatch, Ability.LimitedRange]
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
      image: "cb/thunderfire-cannon-front.jpg",
      movement: 2,
      defence: 6,
      infantry: 3,
      lightVehicles: 4,
      heavyVehicles: 3,
      abilities: [Ability.IndirectFire, Ability.FrighteningShot, Ability.LimitedFiringArc]
    },
    back: {
      image: "cb/thunderfire-cannon-back.jpg"
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
      image: "cb/trukk-front.jpg",
      movement: 6,
      defence: 8,
      infantry: 3,
      lightVehicles: 3,
      heavyVehicles: null,
      abilities: [Ability.Transport, Ability.FireOnTheMove, Ability.SuppressiveFire]
    },
    back: {
      image: "cb/trukk-back.jpg",
      terrainEffects: [TerrainEffect.Structure, TerrainEffect.ImpassableToSomeUnits, TerrainEffect.ObstacleBlocks]
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
      image: "cb/uzdrakh-front.jpg",
      movement: 3,
      defence: 7,
      infantry: 3,
      lightVehicles: 2,
      heavyVehicles: 2,
      abilities: [Ability.Large, Ability.Order, Ability.Assault, Ability.Tearing, Ability.FireOnTheMove]
    },
    back: {
      image: "cb/uzdrakh-back.jpg",
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
      image: "cb/warbuggy-front.jpg",
      movement: 6,
      defence: 5,
      infantry: 3,
      lightVehicles: 3,
      heavyVehicles: null,
      abilities: [Ability.SuppressiveFire, Ability.MachineGunner, Ability.FireOnTheMove]
    },
    back: {
      image: "cb/warbuggy-back.jpg",
      terrainEffects: [TerrainEffect.ObstacleObscures, TerrainEffect.DefensiveBonus, TerrainEffect.Structure]
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
      image: "bm/big-shoota-front.jpg",
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
      image: "bm/bomb-squigs-front.jpg",
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
      image: "bm/grot-mega-tank-front.jpg",
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
      image: "bm/grot-tank-a-front.jpg",
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
      image: "bm/grot-tank-b-front.jpg",
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
      image: "bm/grot-tank-c-front.jpg",
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
      image: "bm/killa-kan-a-front.jpg",
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
      image: "bm/killa-kan-b-front.jpg",
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
      image: "bm/killa-kan-c-front.jpg",
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
      image: "bm/mega-nob-a-front.jpg",
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
      image: "bm/mega-nob-b-front.jpg",
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
      image: "bm/mega-nob-c-front.jpg",
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
      image: "bm/meka-dread-front.jpg",
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
          abilities: [Ability.Piercing, Ability.FrighteningShot, Ability.FireOnTheMove]
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
      image: "bm/rokkit-launcha-front.jpg",
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
      image: "bm/skaablitz-front.jpg",
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
      image: "bm/stompa-front.jpg",
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
          abilities: [Ability.IndirectFire, Ability.TwinLinked, Ability.SuppressiveFire, Ability.FireOnTheMove]
        },
        {
          infantry: 4,
          lightVehicles: 6,
          heavyVehicles: 5,
          abilities: [Ability.LongDistanceAssault, Ability.LimitedRange, Ability.Demolishing, Ability.Assault, Ability.Tearing]
        }
      ],
      secondaryWeapon: {
        infantry: 3,
        lightVehicles: 4,
        heavyVehicles: 3,
        abilities: [Ability.Flamethrower, Ability.SuppressiveFire, Ability.FireOnTheMove, Ability.DoubleFire]
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
      image: "bm/trukk-front.jpg",
      movement: 6,
      defence: 8,
      infantry: 3,
      lightVehicles: 3,
      heavyVehicles: null,
      abilities: [Ability.Transport, Ability.FireOnTheMove, Ability.SuppressiveFire]
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
      image: "bm/warbuggy-front.jpg",
      movement: 6,
      defence: 5,
      infantry: 3,
      lightVehicles: 3,
      heavyVehicles: null,
      abilities: [Ability.SuppressiveFire, Ability.MachineGunner, Ability.FireOnTheMove]
    }
  }
];
