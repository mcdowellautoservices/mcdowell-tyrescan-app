# Vercel API notes

This Stage 3 package saves leads directly to Supabase from the app using Supabase REST.
For production, add a small Vercel API to keep secrets private and send notifications.

Recommended endpoints:

- POST /api/booking-created
- POST /api/quote-created
- POST /api/report-created
- POST /api/create-stripe-checkout-session

Services to connect:

- Stripe Checkout for deposits
- Resend or SendGrid for email notifications
- Twilio for SMS notifications
- Tyre stock/pricing supplier feed

Do not put Stripe secret keys inside the mobile app. Keep them only in Vercel environment variables.
