import { type FC, useId } from 'react';
import useSWR from 'swr';

import { useAptosClient } from '../aptos-provider/aptos-client/aptos-client.hooks';
import { useNetwork } from '../aptos-provider/network/network.hooks';
import { useCurrentAccount } from '../aptos-provider/wallet/wallet.hooks';
import type { CoinsManagerProps } from './coins-manager.types';

const CoinsManager: FC<CoinsManagerProps> = ({
  coinsSetter,
  errorSetter,
  loadingSetter,
}) => {
  const id = useId();
  const network = useNetwork();
  const aptosClient = useAptosClient();
  const currentAccount = useCurrentAccount();

  useSWR(
    [id, network, currentAccount?.address, CoinsManager.name],
    async () => {
      try {
        errorSetter?.(null);
        loadingSetter?.(true);
        coinsSetter?.([]);

        if (!currentAccount?.address) return;

        const coinsRawData = await aptosClient.getAccountCoinsData({
          accountAddress: currentAccount.address,
        });

        const coins = coinsRawData.map(({ amount, asset_type, metadata }) => ({
          metadata,
          balance: String(amount),
          type: (asset_type ?? metadata?.asset_type)!,
        }));

        coinsSetter?.(coins);

        return coins;
      } catch (e) {
        if (errorSetter) errorSetter((e as Error).message);
        else throw e;
      } finally {
        loadingSetter?.(false);
      }
    },
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      refreshWhenHidden: false,
    }
  );

  return null;
};

export default CoinsManager;
