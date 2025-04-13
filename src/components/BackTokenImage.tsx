import React from "react";
import type { Unit } from "../data/interfaces.tsx";

export const BackTokenImage = ({ unit }: { unit: Unit }) => {
  return <>
    {unit.back && (<img src={`/units/${unit.back.image}`} alt={unit.name} className="img-fluid p-2" />)}
  </>;
};
