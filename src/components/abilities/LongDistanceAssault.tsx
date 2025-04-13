import React from "react";

export const LongDistanceAssault = () => {
  return <>
    <p>This Unit can initiate an Assault without entering the
      target Unit's square, up to the maximum distance (in
      squares) indicated on the Special Ability symbol. The resolution of
      a Long Distance Assault follows the normal rules for an Assault,
      except as changed below:</p>
    <ul>
      <li>Long Distance Assaults are modified
        by any Obstacles between the two Units involved in the
        Assault. Therefore, you cannot launch a Long Distance Assault through a Terrain Element that blocks LoS.
      </li>
      <li>If the attacker wins, the defending Unit must retreat as
        described above, but the attacker does not enter the square
        left unoccupied by the defender.
      </li>
    </ul>
  </>;
};