import React from "react";

export const Sniper = () => {
  return <>
    <h3><img src="/abilities/sniper.png" width={32} height={32} /> Sniper</h3>
    <p>A sniper can only target Infantry Units.</p>
    <p>Its player rolls a die, modified by Suppressed markers
      and Obstacles, and checks the following table:</p>
    <table className="table table-condensed">
      <tbody>
      <tr>
        <td>1:</td>
        <td>No effect.</td>
      </tr>
      <tr>
        <td>2-3:</td>
        <td>Put a Suppressed Marker on the target.</td>
      </tr>
      <tr>
        <td>4-5:</td>
        <td>Deal one Hit to the target.</td>
      </tr>
      <tr>
        <td>6:</td>
        <td>Deal one Hit to the target and give it a Suppressed
          Marker if it isn't Destroyed.
        </td>
      </tr>
      </tbody>
    </table>
    <p>EXCEPTION: If there is a firing table on the Sniper's Recruitment
      Tile, use that table instead of this one.</p>
    <p>If this Special Ability is printed on a Unit's Concealed side (see
      p. 20), do not flip the counter over when using the Sniper ability.</p>
  </>;
};