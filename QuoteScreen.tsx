import React, { useState } from 'react';
import { Alert, Text, StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { TextInputField } from '../components/TextInputField';
import { submitQuoteRequest } from '../services/leadApi';
import { sampleTyres } from '../data/tyreStock';
import { TyreReport, QuoteRequest } from '../types';
import { colors } from '../theme/colors';
export function QuoteScreen({ report, onBack }: { report?: TyreReport; onBack: () => void }) {
  const [name, setName] = useState(''); const [phone, setPhone] = useState(''); const [registration, setRegistration] = useState(report?.registration ?? '');
  const [tyreSize, setTyreSize] = useState(report?.tyreSize ?? '205/55R16'); const [quantity, setQuantity] = useState('2'); const [budget, setBudget] = useState('Best value'); const [notes, setNotes] = useState('');
  async function submit() { const quote: QuoteRequest = { name, phone, registration, tyreSize, quantity, budget, notes }; await submitQuoteRequest(quote); Alert.alert('Quote request saved', 'Connect your API to send this to the garage admin inbox.'); }
  const matches = sampleTyres.filter(t => tyreSize.includes(t.size));
  return <><Header subtitle="Tyre quote request" /><Card><Text style={styles.h}>Tyre quote form</Text><TextInputField label="Name" value={name} onChangeText={setName} /><TextInputField label="Phone" value={phone} onChangeText={setPhone} /><TextInputField label="Registration" value={registration} onChangeText={setRegistration} /><TextInputField label="Tyre size" value={tyreSize} onChangeText={setTyreSize} /><TextInputField label="Quantity" value={quantity} onChangeText={setQuantity} /><TextInputField label="Budget" value={budget} onChangeText={setBudget} /><TextInputField label="Notes" value={notes} onChangeText={setNotes} multiline /><Button title="Submit quote request" onPress={submit} /><Button title="Back" onPress={onBack} secondary /></Card><Card><Text style={styles.h}>Sample matched stock</Text>{matches.length ? matches.map(t => <Text key={t.size + t.brand} style={styles.li}>• {t.brand} {t.size} from £{t.price} fitted — {t.label}</Text>) : <Text style={styles.li}>No sample match. Connect live tyre stock feed.</Text>}</Card></>;
}
const styles = StyleSheet.create({ h: { fontSize: 18, fontWeight: '900', color: colors.ink }, li: { color: colors.ink, marginTop: 6 } });
