import { Barricade } from "../components/terrainEffects/Barricade.tsx";
import { DefensiveBonus } from "../components/terrainEffects/DefensiveBonus.tsx";
import { DifficultPassage } from "../components/terrainEffects/DifficultPassage.tsx";
import { Elevation } from "../components/terrainEffects/Elevation.tsx";
import { Impassable } from "../components/terrainEffects/Impassable.tsx";
import { ImpassableToSomeUnits } from "../components/terrainEffects/ImpassableToSomeUnits.tsx";
import { ObstacleBlocks } from "../components/terrainEffects/ObstacleBlocks.tsx";
import { ObstacleObscures } from "../components/terrainEffects/ObstacleObscures.tsx";
import { Structure } from "../components/terrainEffects/Structure.tsx";

export enum TerrainEffect {
  Barricade = "Barricade",
  DefensiveBonus = "Defensive Bonus",
  DifficultPassage = "Difficult Passage",
  Elevation = "Elevation",
  Impassable = "Impassable",
  ImpassableToSomeUnits = "Impassable To Some Units",
  ObstacleBlocks = "Obstacle Blocks",
  ObstacleObscures = "Obstacle Obscures",
  Structure = "Structure",
}

export const terrainEffectComponents = {
  [TerrainEffect.Barricade]: Barricade,
  [TerrainEffect.DefensiveBonus]: DefensiveBonus,
  [TerrainEffect.DifficultPassage]: DifficultPassage,
  [TerrainEffect.Elevation]: Elevation,
  [TerrainEffect.Impassable]: Impassable,
  [TerrainEffect.ImpassableToSomeUnits]: ImpassableToSomeUnits,
  [TerrainEffect.ObstacleBlocks]: ObstacleBlocks,
  [TerrainEffect.ObstacleObscures]: ObstacleObscures,
  [TerrainEffect.Structure]: Structure,
};
