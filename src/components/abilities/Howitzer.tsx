import React from "react";

export const Howitzer = () => {
  return <>
    <p>When you use this Special Ability, you must target an Interspace.
      There is no range limit or Long Range penalty (see p.8).
      But, you need to have a Clear or Obscured LoS to the
      target Interspace.</p>
    <p>Place the Template with the same
      letter as the Special Ability symbol
      on the target interspace, and use the
      Combat Values corresponding to the
      Special Ability letter.</p>
    <p>Units and Structures even partially under the Template are
      affected by the explosion.</p>
    <p>Resolve each attack individually.</p>
    <p>Penalties from Obstacles that obscure LoS to the
      target Interspace modify the attack as normal.</p>
    <ul>
      <li>Templates never affect Concealed Units (see p. 20).</li>
      <li>If the Template affects a Heavy Vehicle, it never benefits from
        the bonus for shooting the Rear of a Vehicle (see p. 10 and the
        vehicle never benefits from the Front armour bonus.)
      </li>
    </ul>
  </>;
};