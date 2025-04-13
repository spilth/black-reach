import React from "react";
import type { Unit } from "../data/interfaces.tsx";
import { AbilitiesAccordion } from "./AbilitiesAccordion.tsx";
import { TerrainEffectsAccordion } from "./TerrainEffectsAccordion.tsx";

const BackDetails = ({ unit }: { unit: Unit }) =>
  <>
    {unit.back && (
      <>
        {"abilities" in unit.back && <>
          <h2>Special Abilities</h2>

          <AbilitiesAccordion abilities={unit.back.abilities} />
        </>}

        {"terrainEffects" in unit.back &&
          <>
            <h2>Terrain Effects</h2>

            <TerrainEffectsAccordion terrainEffects={unit.back.terrainEffects} />
          </>
        }


      </>
    )}

  </>;

export default BackDetails;
