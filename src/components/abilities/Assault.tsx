import React from "react";

export const Assault = () => {
  return <>
    <p>Only Units that have the Assault Special Ability may
      engage an enemy Infantry Unit or Vehicle in close
      combat.</p>
    <p>In most cases, a Vehicle will not have this ability.
      Units that do not have the Assault Special Ability can still
      defend themselves in close combat, but they only roll 1 die.
      If a Unit has an X for a Combat Value, it means that it cannot
      Assault a target of that type (unless you have another Special
      Ability or Gear that allows it).</p>
  </>;
};