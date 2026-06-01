export type TyreCondition = 'green' | 'amber' | 'red';
export type TyreReport = {
  id: string;
  createdAt: string;
  registration?: string;
  tyreSize: string;
  brandGuess: string;
  treadDepthMm: number;
  condition: TyreCondition;
  dotAgeYears: number;
  wearPattern: string;
  pressureRisk: string;
  alignmentRisk: string;
  recommendations: string[];
  priceEstimate: string;
};
export type Booking = {
  id: string;
  name: string;
  phone: string;
  email?: string;
  registration: string;
  service: string;
  preferredDate: string;
  notes: string;
  reportId?: string;
  status: 'new' | 'confirmed' | 'completed';
};
export type QuoteRequest = {
  name: string;
  phone: string;
  registration: string;
  tyreSize: string;
  quantity: string;
  budget: string;
  notes: string;
};
