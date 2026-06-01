export const env = {
  supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL || '',
  supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || '',
  stripeDepositUrl: process.env.EXPO_PUBLIC_STRIPE_DEPOSIT_URL || 'https://buy.stripe.com/test_replace_with_live_checkout_link',
  garageEmail: process.env.EXPO_PUBLIC_GARAGE_EMAIL || 'mcdowellautoservicesltd@gmail.com'
};
export const isSupabaseConfigured = Boolean(env.supabaseUrl && env.supabaseAnonKey && env.supabaseUrl.includes('supabase.co'));
