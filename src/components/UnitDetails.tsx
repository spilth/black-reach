import { Accordion } from "react-bootstrap";
import React from "react";
import type { Unit } from "../data/units.tsx";
import AbilityComponent from "./AbilityComponent.tsx";
import type { Ability } from "../data/abilities.tsx";

const abilityImageName = (ability: Ability) => ability.toLowerCase().replace(/ /g, "");

const AbilitiesAccordion = ({ abilities }: { abilities: Ability[] }) => (
  <Accordion className="mb-4">
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


const UnitDetails = ({ unit }: { unit: Unit }) =>
  <>
    <h1>{unit.name}</h1>

    {unit.abilities && <>
      <h2>Special Abilities</h2>

      <AbilitiesAccordion abilities={unit.abilities} />
    </>}

    {unit.primaryWeapons &&
      <>
        <h2>Primary Weapon Abilities</h2>

        <AbilitiesAccordion abilities={unit.primaryWeapons[0].abilities} />
      </>
    }

    {unit.secondaryWeapon &&
      <>
        <h2>Secondary Weapon Abilities</h2>

        <AbilitiesAccordion abilities={unit.secondaryWeapon.abilities} />
      </>
    }
  </>;

export default UnitDetails;