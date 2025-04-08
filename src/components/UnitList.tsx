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
    <div className="pe-2">
      <div className="row g-0 vh-100">
        <div className="col-4 col-lg-2 border-end">
          <Accordion defaultActiveKey="0" flush>
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
        <div className="col-8 col-lg-10 ps-2">
          <h1>{selectedUnit.name}</h1>

          <p><UnitTokenImage unit={selectedUnit} /></p>

          {selectedUnit.abilities && (
            <>
              <h2>Special Abilities</h2>

              <Accordion>
                {selectedUnit.abilities.map((ability) => (
                  <Accordion.Item eventKey={ability} key={ability}>
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