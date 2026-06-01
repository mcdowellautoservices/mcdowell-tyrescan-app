import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TyreCondition } from '../types';
import { colors } from '../theme/colors';
export function StatusPill({ condition }: { condition: TyreCondition }) {
  const bg = condition === 'green' ? colors.success : condition === 'amber' ? colors.warning : colors.danger;
  const text = condition === 'green' ? 'Safe / Green' : condition === 'amber' ? 'Monitor / Amber' : 'Replace / Red';
  return <Text style={[styles.pill, { backgroundColor: bg }]}>{text}</Text>;
}
const styles = StyleSheet.create({ pill: { alignSelf: 'flex-start', color: 'white', paddingHorizontal: 12, paddingVertical: 7, borderRadius: 999, fontWeight: '800', overflow: 'hidden' } });
