import React, { type FC, useEffect } from "react";
import { Faction, type Unit, units } from "../data/units.tsx";
import { Assault } from "./abilities/Assault.tsx";
import { Ability, abilityComponents } from "../data/abilities.tsx";
import { UnitTokenImage } from "./UnitTokenImage.tsx";
import { Accordion, ListGroup } from "react-bootstrap";

const AbilityComponent = ({ ability }: { ability: Ability }) => {
  const ComponentToRender = abilityComponents[ability];

  return ComponentToRender ? <ComponentToRender /> : <p>Unknown Ability</p>;
};

const UnitList = () => {
  const [selectedUnit, setSelectedUnit] = React.useState<Unit>(units[0]);

  return (
    <div className="container-fluid">

      <div className="row">
        <div className="col-md-2">
          <Accordion defaultActiveKey="0">
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
        <div className="col-md-3">
          <h1>{selectedUnit.name}</h1>

          <p className="lead">{selectedUnit.type} / {selectedUnit.role}</p>

          <p><UnitTokenImage unit={selectedUnit} /></p>


          <dl>
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
        <div className="col-md-4">
          {selectedUnit.abilities && (
            <>
              <h2>Special Abilities</h2>

              <Accordion>
                {selectedUnit.abilities.map((ability) => (
                  <Accordion.Item eventKey={ability}>
                    <Accordion.Header><img
                      className="me-2"
                      alt={`${selectedUnit.name} Token`}
                      src={`/abilities/${ability.toLowerCase().replace(/ /g, "")}.png`} width={32}
                      height={32} />{ability.valueOf()}</Accordion.Header>
                    <Accordion.Body>
                      <AbilityComponent ability={ability} />
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UnitList;