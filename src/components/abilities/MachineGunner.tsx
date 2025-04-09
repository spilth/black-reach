import React from "react";

export const MachineGunner = () => {
  return <>
    <p>During a Firing Action, a Unit that has this ability can
      split its Combat Value (modified by any bonuses or
      penalties) between several targets, provided it grants
      at least a +1 bonus to each target (one roll must be made for
      each target).</p>
      <p>The player must announce this split before making the first roll
      and may only target Units within 2 squares of each other and
      of the same type (Infantry, Light Vehicles, or Heavy Vehicles).
      The firing Unit naturally needs to have a Clear or Obscured Los
      to each target.</p>
      <p>Each shot is separately affected by the Obstacles it crosses.</p>
  </>;
};