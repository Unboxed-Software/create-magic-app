import React from 'react';
import Loading from 'public/loading.svg';
import Image from 'next/image';
interface Props {
  onClick: () => void;
  disabled: boolean;
}

const ConnectButton = ({ onClick, disabled }: Props) => {
  return (
    <div className="text-center">
      <button
        className="w-[296px] h-12 text-white font-semibold text-base leading-6 transition-[0.1s]
					text-center transition-[0.1s] m-auto px-6 py-3 rounded-[300px] border-[none] hover:enabled:cursor-pointer
					active:enabled:opacity-50 active:enabled:cursor-pointer active:enabled:scale-[0.99]
					hover:enabled:bg-gradient-to-r from-[#0000000d] to-[#ffffff1a] active:enabled:bg-[#ffffff1a] bg-[#ffffff1a]"
        onClick={onClick}
        disabled={disabled}
      >
        {disabled ? (
          <div className="w-[100%] text-center flex items-center justify-center cursor-default">
            <Image className="animate-spin cursor-default" alt="loading" src={Loading} />
          </div>
        ) : (
          'Connect'
        )}
      </button>
    </div>
  );
};

export default ConnectButton;
