import React from "react";

export const Flamethrower = () => {
  return <>
    <p>A Unit that has a Flamer uses a special Template. Use the
      Combat Values on the Template when it uses the Flamer. Use
      the Unit's normal Combat Values if it attacks without using the
      Flamer (or fights in an Assault).</p>
    <p>The Unit also has the Fire on the Move (-2) Special Ability when
      using the Flamer.</p>
    <p>When a Unit uses a Flamer, place the small end of the Template
      at the center of the counter's square. Then, orient the Template
      in whatever direction you choose, taking into account any
      limited Firing Arcs (see p.16).</p>
    <p>Any Unit other than the Unit that is firing the Flamer, whether
      friend or foe, that is even partially covered by the Template is
      affected by the flames.</p>
    <p>Every Unit affected by the Template, whether Infantry
      or Vehicle, gains a Suppressed Marker, even if the
      Unit does not suffer a Hit.</p>
    <p> Attacks using a Flamer Template
      are affected by Obstacles as
      normal. It is also blocked as soon as it reaches the center of
      any square occupied by a Vehicle. Template that cross this
      Terrain Element have their range reduced to one square past
      the Elevation Terrain Element.</p>
  </>;
};