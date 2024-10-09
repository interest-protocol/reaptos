export interface AptosCoinsMetadata {
  token_standard: string;
  symbol: string;
  supply_aggregator_table_key_v1?: string | null;
  supply_aggregator_table_handle_v1?: string | null;
  project_uri?: string | null;
  name: string;
  last_transaction_version: any;
  last_transaction_timestamp: any;
  icon_uri?: string | null;
  decimals: number;
  creator_address: string;
  asset_type: string;
}

export interface SimpleCoin {
  type: string;
  balance: string;
  metadata?: AptosCoinsMetadata | null;
}

export interface CoinsManagerProps {
  loadingSetter?: (loading: boolean) => void;
  errorSetter?: (error: string | null) => void;
  coinsSetter?: (coins: ReadonlyArray<SimpleCoin>) => void;
}
