import React, { useEffect, useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { colors } from '../theme/colors';
import { listGarageLeads } from '../services/leadApi';

type Leads = { bookings: any[]; quotes: any[]; reports: any[] };

export function AdminScreen({ onBack }: { onBack: () => void }) {
  const [leads, setLeads] = useState<Leads>({ bookings: [], quotes: [], reports: [] });
  const [message, setMessage] = useState('Loading live garage leads...');
  async function refresh() {
    try { const data = await listGarageLeads(); setLeads(data as Leads); setMessage('Live/admin data loaded. If empty, submit a booking or quote first.'); }
    catch (e: any) { setMessage(`Setup needed: ${e.message}`); }
  }
  useEffect(() => { refresh(); }, []);
  return <><Header subtitle="Garage admin dashboard" /><Card><Text style={styles.title}>Live dashboard</Text><Text style={styles.p}>{message}</Text><Text style={styles.stat}>Bookings: {leads.bookings?.length ?? 0}</Text><Text style={styles.stat}>Quotes: {leads.quotes?.length ?? 0}</Text><Text style={styles.stat}>Tyre reports: {leads.reports?.length ?? 0}</Text><Button title="Refresh" onPress={refresh} /></Card>{(leads.bookings || []).map((b: any) => <Card key={b.id}><Text style={styles.badge}>Booking</Text><Text style={styles.h}>{b.name} — {b.service}</Text><Text style={styles.p}>{b.phone} | {b.registration} | {b.preferred_date}</Text></Card>)}{(leads.quotes || []).map((q: any) => <Card key={q.id}><Text style={styles.badge}>Quote</Text><Text style={styles.h}>{q.name} — {q.tyre_size}</Text><Text style={styles.p}>{q.phone} | Qty {q.quantity} | {q.budget}</Text></Card>)}<Card><Text style={styles.h}>Next integrations</Text><Text style={styles.p}>• Replace Stripe payment link with live Checkout API</Text><Text style={styles.p}>• Add Vercel webhook for email/SMS notifications</Text><Text style={styles.p}>• Add real tyre stock/pricing feed</Text><Button title="Back" onPress={onBack} secondary /></Card></>;
}
const styles = StyleSheet.create({ title: { fontSize: 20, fontWeight: '900' }, stat: { marginTop: 6, color: colors.ink }, badge: { color: colors.primary, fontWeight: '900' }, h: { fontSize: 18, fontWeight: '900', color: colors.ink, marginTop: 4 }, p: { color: colors.muted, marginTop: 5 } });
