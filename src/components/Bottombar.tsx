import { useState } from "react";
import { View, FlatList, Pressable } from "react-native";

import TitleValueCard from "./TitleValueCard";

import { Holdings, adjustTwoDigits } from "../utils/helpers";

import { Bottombar as BottombarProps } from "../types/components/props.types";

import Style from "../styles/components/bottombar.style";

export default function Bottombar({ userHoldings }: BottombarProps) {
  const [expanded, setExpanded] = useState(false);

  const holdings = new Holdings(userHoldings);

  const titleValuesObj = {
    currentValue: {
      title: "Current Value",
      value: holdings.totalCurrentValue,
      showInCollapsedView: false,
    },
    totalInvestment: {
      title: "Total Investment",
      value: holdings.totalInvestmentValue,
      showInCollapsedView: false,
    },
    todaysPnL: {
      title: "Today's Profit & Loss",
      value: holdings.todaysPnl,
      showInCollapsedView: false,
    },
    totalPnL: {
      title: "Profit & Loss",
      value: holdings.totalPnl,
      showInCollapsedView: true,
    },
  };

  function handleArrowTap() {
    setExpanded(!expanded);
  }

  return (
    <View style={Style.container}>
      <Pressable
        onPress={handleArrowTap}
        hitSlop={{ top: 2, bottom: 8, right: 40, left: 40 }}
      >
        <View style={expanded ? Style.triangleInverted : Style.triangle} />
      </Pressable>
      {expanded ? (
        <View style={Style.expandedItems}>
          <FlatList
            data={Object.values(titleValuesObj).filter(
              (item) => !item.showInCollapsedView
            )}
            renderItem={({ item }) => {
              const { title, value } = item ?? {};
              return (
                <TitleValueCard
                  title={`${title}:`}
                  value={`₹${adjustTwoDigits(value)}`}
                  style={Style.separator}
                />
              );
            }}
            keyExtractor={(item) => item.title}
          />
        </View>
      ) : null}
      <TitleValueCard
        title={`${titleValuesObj.totalPnL.title}: `}
        value={`₹${adjustTwoDigits(titleValuesObj.totalPnL.value)}`}
        style={Style.fixedBottomItem}
      />
    </View>
  );
}
