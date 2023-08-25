import React from 'react';

interface Props {
  dark?: boolean;
  footer?: boolean;
}

const Links = ({ dark, footer }: Props) => {
  return (
    <div
      className={`flex justify-center text-white font-semibold mt-5 mb-3 mx-auto ${
        footer ? 'items-center absolute w-full mt-[30px] mb-0 mx-auto bottom-10' : ''
      }`}
    >
      <div className={`cursor-pointer ${dark ? 'text-[#6851ff]' : 'text-[#fff]'}`}>
        <a href="https://magic.link/docs/home/welcome" target="_blank" rel="noreferrer">
          Dev Docs
        </a>
      </div>
      <div
        className={`h-[20px] w-[1px] mx-[30px] ${dark ? 'bg-[#DDDBE0] text-[#DDDBE0]' : 'bg-[#a270d3] text-[#a270d3]'}`}
      />
      <div className={`cursor-pointer ${dark ? 'text-[#6851ff]' : 'text-[#fff]'}`}>
        <a href="https://dashboard.magic.link/signup" target="_blank" rel="noreferrer">
          Dashboard
        </a>
      </div>
      <div
        className={`h-[20px] w-[1px] mx-[30px] ${dark ? 'bg-[#DDDBE0] text-[#DDDBE0]' : 'bg-[#a270d3] text-[#a270d3]'}`}
      />
      <div className={`cursor-pointer ${dark ? 'text-[#6851ff]' : 'text-[#fff]'}`}>
        <a href="https://discord.gg/magiclabs" target="_blank" rel="noreferrer">
          Discord
        </a>
      </div>
    </div>
  );
};

export default Links;
