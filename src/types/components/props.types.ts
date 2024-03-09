import React, { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";
import { Stock, UserHoldings } from "../data.types";

export type Typography = {
  children: string | ReactNode;
  style?: StyleProp<TextStyle>;
};

export type StockCard = {
  stock: Stock;
};

export type Bottombar = {
  userHoldings: UserHoldings;
};

export type TitleValueCard = {
  title: string | ReactNode;
  value: string | ReactNode;
  style?: StyleProp<TextStyle>;
};
