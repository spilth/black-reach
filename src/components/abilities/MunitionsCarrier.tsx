import React from "react";

export const MunitionsCarrier = () => {
  return <>
    <h3><img src="/abilities/munitionscarrier.png" width={32} height={32} /> Munitions Carrier</h3>
    <p>This Unit grants a +1 bonus to all Firing Actions taken
      by allied Infantry Units in its ZoC.</p>
    <p>This bonus does not apply to Alternate Firing Actions.
      The Unit does not receive its own bonus.</p>
    <p>Units can't benefi from more than one Munitions Carrier
      bonus.</p>
  </>;
};