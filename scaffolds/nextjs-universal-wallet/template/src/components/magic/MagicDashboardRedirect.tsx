import React, { useCallback } from 'react';
import AppHeader from '../ui/AppHeader';
import Links from './Links';
import Spacer from '../ui/spacer';

const MagicDashboardRedirect = () => {
  const onClick = useCallback(() => {
    window.open('https://dashboard.magic.link/signup', '_blank');
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-['100%_auto'] bg-[url('/login.svg')]">
      <AppHeader />
      <Spacer size={32} />
      <Spacer size={20} />
      <div className="text-center">
        <h3 className="max-w-[500px] text-center text-[#ffffffcc] text-xl font-normal m-0">
          Please set your <code>NEXT_PUBLIC_MAGIC_API_KEY</code> environment variable in <code>.env</code>. You can get
          your Magic API key from the Magic Dashboard.
        </h3>
      </div>
      <Spacer size={32} />
      <div className="text-center">
        <button
          className="w-[296px] h-12 text-white font-semibold text-base leading-6 transition-[0.1s]
					text-center transition-[0.1s] m-auto px-6 py-3 rounded-[300px] border-[none] hover:enabled:cursor-pointer
					active:enabled:opacity-50 active:enabled:cursor-pointer active:enabled:scale-[0.99]
					hover:enabled:bg-gradient-to-r from-[#0000000d] to-[#ffffff1a] active:enabled:bg-[#ffffff1a] bg-[#ffffff1a]"
          onClick={onClick}
        >
          Go to Dashboard
        </button>
      </div>
      <Links footer />
    </div>
  );
};

export default MagicDashboardRedirect;
