import React from "react";
import { Faction, type Unit, units } from "../data/units.tsx";
import { Accordion } from "react-bootstrap";
import UnitDetails from "./UnitDetails.tsx";
import { FactionAccordionItem } from "./FactionAccordionItem.tsx";
import { UnitTokenImage } from "./UnitTokenImage.tsx";

const UnitList = () => {
  const ultramarines = units.filter(unit => unit.faction == Faction.Ultramarines);
  const orks = units.filter(unit => unit.faction == Faction.Orks);

  const [selectedUnit, setSelectedUnit] = React.useState<Unit>(ultramarines[0]);

  return <div className="pe-2">
    <div className="row g-0 vh-100">
      <div className="col-3 col-lg-2 border-end">
        <Accordion defaultActiveKey="Ultramarines" flush>
          <FactionAccordionItem name="Ultramarines"
                                units={ultramarines}
                                onClick={setSelectedUnit}
                                isActive={(unit: Unit) => unit === selectedUnit} />
          <FactionAccordionItem name="Orks"
                                units={orks}
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