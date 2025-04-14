import type { Ability } from "../data/abilities.tsx";
import { Accordion } from "react-bootstrap";
import AbilityComponent from "./AbilityComponent.tsx";
import React from "react";

const abilityImageName = (ability: Ability) => ability.toLowerCase().replace(/ /g, "");

export const AbilitiesAccordion = ({ abilities }: { abilities: Ability[] }) => {
  return (
    <Accordion className="mb-4" alwaysOpen>
      {abilities.map(ability => (
        <Accordion.Item eventKey={ability} key={ability}>
          <Accordion.Header><img
            className="me-2"
            alt={`${ability.valueOf()} Token`}
            src={`/abilities/${(abilityImageName(ability))}.png`} width={32}
            height={32} />{ability.valueOf()}</Accordion.Header>
          <Accordion.Body>
            <AbilityComponent ability={ability} />
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};