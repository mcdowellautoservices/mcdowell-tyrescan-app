import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { business } from '../config/business';
export function Header({ subtitle }: { subtitle?: string }) {
  return <View style={styles.wrap}><Text style={styles.logo}>{business.name}</Text><Text style={styles.sub}>{subtitle ?? 'Tyre scan • quotes • bookings'}</Text></View>;
}
const styles = StyleSheet.create({ wrap: { marginBottom: 18 }, logo: { fontSize: 28, fontWeight: '900', color: colors.ink }, sub: { color: colors.muted, marginTop: 4 } });
