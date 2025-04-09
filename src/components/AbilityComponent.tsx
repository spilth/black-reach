import { Ability, abilityComponents } from "../data/abilities.tsx";
import React from "react";

const AbilityComponent = ({ ability }: { ability: Ability }) => {
  const ComponentToRender = abilityComponents[ability];

  return ComponentToRender ? <ComponentToRender /> : <p>Unknown Ability</p>;
};

export default AbilityComponent;
