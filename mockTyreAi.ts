import { TyreReport } from '../types';

const sizes = ['205/55R16 91V', '225/45R17 94W', '195/65R15 91H', '215/55R17 98W'];
const brands = ['Michelin', 'Goodyear', 'Continental', 'Bridgestone', 'Budget'];

export function createMockTyreReport(registration = ''): TyreReport {
  const treadDepthMm = Number((1.5 + Math.random() * 5.5).toFixed(1));
  const condition = treadDepthMm < 2 ? 'red' : treadDepthMm < 3.5 ? 'amber' : 'green';
  const dotAgeYears = Math.floor(1 + Math.random() * 7);
  return {
    id: `MAS-${Date.now()}`,
    createdAt: new Date().toISOString(),
    registration,
    tyreSize: sizes[Math.floor(Math.random() * sizes.length)],
    brandGuess: brands[Math.floor(Math.random() * brands.length)],
    treadDepthMm,
    condition,
    dotAgeYears,
    wearPattern: condition === 'red' ? 'Heavy outer-edge wear detected' : condition === 'amber' ? 'Uneven wear starting on inner edge' : 'Normal wear pattern',
    pressureRisk: condition === 'green' ? 'Low' : 'Possible under-inflation signs',
    alignmentRisk: condition === 'green' ? 'Low' : 'Alignment check recommended',
    recommendations: condition === 'red'
      ? ['Replace tyre urgently', 'Book fitting today', 'Check wheel alignment']
      : condition === 'amber'
        ? ['Get a quote for replacement', 'Recheck tread within 4 weeks', 'Check tyre pressure']
        : ['Tyre looks serviceable', 'Check pressure monthly', 'Scan again in 8 weeks'],
    priceEstimate: condition === 'red' ? '£59-£129 fitted' : 'Quote available on request'
  };
}
