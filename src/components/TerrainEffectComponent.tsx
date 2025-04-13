import React from "react";
import { type TerrainEffect, terrainEffectComponents } from "../data/terrainEffects.tsx";

const TerrainEffectComponent = ({ terrainEffect }: { terrainEffect: TerrainEffect }) => {
  const ComponentToRender = terrainEffectComponents[terrainEffect];

  return ComponentToRender ? <ComponentToRender /> : <p>Unknown Terrain Effect</p>;
};

export default TerrainEffectComponent;
