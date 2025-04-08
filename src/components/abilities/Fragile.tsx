import React from "react";

export const Fragile = () => {
  return <>
    <h3><img src="/abilities/fragile.png" width={32} height={32} /> Fragile</h3>
    <p>The Unit's morale is very low. It immediately deserts
      if it loses an Assault or if it has a Suppressed
      marker when it is engaged in an Assault. The Unit is
      Destroyed before the Assault resolution.</p>
  </>;
};