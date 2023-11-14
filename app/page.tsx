export const dynamic = 'force-dynamic';
import Pricing from '@/components/Pricing';
import {
  getActiveProductsWithPrices,
  getCards,
  getEditionCollections,
  getEditions
} from '@/app/supabase-server';

export default async function PricingPage() {
  const [products, cards, editions, edition_collections] = await Promise.all([
    getActiveProductsWithPrices(),
    getCards(),
    getEditions(),
    getEditionCollections()
  ]);

  return (
    <Pricing
      products={products}
      cards={cards}
      editions={editions}
      edition_collections={edition_collections}
    />
  );
}
