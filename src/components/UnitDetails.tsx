import { UnitTokenImage } from "./UnitTokenImage.tsx";
import { Accordion } from "react-bootstrap";
import React from "react";
import type { Unit } from "../data/units.tsx";
import AbilityComponent from "./AbilityComponent.tsx";
import type { Ability } from "../data/abilities.tsx";

const abilityImageName = (ability: Ability) => ability.toLowerCase().replace(/ /g, "");

const UnitDetails = ({ unit }: { unit: Unit }) =>
  <>
    <h1>{unit.name}</h1>

    {unit.abilities && <>
      <h2>Special Abilities</h2>

      <Accordion>
        {unit.abilities.map(ability => (
          <Accordion.Item eventKey={ability} key={ability}>
            <Accordion.Header><img
              className="me-2"
              alt={`${unit.name} Token`}
              src={`/abilities/${(abilityImageName(ability))}.png`} width={32}
              height={32} />{ability.valueOf()}</Accordion.Header>
            <Accordion.Body>
              <AbilityComponent ability={ability} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>}
  </>;

export default UnitDetails;