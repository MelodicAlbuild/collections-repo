export const dynamic = 'force-dynamic';
import Pricing from '@/components/Pricing';
import { getActiveProductsWithPrices } from '@/app/supabase-server';

export default async function PricingPage() {
  const [products] = await Promise.all([getActiveProductsWithPrices()]);

  return <Pricing products={products} />;
}
