import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
export function Card({ children }: { children: React.ReactNode }) {
  return <View style={styles.card}>{children}</View>;
}
const styles = StyleSheet.create({ card: { backgroundColor: colors.card, borderRadius: 18, padding: 16, marginBottom: 14, borderWidth: 1, borderColor: colors.line } });
