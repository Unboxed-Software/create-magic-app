import React from 'react';
import MagicLogo from 'public/magic.svg';
import Image from 'next/image';

const AppHeader = () => {
  return (
    <div className="text-center">
      <Image src={MagicLogo} alt="magic-logo" className="mt-10 mb-[15px] mx-0" />
      <h3 className="text-[rgba(255,255,255,0.5)] text-xl font-normal m-0">Demo</h3>
    </div>
  );
};

export default AppHeader;
