import { Accordion } from "react-bootstrap";
import React from "react";
import TerrainEffectComponent from "./TerrainEffectComponent.tsx";
import type { TerrainEffect } from "../data/terrainEffects.tsx";

const terrainEffectImageName = (terrainEffect: TerrainEffect) => terrainEffect.toLowerCase().replace(/ /g, "");

export const TerrainEffectsAccordion = ({ terrainEffects }: { terrainEffects: TerrainEffect[] }) => (
  <Accordion className="mb-4" alwaysOpen>
    {terrainEffects.map(terrainEffect => (
      <Accordion.Item eventKey={terrainEffect} key={terrainEffect}>
        <Accordion.Header><img
          className="me-2"
          alt={`${terrainEffect.valueOf()} Token`}
          src={`/terrainEffects/${(terrainEffectImageName(terrainEffect))}.png`} width={32}
          height={32} />{terrainEffect.valueOf()}</Accordion.Header>
        <Accordion.Body>
          <TerrainEffectComponent terrainEffect={terrainEffect} />
        </Accordion.Body>
      </Accordion.Item>
    ))}
  </Accordion>
);