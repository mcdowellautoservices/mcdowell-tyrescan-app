import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
export function TextInputField({ label, value, onChangeText, placeholder, multiline }: { label: string; value: string; onChangeText: (v: string) => void; placeholder?: string; multiline?: boolean }) {
  return <><Text style={styles.label}>{label}</Text><TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} multiline={multiline} style={[styles.input, multiline && styles.multi]} /></>;
}
const styles = StyleSheet.create({ label: { fontWeight: '700', color: colors.ink, marginTop: 10, marginBottom: 5 }, input: { backgroundColor: 'white', borderWidth: 1, borderColor: colors.line, borderRadius: 12, padding: 12 }, multi: { minHeight: 84, textAlignVertical: 'top' } });
