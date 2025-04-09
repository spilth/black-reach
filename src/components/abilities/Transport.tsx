import React from "react";

export const Transport = () => {
  return <>
    <p>A Vehicle with this Special Ability can transport
      Infantry Units. The capacity of the Vehicle is equal to
      the number in the Special Ability symbol.</p>
      <p>If the symbol is red, the Vehicle may transport Units
      with the Large Special Ability.</p>
      <p>Units that have a RED symbol and all Characters use 1 point of
      Transport capacity. Al other Units use 2 points.</p>
      <p>During the Activation or Supply Phase, an Infantry Unit can move
      into or out of a Vehicle at the beginning or end of its Movement
      Action, from or into any unoccupied adjacent square.
      Units cannot enter or leave a Vehicle if the Vehicle
      is on its flying side (when the wings framing the
      Movement Value are visible).</p>
      <p>It is possible to launch an Assault from a Vehicle that has the
      Transport Special Ability, a n d it is also possible for a Unit that
      loses an Assault to retreat into a Transport, whether it is the
      attacker or the defender.</p>
      <p>A Unit that is on a Transport may be assigned an Order Token,
      which allows it to fire from the Vehicle or move off of it. If such
      a Unit takes a Firing Action, draw the LoS for the embarked Unit
      from any square the Vehicle occupies. Heavy Weapon Units
      (outlined in red) cannot fire from inside a Transport unless they
      have the Fire on the Move Special Ability, in which case the Fire
      on the Move penalty does not apply.</p>
      <p>Infantry Units do not block the LoS of Units that are embarked
      when taking a Firing Action.</p>
      <p>A Unit inside a Transport cannot be targeted by a Firing Action or
      Assault, and it is not affected by any Templates.</p>
      <p>A Unit inside a Transport does not exert a ZoC while it is
      embarked.</p>
      <p>If a Transport Vehicle is Destroyed, the Units inside do not suffer
      any Hits, but they must be redeployed into unoccupied squares
      adjacent to the Wreck, chosen by the player who controls them.
      This is a Forced Move. If applicable, they must be deployed with
      the Inactive Side up when their Transport is Destroyed. Each
      Unit redeployed in this way receives 1 Suppressed Marker.
      These Units cannot be redeployed in a square that is inside an
      enemy's ZoC. If there is no unoccupied out of ZoC square for
      them to redeploy to, they are Destroyed in the explosion.</p>
  </>;
};