import CardPage from '@/components/CardPage';
import { getCards } from '@/app/supabase-server';

export const dynamic = 'force-dynamic';

export default async function Fire() {
  const [cards] = await Promise.all([getCards()]);

  return <CardPage cards={cards} element={'Wind'} edition="Founders" />;
}
