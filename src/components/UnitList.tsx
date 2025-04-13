import React from "react";
import { units } from "../data/units.tsx";
import { Accordion, Tab, Tabs } from "react-bootstrap";
import FrontDetails from "./FrontDetails.tsx";
import { FactionAccordionItem } from "./FactionAccordionItem.tsx";
import { FrontTokenImage } from "./FrontTokenImage.tsx";
import { Faction, Release } from "../data/enums.tsx";
import type { Unit } from "../data/interfaces.tsx";
import { BackTokenImage } from "./BackTokenImage.tsx";
import BackDetails from "./BackDetails.tsx";

const UnitList = () => {
  const cbUltramarines = units.filter(unit => unit.release == Release.CB && unit.faction == Faction.Ultramarines);
  const cbOrks = units.filter(unit => unit.release == Release.CB && unit.faction == Faction.Orks);
  const bmOrks = units.filter(unit => unit.release == Release.BM && unit.faction == Faction.Orks);

  const [selectedUnit, setSelectedUnit] = React.useState<Unit>(cbUltramarines[0]);

  return <div className="pe-2">
    <div className="row g-0 vh-100">
      <div className="col-3 col-lg-2 border-end">
        <Accordion defaultActiveKey="Ultramarines" flush>
          <FactionAccordionItem name="Core Box - Ultramarines"
                                units={cbUltramarines}
                                onClick={setSelectedUnit}
                                isActive={(unit: Unit) => unit === selectedUnit} />
          <FactionAccordionItem name="Core Box - Orks"
                                units={cbOrks}
                                onClick={setSelectedUnit}
                                isActive={(unit: Unit) => unit === selectedUnit} />
          <FactionAccordionItem name="Bad Moon - Orks"
                                units={bmOrks}
                                onClick={setSelectedUnit}
                                isActive={(unit: Unit) => unit === selectedUnit} />

        </Accordion>
      </div>
      <div className="col-9 col-lg-10 p-2">
        <h1>{selectedUnit.name}</h1>

        <Tabs id="unit-tokens" defaultActiveKey="front" className="mb-2">
          <Tab eventKey="front" title="Front">
            <div className="row">
              <div className="col">
                <FrontDetails unit={selectedUnit} />
              </div>
              <div className="col">
                <FrontTokenImage unit={selectedUnit} />
              </div>
            </div>
          </Tab>
          {selectedUnit.back && (
            <Tab eventKey="back" title="Back">
              <div className="row">
                <div className="col">
                  <BackDetails unit={selectedUnit} />
                </div>
                <div className="col">
                  <BackTokenImage unit={selectedUnit} />
                </div>
              </div>
            </Tab>
          )}
        </Tabs>
      </div>
    </div>
  </div>;
};

export default UnitList;
