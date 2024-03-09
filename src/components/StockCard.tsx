import React from "react";
import { View } from "react-native";

import { Title, Subtitle, Paragraph } from "./Typography";

import { Stock, adjustTwoDigits } from "../utils/helpers";

import { StockCard as StockCardProps } from "../types/components/props.types";

import Style from "../styles/components/stockCard.styles";

const StockCard = ({ stock }: StockCardProps) => {
  const theStock = new Stock(stock);
  const { pnl, symbol, ltp, quantity } = theStock ?? {};
  return (
    <View style={Style.container}>
      <View style={Style.verticalWrapper}>
        <Title style={Style.bottomSpacing}>{symbol}</Title>
        <Paragraph>{quantity}</Paragraph>
      </View>
      <View style={[Style.verticalWrapper, Style.endAligned]}>
        <Paragraph style={Style.bottomSpacing}>
          LTP: <Subtitle>₹ {adjustTwoDigits(ltp)}</Subtitle>
        </Paragraph>
        <Paragraph>
          P/L: <Subtitle>₹ {adjustTwoDigits(pnl)}</Subtitle>
        </Paragraph>
      </View>
    </View>
  );
};

export default StockCard;
