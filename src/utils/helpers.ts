import { Stock as StockType } from "../types/data.types";

export function adjustTwoDigits(num: number) {
  return Number(num.toFixed(2));
}

export class Stock {
  ltp: number;
  close: number;
  avgPrice: number;
  quantity: number;
  investmentValue: number;
  currentValue: number;
  pnl: number;
  symbol: string;
  constructor({ ltp, close, avgPrice, quantity, symbol }: StockType) {
    this.ltp = ltp;
    this.close = close;
    this.avgPrice = avgPrice;
    this.quantity = quantity;
    this.symbol = symbol;
    this.investmentValue = this.avgPrice * this.quantity;
    this.currentValue = this.ltp * this.quantity;
    this.pnl = adjustTwoDigits(this.currentValue - this.investmentValue);
  }
}
