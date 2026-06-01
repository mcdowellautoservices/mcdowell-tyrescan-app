import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { StatusPill } from '../components/StatusPill';
import { TyreReport } from '../types';
import { colors } from '../theme/colors';
export function ReportScreen({ report, onBook, onQuote, onBack }: { report: TyreReport; onBook: () => void; onQuote: () => void; onBack: () => void }) {
  return <><Header subtitle="Tyre health report" /><Card><StatusPill condition={report.condition} /><Text style={styles.title}>{report.tyreSize}</Text><Text style={styles.row}>Brand guess: {report.brandGuess}</Text><Text style={styles.row}>Tread depth: {report.treadDepthMm}mm</Text><Text style={styles.row}>DOT age estimate: {report.dotAgeYears} years</Text><Text style={styles.row}>Wear: {report.wearPattern}</Text><Text style={styles.row}>Pressure risk: {report.pressureRisk}</Text><Text style={styles.row}>Alignment risk: {report.alignmentRisk}</Text><Text style={styles.price}>Estimate: {report.priceEstimate}</Text></Card><Card><Text style={styles.h}>Recommendations</Text>{report.recommendations.map(r => <Text key={r} style={styles.li}>• {r}</Text>)}<Button title="Book fitting / inspection" onPress={onBook} /><Button title="Request matching tyre quote" onPress={onQuote} secondary /><Button title="Home" onPress={onBack} secondary /></Card></>;
}
const styles = StyleSheet.create({ title: { fontSize: 26, fontWeight: '900', marginTop: 12, color: colors.ink }, row: { marginTop: 8, color: colors.ink }, price: { marginTop: 14, fontWeight: '900', color: colors.primary }, h: { fontSize: 18, fontWeight: '900' }, li: { marginTop: 7, color: colors.ink } });
