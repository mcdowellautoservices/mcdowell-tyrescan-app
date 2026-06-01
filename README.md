# Mcdowell TyreScan — Stage 3 Live-Ready Build

This is the upgraded live-ready starter for Mcdowell Auto Services.

Included:

- Customer tyre scan flow with mock AI report
- Booking form
- Tyre quote form
- Live-ready Supabase REST storage
- Admin dashboard that reads bookings, quote requests, and tyre reports
- Stripe deposit link placeholder
- Supabase SQL schema and policies
- Vercel API notes for production notifications and Stripe Checkout

## Run locally

```bash
npm install
npm run start
```

Open with Expo Go or run web with:

```bash
npm run web
```

## Supabase setup

1. Create a Supabase project.
2. Open SQL Editor.
3. Paste `SUPABASE_SCHEMA.sql` and run it.
4. Copy `.env.example` to `.env`.
5. Add your Supabase URL and anon key.
6. Restart Expo.

## Stripe setup

For testing, use a Stripe Payment Link in `EXPO_PUBLIC_STRIPE_DEPOSIT_URL`.
For full launch, build `/api/create-stripe-checkout-session` in Vercel and keep the Stripe secret key server-side only.

## Important

The tyre AI is still a mock engine. It is structured so a real tyre-scanning API or custom computer vision model can replace `src/services/mockTyreAi.ts` later.
