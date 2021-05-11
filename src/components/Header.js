import React, { memo } from "react";
import { StyleSheet, Text } from "react-native";
import { theme } from "../core/theme";

const Header = ({ children }) => <Text style={styles.header}>{children}</Text>;
const Header1 = ({ children }) => <Text style={styles.header1}>{children}</Text>;

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: theme.colors.primary,
    fontWeight: "bold",
    paddingVertical: 14
  },
  header1: {
    fontSize: 26,
    color:'#FFFFFF',
    fontWeight: "bold",
    paddingVertical: 14
  }

});

export default memo(Header);
