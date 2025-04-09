import type { Unit } from "../data/units.tsx";
import { Accordion, ListGroup } from "react-bootstrap";
import React from "react";

export const FactionAccordionItem = (
  {
    name,
    units,
    onClick,
    isActive
  }: {
    name: string;
    units: Unit[],
    onClick: Function,
    isActive: Function
  }
) => (
  <Accordion.Item eventKey={name}>
    <Accordion.Header>{name}</Accordion.Header>
    <Accordion.Body className="p-0">
      <ListGroup variant="flush">
        {units.map(unit => (
            <ListGroup.Item key={unit.name}
                            active={isActive(unit)}
                            onClick={() => onClick(unit)}>{unit.name}</ListGroup.Item>
          )
        )}
      </ListGroup>
    </Accordion.Body>
  </Accordion.Item>
);