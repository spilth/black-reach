import { type Unit } from "../data/units.tsx";
import React from "react";

const unitImageSource = (unit: Unit) => `/units/${unit.release.toLowerCase().replace(/ /g, "-")}/${unit.image}`;

export const UnitTokenImage = ({ unit }: { unit: Unit }) => {
  return <img src={unitImageSource(unit)} alt={unit.name} className="img-fluid p-2" />;
};
