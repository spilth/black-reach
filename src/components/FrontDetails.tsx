import React from "react";
import type { Unit } from "../data/interfaces.tsx";
import { AbilitiesAccordion } from "./AbilitiesAccordion.tsx";

const FrontDetails = ({ unit }: { unit: Unit }) =>
  <>
    {unit.front.abilities && <>
      <h2>Special Abilities</h2>

      <AbilitiesAccordion abilities={unit.front.abilities} />
    </>}

    {unit.front.primaryWeapons &&
      <>
        {unit.front.primaryWeapons.map((weapon, index) =>
          <div key={index + 1}>
            <h2>Primary Weapon {index + 1} Abilities</h2>

            <AbilitiesAccordion abilities={weapon.abilities} />
          </div>)}
      </>
    }

    {unit.front.secondaryWeapon &&
      <>
        <h2>Secondary Weapon Abilities</h2>

        <AbilitiesAccordion abilities={unit.front.secondaryWeapon.abilities} />
      </>
    }
  </>;

export default FrontDetails;
