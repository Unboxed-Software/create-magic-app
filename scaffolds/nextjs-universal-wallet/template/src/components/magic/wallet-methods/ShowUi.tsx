import React, { useCallback, useState } from 'react';
import Loading from 'public/loading.svg';
import ErrorText from '../../ui/error';
import Spacer from '../../ui/spacer';
import { useMagicContext } from '@/components/magic/MagicProvider';
import Image from 'next/image';

const ShowUI = () => {
  const { magic } = useMagicContext();
  const [disabled, setDisabled] = useState(false);
  const [showUIError, setShowUIError] = useState(false);

  const showUI = useCallback(async () => {
    if (!magic) return;
    try {
      setShowUIError(false);
      const { walletType } = await magic.wallet.getInfo();
      if (walletType !== 'magic') {
        return setShowUIError(true);
      }
      setDisabled(true);
      await magic.wallet.showUI();
      setDisabled(false);
    } catch (error) {
      setDisabled(false);
      console.error(error);
    }
  }, [magic]);

  return (
    <div className="text-left">
      <button
        className="w-fit text-[#522fd4] bg-[#edebff] text-base cursor-pointer font-medium transition-[0.1s]
					h-8 px-3 py-1.5 rounded-[32px] border-[none] active:enabled:opacity-50 active:enabled:scale-[0.99] font-[monospace]
					hover:enabled:bg-gradient-to-r from-[#0000000d] to-[#0000000d] active:enabled:bg-[#0000000d]"
        onClick={showUI}
        disabled={disabled}
      >
        {disabled ? (
          <div className="w-[76px] text-center flex items-center justify-center cursor-default">
            <Image className="animate-spin cursor-default" alt="loading" src={Loading} />
          </div>
        ) : (
          'showUI()'
        )}
      </button>
      <div className="text-[#77767a] text-left text-sm mt-2.5">
        Opens wallet view to manage assets, purchase/send/receive crypto, and access recovery phrase.
      </div>
      {showUIError ? (
        <div className="mb-[-10px]">
          <Spacer size={20} />
          <ErrorText>Method not supported for third party wallets.</ErrorText>
        </div>
      ) : null}
    </div>
  );
};

export default ShowUI;
