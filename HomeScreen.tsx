import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { colors } from '../theme/colors';
import { business } from '../config/business';
export function HomeScreen({ onScan, onBook, onAdmin, onQuote }: { onScan: () => void; onBook: () => void; onAdmin: () => void; onQuote: () => void }) {
  return <><Header /><Card><Text style={styles.title}>Scan your tyre and get a fast recommendation.</Text><Text style={styles.p}>Use your phone camera to capture tyre condition, then request a quote or book fitting.</Text><Button title="Start tyre scan" onPress={onScan} /><Button title="Book repair / recovery" onPress={onBook} secondary /><Button title="Request tyre quote" onPress={onQuote} secondary /></Card><Card><Text style={styles.h}>Garage services</Text>{business.services.map(s => <Text key={s} style={styles.li}>• {s}</Text>)}<Button title="Admin dashboard" onPress={onAdmin} secondary /></Card></>;
}
const styles = StyleSheet.create({ title: { fontSize: 22, fontWeight: '900', color: colors.ink }, h: { fontSize: 18, fontWeight: '900', marginBottom: 8 }, p: { color: colors.muted, marginTop: 8, lineHeight: 21 }, li: { color: colors.ink, marginVertical: 3 } });
