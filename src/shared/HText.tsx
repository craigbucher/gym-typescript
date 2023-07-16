import React from "react";

// ***********************************************
// re-usable styling component, since is used in *
// multiple scenes															 *
// ***********************************************

// 'children' = text passed-in for formatting

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold">{children}</h1>
  );
};

export default HText;