import React from "react";

export const LimitedRange = () => {
  return <>
    <h3><img src="/abilities/limitedrange.png" width={32} height={32} />Limited Range</h3>
    <p>The Unit may not fire at a target that is farther than
      the number of indicated squares/Interspaces</p>
    <p>This symbol affects Firing Actions that target squares.</p>
    <p>This symbol affects Firing Actions that target Interspaces
      (such as Grenades).</p>
  </>;
};