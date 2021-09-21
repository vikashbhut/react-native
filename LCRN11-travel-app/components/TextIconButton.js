import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { FONTS, SIZES, COLORS } from "../constants";

export default function TextIconButton({
  label,
  customLabelStyle,
  customContainerStyle,
  icon,
  onPress,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...customContainerStyle,
      }}
    >
      <Text
        style={{ marginRight: SIZES.base, ...FONTS.h2, ...customLabelStyle }}
      >
        {label}
      </Text>
      <Image source={icon} style={{ width: 25, height: 25 }} />
    </TouchableOpacity>
  );
}
