import CardPage from '@/components/CardPage';
import { getCards, getEditions } from '@/app/supabase-server';
export const dynamic = 'force-dynamic';
export default async function CollectionPage({
  params
}: {
  params: { slug: string };
}) {
  const [cards, editions] = await Promise.all([getCards(), getEditions()]);

  let search = false;

  if (params.slug[1] == null) {
    search = true;
  }

  return (
    <CardPage
      cards={cards}
      element={params.slug[1]}
      edition={params.slug[0]}
      searchByEdition={search}
      editions={editions}
    />
  );
}
