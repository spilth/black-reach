import React, { type FC, useEffect } from "react";
import { Faction, type Unit, units } from "../data/units.tsx";
import { Assault } from "./abilities/Assault.tsx";
import { Ability, abilityComponents } from "../data/abilities.tsx";
import { UnitTokenImage } from "./UnitTokenImage.tsx";
import { Accordion, ListGroup } from "react-bootstrap";

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
        <Accordion alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Ultramarines</Accordion.Header>
            <Accordion.Body className="p-0">
              <ListGroup variant="flush">
                {units.filter((unit) => unit.faction == Faction.Ultramarines).map(unit => (
                    <ListGroup.Item key={unit.name}
                                    active={unit.name === selectedUnit.name}
                                    onClick={() => setSelectedUnit(unit)}>{unit.name}</ListGroup.Item>
                  )
                )}
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Orks</Accordion.Header>
            <Accordion.Body className="p-0">
              <ListGroup variant="flush">
                {units.filter((unit) => unit.faction == Faction.Orks).map(unit => (
                    <ListGroup.Item key={unit.name}
                                    active={unit.name === selectedUnit.name}
                                    onClick={() => setSelectedUnit(unit)}>{unit.name}</ListGroup.Item>
                  )
                )}
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

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

            <ListGroup>
              {selectedUnit.abilities.map((ability) => (
                <ListGroup.Item action key={ability}
                                active={ability === selectedAbility}
                                onClick={(event) => {
                                  event.preventDefault();
                                  setSelectedAbility(ability);
                                }}
                ><img
                  alt={`${selectedUnit.name} Token`}
                  src={`/abilities/${ability.toLowerCase().replace(/ /g, "")}.png`} width={32}
                  height={32} /> {ability.valueOf()}
                </ListGroup.Item>
              ))}

            </ListGroup>
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