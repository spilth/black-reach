import React from "react";

export const Destruction = () => {
  return <>
    <p>If a Unit or Gear with this Special Ability targets a
      Structure or a Unit inside a Structure during a Firing
      Action or an Assault, it may inflict Destruction Points
      on the Structure.</p>
    <p>If the Firing Action is directed against a Unit (and not
      specifically the Structure), resolve the attack against the
      Unit as normal, then determine if the Structure receives any
      Destruction Points. If it targets the Structure, then simply roll
      for Destruction Points</p>
    <p>To determine if the Structure takes Damage, roll the number
      of dice indicated on the Special Ability symbol. Each result of
      4 or higher adds 1 Destruction Point to the Structure. Place a
      Destruction Marker on the Structure with the 1-point side up,
      or flip a 1-point marker over to the 2-point side.</p>
    <p>If the total Destruction Points on the Structure now equals or
      exceeds the value of the Structure, it is Destroyed. If it was
      a Wreck, remove it from the game. Otherwise, flip over the
      Terrain Tile.</p>
  </>;
};