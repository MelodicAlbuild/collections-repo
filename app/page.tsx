export const dynamic = 'force-dynamic';
import Pricing from '@/components/Pricing';
import {
  getActiveProductsWithPrices,
  getCards,
  getEditions
} from '@/app/supabase-server';

export default async function PricingPage() {
  const [products, cards, editions] = await Promise.all([
    getActiveProductsWithPrices(),
    getCards(),
    getEditions()
  ]);

  return <Pricing products={products} cards={cards} editions={editions} />;
}
