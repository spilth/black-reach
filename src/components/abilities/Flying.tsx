import React from "react";

export const Flying = () => {
  return <>
    <p>A Unit that has this special movement can
      fly over Terrain Elements or other Units if its
      Movement Value allows it.</p>
    <p>Move it as if there were no Obstacle or ZoC. It cannot stop on
      a normally Impassable Terrain Element.</p>
    <p>If it has the Assault Special Ability, it can end its Movement
      Action on an enemy Unit. Resolve an Assault.</p>
    <p>If the flying Unit loses, it is Destroyed if it did not begin its
      Assault in an unoccupied square or if it started the Assault in a
      normally Impassable square.</p>
  </>;
};