import React from "react";

export const Apothecary = () => {
  return (
    <>
      <p>
        Any time a friendly Infantry Unit up to 3 squares away from the
        Apothecary suffers a Hit, it can roll for an Armour Save{" "}
        <strong>if the Apothecary</strong> has not already been activated this turn{" "}
        <strong>and</strong> it does not have any Suppressed Markers on it.
      </p>
      <p>
        If you use this Special Ability, you must place an Activated Marker on
        the Apothecary Unit and discard any Order Token on it.
      </p>
    </>
  );
};
