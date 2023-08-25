import React from 'react';

interface Props {
  children: React.ReactNode;
  id: string;
}

const CardHeader = ({ children, id }: Props) => {
  return (
    <h1 className="text-xl font-semibold text-left mt-0 mb-[25px]" id={id}>
      {children}
    </h1>
  );
};

export default CardHeader;
