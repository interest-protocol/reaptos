import { useContext } from 'react';

import networkContext from '.';

export const useNetworkContext = () => useContext(networkContext);
export const useNetwork = () => useContext(networkContext).network;
