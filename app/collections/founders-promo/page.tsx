import CardPage from '@/components/CardPage';
import { getCards } from '@/app/supabase-server';

export default async function FoundersPromo() {
  const [cards] = await Promise.all([getCards()]);

  return <CardPage cards={cards} element={'N/A'} edition="founders-promo" />;
}
