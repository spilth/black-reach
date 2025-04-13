import React from "react";

export const Elevation = () => {
  return <>
    <p>This Terrain Element is only found between squares.
      Los that cross this Terrain Element have their range
      reduced to one square past the Elevation Terrain Element.</p>
    <p>Like other Obstacles, a Unit directly adjacent to the Elevation
      Terrain Element ignores its effects. Al other Units are affected
      normally.</p>
  </>;
};