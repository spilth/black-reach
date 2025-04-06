import React from "react";

export const Piercing = () => {
  return <>
    <h3><img src="/abilities/piercing.png" width={32} height={32} /> Piercing</h3>
    <p>This Unit has weapons that are exceptionally good at
      penetrating enemy armour. Add 1 to the die roll when
      rolling for the Damage location on a Heavy Vehicle Hit
      by this attack. Also, any Unit Hit by this attack cannot attempt
      an Armour Save .</p>
  </>;
};