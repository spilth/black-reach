import React from "react";
import {units} from "../data/units.tsx";

const UnitList = () => {
    return (
        <div>
            <h1>Units</h1>

            <table className="table table-borderless">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Move</th>
                    <th>Defence</th>
                    <th>Infantry</th>
                    <th>Light Vehicles</th>
                    <th>Heavy Vehicles</th>
                </tr>
                </thead>
                <tbody>
                {units.map(unit => (
                    <tr key={unit.image}>
                        <td>{unit.name}</td>
                        <td><img src={`/units/${unit.image}`} width={128} height={128} alt={`${unit.name} Token`}/></td>
                        <td>{unit.move}</td>
                        <td>{unit.defence}</td>
                        <td>{unit.infantry && `+${unit.infantry}`}</td>
                        <td>{unit.lightVehicles && `+${unit.lightVehicles}`}</td>
                        <td>{unit.heavyVehicles && `+${unit.heavyVehicles}`}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default UnitList;