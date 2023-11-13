export const dynamic = 'force-dynamic';
import Pricing from '@/components/Pricing';
import { getActiveProductsWithPrices, getCards } from '@/app/supabase-server';

export default async function PricingPage() {
  const [products, cards] = await Promise.all([
    getActiveProductsWithPrices(),
    getCards()
  ]);

  return <Pricing products={products} cards={cards} />;
}
