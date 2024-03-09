export type Stock = {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
  close: number;
};

export type UserHoldings = Stock[];
