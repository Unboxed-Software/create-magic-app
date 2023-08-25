import React, { useCallback, useState } from 'react';
import Loading from 'public/loading.svg';
import Toast from '../../ui/toast';
import { useMagicContext } from '@/components/magic/MagicProvider';
import Image from 'next/image';

const RequestUserInfo = () => {
  const { magic } = useMagicContext();
  const [disabled, setDisabled] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [email, setEmail] = useState<string | undefined>('');

  const requestUserInfo = useCallback(async () => {
    if (!magic) return;
    try {
      setDisabled(true);
      const userInfo = await magic.wallet.requestUserInfoWithUI();
      setDisabled(false);
      setEmail(userInfo.email);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
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
        onClick={requestUserInfo}
        disabled={disabled}
      >
        {disabled ? (
          <div className="w-[220px] text-center flex items-center justify-center cursor-default">
            <Image className="animate-spin cursor-default" alt="loading" src={Loading} />
          </div>
        ) : (
          'requestUserInfoWithUI()'
        )}
      </button>
      <div className="text-[#77767a] text-left text-sm mt-2.5">
        Prompts the user to consent to sharing information with the requesting dApp.
      </div>
      {showToast ? <Toast>Email: {email}</Toast> : null}
    </div>
  );
};

export default RequestUserInfo;
