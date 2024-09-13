export interface Coin {
  type: string;
  name?: string;
  symbol?: string;
  balance: string;
  decimals?: number;
}

export interface CoinsManagerProps {
  loadingSetter?: (loading: boolean) => void;
  errorSetter?: (error: string | null) => void;
  coinsSetter?: (coins: ReadonlyArray<Coin>) => void;
}
