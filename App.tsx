import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './src/screens/HomeScreen';
import { ScanScreen } from './src/screens/ScanScreen';
import { ReportScreen } from './src/screens/ReportScreen';
import { BookingScreen } from './src/screens/BookingScreen';
import { QuoteScreen } from './src/screens/QuoteScreen';
import { AdminScreen } from './src/screens/AdminScreen';
import { colors } from './src/theme/colors';
import { TyreReport } from './src/types';
type Screen = 'home' | 'scan' | 'report' | 'booking' | 'quote' | 'admin';
export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [report, setReport] = useState<TyreReport | undefined>();
  return <SafeAreaView style={styles.safe}><StatusBar style="dark" /><ScrollView contentContainerStyle={styles.wrap}>
    {screen === 'home' && <HomeScreen onScan={() => setScreen('scan')} onBook={() => setScreen('booking')} onQuote={() => setScreen('quote')} onAdmin={() => setScreen('admin')} />}
    {screen === 'scan' && <ScanScreen onBack={() => setScreen('home')} onReport={(r) => { setReport(r); setScreen('report'); }} />}
    {screen === 'report' && report && <ReportScreen report={report} onBook={() => setScreen('booking')} onQuote={() => setScreen('quote')} onBack={() => setScreen('home')} />}
    {screen === 'booking' && <BookingScreen report={report} onBack={() => setScreen('home')} />}
    {screen === 'quote' && <QuoteScreen report={report} onBack={() => setScreen('home')} />}
    {screen === 'admin' && <AdminScreen onBack={() => setScreen('home')} />}
  </ScrollView></SafeAreaView>;
}
const styles = StyleSheet.create({ safe: { flex: 1, backgroundColor: colors.bg }, wrap: { padding: 20, paddingBottom: 40 } });
