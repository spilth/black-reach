import { Faction, Release, Role, Size, Type } from "../enums.tsx";
import { Ability } from "../abilities.tsx";
import type { Unit } from "../interfaces.tsx";
import { TerrainEffect } from "../terrainEffects.tsx";

export const bm: Unit[] = [
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
    },
    back: {
      image: "bm/big-shoota-back.jpg",
      movement: 3,
      defence: 4,
      infantry: 3,
      lightVehicles: 2,
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
    },
    back: {
      image: "bm/bomb-squigs-back.jpg",
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
    },
    back: {
      image: "bm/grot-mega-tank-back.jpg",
      terrainEffects: [TerrainEffect.Structure, TerrainEffect.Impassable, TerrainEffect.ObstacleBlocks]
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
    },
    back: {
      image: "bm/grot-tank-a-back.jpg",
      terrainEffects: [TerrainEffect.ObstacleObscures, TerrainEffect.DefensiveBonus, TerrainEffect.Structure]
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
    },
    back: {
      image: "bm/grot-tank-b-back.jpg",
      terrainEffects: [TerrainEffect.ObstacleObscures, TerrainEffect.DefensiveBonus, TerrainEffect.Structure]
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
    },
    back: {
      image: "bm/grot-tank-c-back.jpg",
      terrainEffects: [TerrainEffect.ObstacleObscures, TerrainEffect.DefensiveBonus, TerrainEffect.Structure]
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
    },
    back: {
      image: "bm/killa-kan-a-back.jpg",
      terrainEffects: [TerrainEffect.ObstacleObscures, TerrainEffect.DefensiveBonus, TerrainEffect.Structure]
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
    },
    back: {
      image: "bm/killa-kan-b-back.jpg",
      terrainEffects: [TerrainEffect.ObstacleObscures, TerrainEffect.DefensiveBonus, TerrainEffect.Structure]
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
    },
    back: {
      image: "bm/killa-kan-c-back.jpg",
      terrainEffects: [TerrainEffect.ObstacleObscures, TerrainEffect.DefensiveBonus, TerrainEffect.Structure]
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
    },
    back: {
      image: "bm/mega-nob-a-back.jpg",
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
    },
    back: {
      image: "bm/mega-nob-b-back.jpg",
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
    },
    back: {
      image: "bm/mega-nob-c-back.jpg",
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
    },
    back: {
      image: "bm/meka-dread-back.jpg",
      terrainEffects: [TerrainEffect.Structure, TerrainEffect.Impassable, TerrainEffect.ObstacleBlocks]
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
    },
    back: {
      image: "bm/rokkit-launcha-back.jpg",
      movement: 3,
      defence: 4,
      infantry: 0,
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
    },
    back: {
      image: "bm/skaablitz-back.jpg",
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
    },
    back: {
      image: "bm/stompa-back.jpg",
      terrainEffects: [TerrainEffect.DefensiveBonus, TerrainEffect.ObstacleObscures, TerrainEffect.ObstacleBlocks, TerrainEffect.Impassable]
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
    },
    back: {
      image: "bm/trukk-back.jpg",
      terrainEffects: [TerrainEffect.Structure, TerrainEffect.ImpassableToSomeUnits, TerrainEffect.ObstacleBlocks]
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
    },
    back: {
      image: "bm/warbuggy-back.jpg",
      terrainEffects: [TerrainEffect.ObstacleObscures, TerrainEffect.DefensiveBonus, TerrainEffect.Structure]
    }
  }
];
