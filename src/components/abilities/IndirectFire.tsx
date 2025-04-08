import React from "react";

export const IndirectFire = () => {
  return <>
    <p>This Special Ability works just like
      Howitzer, but it is used when the
      firing Unit does not have a Clear
      LoS to the target Interspace. If the Unit does have a Clear LoS, it
      uses the Howitzer Special Ability instead.</p>
    <p>Indirect Fire does not always Hit the target Interspace-it may
      Scatter. Place the Template, orient it as you wish, roll 1 die and
      use the Scatter Chart on the Template.</p>
    <p>EXCEPTION: Template G does not have a Scatter Chart. Do
      not roll the die: it always Hits the target Interspace.</p>
    <p>On a roll of 1 to 4, the
      shot scatters in the
      direction indicated, a
      distance equal to the
      number printed on the
      Scatter symbol (2 in the
      example at right). On a
      roll of 5 or 6, the shot is
      on target and Hits the
      intended Interspace.</p>
    <p>Suppressed Markers do not affect Scatter rolls.</p>
    <p>After checking for Scatter, any Unit or Structure even partially under
      the Template is affected. Resolve each attack individually. Penalties
      from Obstacles that obscure Los do not modify the attack.</p>
  </>;
};