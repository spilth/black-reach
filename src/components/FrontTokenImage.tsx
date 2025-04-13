import React from "react";
import type { Unit } from "../data/interfaces.tsx";

export const FrontTokenImage = ({ unit }: { unit: Unit }) => {
  return <>
    <img src={`/units/${unit.front.image}`} alt={unit.name} className="img-fluid p-2" />
  </>;
};
