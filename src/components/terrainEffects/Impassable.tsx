import React from "react";

export const Impassable = () => {
  return <>
    <p>No Unit may enter this Terrain Element. Any Unit that
      somehow finds itself partially or fully entering such a square is
      automatically Destroyed. If the Unit is a Vehicle, put its wreck
      as close as possible to the Impassable Terrain Element without
      being in it.</p>
  </>;
};