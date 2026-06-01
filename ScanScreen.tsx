import React, { useState } from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { TextInputField } from '../components/TextInputField';
import { createMockTyreReport } from '../services/mockTyreAi';
import { TyreReport } from '../types';
import { colors } from '../theme/colors';
export function ScanScreen({ onBack, onReport }: { onBack: () => void; onReport: (report: TyreReport) => void }) {
  const [image, setImage] = useState<string>();
  const [reg, setReg] = useState('');
  async function pickImage() {
    const result = await ImagePicker.launchCameraAsync({ quality: 0.7, allowsEditing: true });
    if (!result.canceled) setImage(result.assets[0].uri);
  }
  return <><Header subtitle="Tyre scan" /><Card><Text style={styles.h}>1. Add vehicle registration</Text><TextInputField label="Registration" value={reg} onChangeText={setReg} placeholder="AB12 CDE" /><Text style={styles.h}>2. Capture tyre photo</Text>{image ? <Image source={{ uri: image }} style={styles.image} /> : <View style={styles.placeholder}><Text style={styles.p}>No tyre photo yet</Text></View>}<Button title="Open camera" onPress={pickImage} /><Button title="Generate tyre report" onPress={() => onReport(createMockTyreReport(reg))} /><Button title="Back" onPress={onBack} secondary /></Card><Text style={styles.note}>This demo uses mock AI results. Connect a tyre-scanning API or trained vision model in src/services/mockTyreAi.ts.</Text></>;
}
const styles = StyleSheet.create({ h: { fontWeight: '900', fontSize: 16, color: colors.ink, marginTop: 8 }, p: { color: colors.muted }, note: { color: colors.muted, fontSize: 12 }, image: { height: 220, borderRadius: 16, marginTop: 12 }, placeholder: { height: 160, borderRadius: 16, marginTop: 12, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.chip } });
