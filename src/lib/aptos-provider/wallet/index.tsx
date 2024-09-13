import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react';
import React, { type FC, type PropsWithChildren } from 'react';

import { useAptosClientConfig } from '../aptos-client/aptos-client.hooks';
import type { WalletProviderProps } from './wallet.types';

export const WalletProvider: FC<PropsWithChildren<WalletProviderProps>> = ({
  children,
  wallets,
}) => {
  const aptosClientConfig = useAptosClientConfig();

  return (
    <AptosWalletAdapterProvider
      autoConnect
      plugins={wallets}
      dappConfig={aptosClientConfig}
    >
      {children}
    </AptosWalletAdapterProvider>
  );
};
