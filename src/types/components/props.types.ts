import React, { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";
import { Stock } from "../data.types";

export type Typography = {
  children: string | ReactNode;
  style?: StyleProp<TextStyle>;
};

export type StockCard = {
  stock: Stock;
};
