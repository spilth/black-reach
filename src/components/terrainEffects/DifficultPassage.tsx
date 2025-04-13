import React from "react";

export const DifficultPassage = () => {
  return <>
    <p>As soon as a Unit moves into or within this Terrain
      Element, it must immediately stop its move.
      In order to move through a Difficult Passage area, a Unit c a n
      only move a single square at a time, ending its move after
      each one.</p>
    <p>A Unit that occupies more than one square is no longer affected
      by a Difficult Passage Terrain Element as soon as the front of
      the counter (or the rear if it is moving backwards) is no longer
      in the Terrain Element.</p>
  </>;
};