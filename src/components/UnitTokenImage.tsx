import { type Unit } from "../data/units.tsx";
import React from "react";

export const UnitTokenImage = ({ unit }: { unit: Unit }) => {
  return <img src={`/units/${unit.front.image}`} alt={unit.name} className="img-fluid p-2" />;
};
