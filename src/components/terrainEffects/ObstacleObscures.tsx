import React from "react";

export const ObstacleObscures = () => {
  return <>
    <p>Every square marked with this symbol obscures
      LoS that passes through it (even partially). For
      every square that obscures LoS, subtract the value printed in
      the symbol from the attacker's final die roll result (instead of
      directly from the Unit's Combat Value). These penalties are
      cumulative.</p>
    <p>Do not count the squares occupied by the firing Unit or the
      target Unit.</p>
    <p>WARNING: Do not count the square that the firing Unit is in or
      the square occupied by the target when checking for LoS and
      obscuring terrain!</p>
    <p>When an Obstacle between
      two squares obscures Los (but
      does not block it) -such as a
      wall-any Unit directly adjacent
      to the Terrain Element ignores
      its effects, even if using a
      Flamer Template. Al other
      Units are affected normally.</p>
    <p>If a Template (not a Flamethrower template) is placed on a
      Terrain Element that is between two squares, the penalty is
      applied to Units and Structures located on both sides of the
      Terrain Element.</p>
  </>;
};