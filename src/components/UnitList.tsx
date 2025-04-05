import React from "react";
import {type Unit, units} from "../data/units.tsx";

const UnitList = () => {
    const [selectedUnit, setSelectedUnit] = React.useState<Unit>(units[0]);

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
                    ))}
                </div>
            </div>
            <div className="col-10">
                <h1>{selectedUnit.name}</h1>

                <img src={`/units/${selectedUnit.image}`} alt={selectedUnit.name} width={128} height={128}
                     className="rounded-5"/>

                <h2>Values</h2>

                <dl>
                    <dt>Movement</dt>
                    <dd>{selectedUnit.movement}</dd>
                    <dt>Defence</dt>
                    <dd>{selectedUnit.defence}</dd>
                    <dt>Infantry</dt>
                    <dd>{selectedUnit.infantry >= 0 ? `+${selectedUnit.infantry}` : ""}</dd>
                    <dt>Light Vehicles</dt>
                    <dd>{selectedUnit.lightVehicles >= 0 ? `+${selectedUnit.lightVehicles}` : ""}</dd>
                    <dt>Heavy Vehicles</dt>
                    <dd>{selectedUnit.heavyVehicles >= 0 ? `+${selectedUnit.heavyVehicles}` : ""}</dd>

                </dl>
            </div>
        </div>
    )
}

export default UnitList;