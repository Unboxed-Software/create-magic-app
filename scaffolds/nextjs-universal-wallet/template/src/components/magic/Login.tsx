import React, { useState, useCallback } from 'react';
import AppHeader from '../ui/AppHeader';
import Links from './Links';
import ConnectButton from '../ui/ConnectButton';
import Spacer from '../ui/spacer';
import { useMagicContext } from '@/components/magic/MagicProvider';

interface Props {
  setAccount: React.Dispatch<React.SetStateAction<string | null>>;
}

const Login = ({ setAccount }: Props) => {
  const [disabled, setDisabled] = useState(false);
  const { magic } = useMagicContext();

  const connect = useCallback(async () => {
    if (!magic) return;
    try {
      setDisabled(true);
      const accounts = await magic.wallet.connectWithUI();
      setDisabled(false);
      console.log('Logged in user:', accounts[0]);
      localStorage.setItem('user', accounts[0]);
      setAccount(accounts[0]);
    } catch (error) {
      setDisabled(false);
      console.error(error);
    }
  }, [magic, setAccount]);

  return (
    <div className={`flex flex-col items-center min-h-screen bg-['100%_auto'] bg-[url('/login.svg')]`}>
      <AppHeader />
      <Spacer size={32} />
      <Spacer size={20} />
      <ConnectButton onClick={connect} disabled={disabled} />
      <Links footer />
    </div>
  );
};

export default Login;
