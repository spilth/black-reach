import React from "react";

export const Order = () => {
  return <>
    <h3><img src="/abilities/order.png" width={32} height={32} />Order</h3>
    <p>This Special Ability provides one or more additional
      Order Tokens. The number of tokens depends on how
      many Order stars are in the Special Ability symbol.
      If this Unit takes a Hit or is Destroyed, adjust your number of
      Order Tokens accordingly at the start of the next Order Phase
      (you never lose Order Tokens in the middle of a Game Turn).</p>
  </>;
};