import React, { useState } from 'react';
import { Alert, Text, StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { TextInputField } from '../components/TextInputField';
import { submitBooking, createStripeDepositLink } from '../services/leadApi';
import { TyreReport, Booking } from '../types';
import { colors } from '../theme/colors';
export function BookingScreen({ report, onBack }: { report?: TyreReport; onBack: () => void }) {
  const [name, setName] = useState(''); const [phone, setPhone] = useState(''); const [email, setEmail] = useState('');
  const [registration, setRegistration] = useState(report?.registration ?? ''); const [service, setService] = useState('Tyre fitting');
  const [preferredDate, setPreferredDate] = useState(''); const [notes, setNotes] = useState(report ? `Tyre report ${report.id}: ${report.tyreSize}, ${report.condition}` : '');
  async function submit() {
    const booking: Booking = { id: `BOOK-${Date.now()}`, name, phone, email, registration, service, preferredDate, notes, reportId: report?.id, status: 'new' };
    await submitBooking(booking); const stripeUrl = await createStripeDepositLink(booking.id);
    Alert.alert('Booking request saved', `Connect your API to email/SMS this lead. Stripe placeholder: ${stripeUrl}`);
  }
  return <><Header subtitle="Book with Mcdowell Auto Services" /><Card><Text style={styles.h}>Customer details</Text><TextInputField label="Name" value={name} onChangeText={setName} /><TextInputField label="Phone" value={phone} onChangeText={setPhone} /><TextInputField label="Email" value={email} onChangeText={setEmail} /><TextInputField label="Registration" value={registration} onChangeText={setRegistration} /><TextInputField label="Service" value={service} onChangeText={setService} /><TextInputField label="Preferred date/time" value={preferredDate} onChangeText={setPreferredDate} placeholder="e.g. Friday morning" /><TextInputField label="Notes" value={notes} onChangeText={setNotes} multiline /><Button title="Submit booking request" onPress={submit} /><Button title="Back" onPress={onBack} secondary /></Card><Text style={styles.note}>Upgrade path: connect Supabase/Firebase, SendGrid/Twilio, and live Stripe checkout.</Text></>;
}
const styles = StyleSheet.create({ h: { fontSize: 18, fontWeight: '900', color: colors.ink }, note: { color: colors.muted, fontSize: 12 } });
