import React from "react";

export const SuppressiveFire = () => {
  return <>
    <p>This is one of the most important Special
      Abilities in the game! It enables you to temporarily
      neutralize well-protected Units or prepare for an
      Assault by inflicting a penalty on the enemy.</p>
    <p>When using Suppressive Fire, all the normal rules for Firing
      Actions apply except that the attacker's Combat Value and all
      other bonuses are doubled. But, the attack cannot cause any
      Hits. Instead:</p>
    <ul>
      <li>If the result of the attack is equal to or higher than the
        target's Defence Value (including bonuses), the target
        receives one Suppressed Marker.
      </li>
      <li>If the result of the attack is equal to or higher than twice
        the target's Defence Value (including bonuses), give the
        target 2 Suppressed Markers (and so on).
      </li>
    </ul>
    <p>
      There is no limit to the number of Suppressed Markers a Unit
      can have.</p>
  </>;
};