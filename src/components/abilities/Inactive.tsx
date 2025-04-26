import React from "react";

export const Inactive = () => {
  return (
    <>
      <p>
        A Unit with this icon is in its Inactive State. A Unit may voluntarily
        change state only once, at the start or at the end of its Movement
        Action.
      </p>
      <p>
        A Unit that has one of these Special Abilities may deploy with either
        side face up.
      </p>
      <p>
        A Unit showing one face cannot use the Special Abilities and values of
        the other face.
      </p>
    </>
  );
};
