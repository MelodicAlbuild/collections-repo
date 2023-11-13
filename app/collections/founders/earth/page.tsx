import CardPage from '@/components/CardPage';
import { getCards } from '@/app/supabase-server';

export default async function Earth() {
  const [cards] = await Promise.all([getCards()]);

  return <CardPage cards={cards} element={'Earth'} edition="Founders" />;
}
