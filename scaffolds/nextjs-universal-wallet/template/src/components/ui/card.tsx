import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <div className="w-[300px] flex flex-col shadow-[0px_4px_24px_rgba(49,49,49,0.1)] mt-0 mb-[27px] mx-auto px-6 py-8 rounded-2xl bg-[#ffffff]">
      {children}
    </div>
  );
};

export default Card;
