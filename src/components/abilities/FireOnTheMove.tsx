import React from "react";

export const FireOnTheMove = () => {
  return <>
    <h3><img src="/abilities/fireonthemove.png" width={32} height={32} /> Fire on the Move</h3>
    <p>This Unit may take a Firing Action during its Movement
      Action. The Fire on the Move attack can be executed
      once during each Movement Action the Unit takes,
      either before the Unit leaves a square or immediately after
      entering a square.</p>
    <p>Attacks made with Fire on the Move are less accurate than
      normal attacks, so the Unit suffers the penalty (if any)
      indicated in the Fire on the Move symbol (subtract it from the
      Unit's Combat Value).</p>
  </>;
};