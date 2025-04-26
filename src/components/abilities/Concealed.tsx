import React from "react";

export const Concealed = () => {
  return <>
    <p>When a Unit is Concealed (Active Side up), it
      follows these rules:</p>
    <ul>
      <li>It cannot be the target of a Firing Action.</li>
      <li>It ignores Templates.</li>
      <li>It does not block LoS.</li>
      <li>It can be engaged in an Assault, its counter must be flipped
        over to its Inactive Side. This is a Forced Move and a 0 Move.
      </li>
      <li>If the Concealed Unit takes a Firing Action, it must flip over to
        its Inactive Side. This is a Forced Move and a 0 Move.
      </li>
      <li>No one except the Unit's controller may look at the face-
        down side of a Concealed Unit.
      </li>
    </ul>
    <p>The enemy can "spot" a Concealed Unit to reveal it. In order to
      spot a Concealed Unit, you must have a Clear LoS from one of
      your Units. If the Concealed Unit is in a Terrain Element, your
      Unit must have a Clear LoS and be within 2 squares of the
      Concealed Unit. If you spot an enemy Concealed Unit, flip it
      over to its Inactive Side. This is a Forced Move and a 0 Move.
      When a Concealed Unit moves, you must check if it is spotted
      every time it enters a new square. Also, check if any Concealed
      Units are spotted at the end of every enemy Unit's Movement
      Action.</p>
    <p>Two Concealed Units can spot each other.</p>
    <p>Heavy Vehicles cannot spot Concealed Units.</p>
    <p>A Concealed Unit can only be spotted or flipped over once per
      Movement Action.</p>
    <p>A Concealed Unit that was spotted during its own Movement
      - Action continues to use the Movement Value of its Concealed
      side until the end of that Movement Action.</p>
  </>;
};
