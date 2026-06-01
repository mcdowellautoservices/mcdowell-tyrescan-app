import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
export function Button({ title, onPress, secondary }: { title: string; onPress: () => void; secondary?: boolean }) {
  return <Pressable onPress={onPress} style={[styles.btn, secondary && styles.secondary]}><Text style={[styles.text, secondary && styles.secondaryText]}>{title}</Text></Pressable>;
}
const styles = StyleSheet.create({ btn: { backgroundColor: colors.primary, padding: 14, borderRadius: 14, alignItems: 'center', marginTop: 10 }, secondary: { backgroundColor: colors.chip }, text: { color: 'white', fontWeight: '800' }, secondaryText: { color: colors.ink } });
