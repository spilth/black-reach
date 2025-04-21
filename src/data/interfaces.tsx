import { Faction, Release, Role, Size, Type } from "./enums.tsx";
import { TerrainEffect } from "./terrainEffects.tsx";
import { Ability } from "./abilities.tsx";

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
  abilities: Ability[];
  primaryWeapons?: Weapon[];
  secondaryWeapon?: Weapon | null;
}

export interface Back {
  image: string;
}

export interface Reduced extends Back {
  movement: number | null;
  defence: number;
  infantry: number | null;
  lightVehicles: number | null;
  heavyVehicles: number | null;
  abilities: Ability[];
}

export interface Destroyed extends Back {

}

export interface Active extends Back {
  movement: number | null;
  defence: number;
  infantry: number | null;
  lightVehicles: number | null;
  heavyVehicles: number | null;
  abilities: Ability[];
}

export interface Wrecked extends Back {
  terrainEffects: TerrainEffect[];
}

export interface Ambush extends Back {
  movement: number;
  abilities: Ability[];
}

export interface Unit {
  release: Release;
  name: string;
  faction: Faction;
  type: Type;
  role: Role;
  size: Size;
  front: Front;
  back: Reduced | Active | Wrecked | Ambush | Destroyed;
}
