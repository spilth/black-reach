import React, { type FC, useEffect } from "react";
import { type Unit, units } from "../data/units.tsx";
import { Assault } from "./abilities/Assault.tsx";
import { Ability, abilityComponents } from "../data/abilities.tsx";
import { UnitTokenImage } from "./UnitTokenImage.tsx";

const UnitList = () => {
  const [selectedUnit, setSelectedUnit] = React.useState<Unit>(units[0]);
  const [selectedAbility, setSelectedAbility] = React.useState<Ability>(Ability.Assault);
  const [abilityComponent, setAbilityComponent] = React.useState<FC>(Assault);

  useEffect(() => {
    if (selectedUnit.abilities && selectedUnit.abilities.length > 0) {
      setSelectedAbility(selectedUnit.abilities[0]);
    }
  }, [selectedUnit]);

  useEffect(() => {
      setAbilityComponent(abilityComponents[selectedAbility]);
    },
    [selectedAbility]
  );

  return (
    <div className="row">
      <div className="col-2">
        <div className="list-group list-group-flush">
          {units.map(unit => (
              <a key={unit.name}
                 className={"list-group-item list-group-item-action " + ((unit.name === selectedUnit.name) ? "active" : "")}
                 onClick={(event) => {
                   event.preventDefault();
                   setSelectedUnit(unit);
                 }}>{unit.name}</a>
            )
          )}
        </div>
      </div>
      <div className="col-3">
        <h1>{selectedUnit.name}</h1>

        <p><UnitTokenImage unit={selectedUnit} /></p>

        <dl>
          <dt>Faction</dt>
          <dd>{selectedUnit.faction}</dd>
          <dt>Type</dt>
          <dd>{selectedUnit.type}</dd>
          <dt>Role</dt>
          <dd>{selectedUnit.role}</dd>
          <dt>Movement</dt>
          <dd>{selectedUnit.movement}</dd>
          <dt>Defence</dt>
          <dd>{selectedUnit.defence}</dd>
          <dt>Infantry</dt>
          <dd>{selectedUnit.infantry != null ? (selectedUnit.infantry >= 0 ? `+${selectedUnit.infantry}` : "") : "X"}</dd>
          <dt>Light Vehicles</dt>
          <dd>{selectedUnit.lightVehicles != null ? (selectedUnit.lightVehicles >= 0 ? `+${selectedUnit.lightVehicles}` : "") : "X"}</dd>
          <dt>Heavy Vehicles</dt>
          <dd>{selectedUnit.heavyVehicles != null ? (selectedUnit.heavyVehicles >= 0 ? `+${selectedUnit.heavyVehicles}` : "") : "X"}</dd>
        </dl>
      </div>
      <div className="col-3">
        {selectedUnit.abilities && (
          <>
            <h2>Special Abilities</h2>

            <div className="list-group">
              {selectedUnit.abilities.map((ability) => (
                <a key={ability}
                   className={"list-group-item list-group-item-action " + ((ability === selectedAbility) ? "active" : "")}
                   onClick={(event) => {
                     event.preventDefault();
                     setSelectedAbility(ability);
                   }}
                ><img
                  src={`/abilities/${ability.toLowerCase().replace(/ /g, "")}.png`} width={32}
                  height={32} /> {ability.valueOf()}</a>
              ))}

            </div>
          </>
        )}
      </div>
      <div className="col-4">
        {abilityComponent}
      </div>
    </div>
  );
};

export default UnitList;