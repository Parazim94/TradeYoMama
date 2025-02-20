import React from "react";
import { View, Text } from "react-native";
import Sparkline from "@/src/components/Sparkline";

interface UserInfoProps {
  userName: string;
  cash: number;
  history: number[];
  theme: any;
  styles: any;
}

export default function UserInfo({ userName, cash, history, theme, styles }: UserInfoProps) {
  return (
    <View>
      <Text style={styles.header}>User: {userName}</Text>
      <Text style={styles.header}>Cash: ${cash.toLocaleString()}</Text>
      <Text style={{ color: theme.text, marginBottom: 5 }}>History (14 Tage)</Text>
      <Sparkline
        prices={history}
        width="100%"
        height={50}
        stroke={theme.accent}
        strokeWidth={2}
      />
    </View>
  );
}
