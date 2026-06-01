import { Booking, QuoteRequest, TyreReport } from '../types';
import { env } from './env';
import { supabaseRest } from './supabaseRest';

export async function saveTyreReport(report: TyreReport) {
  return supabaseRest.insert('tyre_reports', {
    id: report.id,
    registration: report.registration || null,
    tyre_size: report.tyreSize,
    brand_guess: report.brandGuess,
    tread_depth_mm: report.treadDepthMm,
    condition: report.condition,
    dot_age_years: report.dotAgeYears,
    wear_pattern: report.wearPattern,
    pressure_risk: report.pressureRisk,
    alignment_risk: report.alignmentRisk,
    recommendations: report.recommendations,
    price_estimate: report.priceEstimate
  });
}

export async function submitBooking(booking: Booking) {
  await supabaseRest.insert('bookings', {
    id: booking.id,
    name: booking.name,
    phone: booking.phone,
    email: booking.email || null,
    registration: booking.registration,
    service: booking.service,
    preferred_date: booking.preferredDate,
    notes: booking.notes,
    report_id: booking.reportId || null,
    status: booking.status
  });
  return { ok: true, bookingRef: booking.id };
}

export async function submitQuoteRequest(quote: QuoteRequest) {
  const quoteRef = `QUOTE-${Date.now()}`;
  await supabaseRest.insert('quote_requests', {
    id: quoteRef,
    name: quote.name,
    phone: quote.phone,
    registration: quote.registration,
    tyre_size: quote.tyreSize,
    quantity: quote.quantity,
    budget: quote.budget,
    notes: quote.notes,
    status: 'new'
  });
  return { ok: true, quoteRef };
}

export async function listGarageLeads() {
  const [bookings, quotes, reports] = await Promise.all([
    supabaseRest.list('bookings', 10),
    supabaseRest.list('quote_requests', 10),
    supabaseRest.list('tyre_reports', 10)
  ]);
  return { bookings, quotes, reports };
}

export async function createStripeDepositLink(bookingId: string) {
  return `${env.stripeDepositUrl}${env.stripeDepositUrl.includes('?') ? '&' : '?'}client_reference_id=${encodeURIComponent(bookingId)}`;
}
