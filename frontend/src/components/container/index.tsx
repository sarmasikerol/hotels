import React from "react";

type Props = { children?: JSX.Element | JSX.Element[];
     designs?: string };

const Container = ({ designs, children }: Props) => {
  return (
    <div className={`max-w-[1440px] mx-auto p-5 ${designs}`}>{children}</div>
  );
};

export default Container;
