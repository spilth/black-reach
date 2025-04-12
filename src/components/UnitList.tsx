import React from "react";
import { Faction, Release, type Unit, units } from "../data/units.tsx";
import { Accordion } from "react-bootstrap";
import UnitDetails from "./UnitDetails.tsx";
import { FactionAccordionItem } from "./FactionAccordionItem.tsx";
import { UnitTokenImage } from "./UnitTokenImage.tsx";

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
      <div className="col-5 col-lg-5 p-2">
        <UnitDetails unit={selectedUnit} />
      </div>
      <div className="col-4 col-lg-5 p-2">
        <UnitTokenImage unit={selectedUnit} />
      </div>
    </div>
  </div>;
};

export default UnitList;