import { Size, type Unit } from "../data/units.tsx";
import React from "react";

export const UnitTokenImage = ({ unit }: { unit: Unit }) => {
  let width, height = 0;

  switch (unit.size) {
    case Size.Individual:
      width = 234;
      height = 234;
      break;
    case Size.Squad:
      width = 256;
      height = 256;
  }

  return (<img src={`/units/${unit.image}`}
               alt={unit.name} width={width} height={height}
               className="img-fluid p-2" />);
};