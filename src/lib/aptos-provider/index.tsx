import React, { type FC, type PropsWithChildren } from 'react';

import { AptosClientProvider } from './aptos-client';
import type { AptosProviderProps } from './aptos-provider.types';
import { NetworkProvider } from './network';
import { WalletProvider } from './wallet';

export const AptosProvider: FC<PropsWithChildren<AptosProviderProps>> = ({
  wallets,
  children,
  networks,
  defaultNetwork,
  onChangeNetwork,
}) => (
  <NetworkProvider
    defaultNetwork={defaultNetwork}
    onChangeNetwork={onChangeNetwork}
  >
    <AptosClientProvider networks={networks}>
      <WalletProvider wallets={wallets}>{children}</WalletProvider>
    </AptosClientProvider>
  </NetworkProvider>
);
