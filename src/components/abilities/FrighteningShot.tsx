import React from "react";

export const FrighteningShot = () => {
  return <>
    <h3><img src="/abilities/frighteningshot.png" width={32} height={32} /> Frightening Shot</h3>
    <p>If a Firing Action by this Unit fails (no Hit, Suppressed
      Marker, or Damage Marker), you may place 1
      Suppressed Marker on the target.</p>
    <p>This Special Ability cannot be used in combination with the
      Machine Gunner Special Ability.</p>
  </>;
};