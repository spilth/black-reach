import React from "react";

export const Bodyguard = () => {
  return <>
    <h3><img src="/abilities/bodyguard.png" width={32} height={32} /> Bodyguard</h3>
    <p>This Unit can take all the Hits in place of a Character
      within 2 squares provided it has a Los (Obscured or
      Clear) to the Character.</p>
  </>;
};