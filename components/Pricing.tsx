'use client';

import Button from '@/components/ui/Button';
import { Database } from '@/types_db';
import cn from 'classnames';
import { useRouter } from 'next/navigation';

type Product = Database['public']['Tables']['products']['Row'];
type Price = Database['public']['Tables']['prices']['Row'];
interface ProductWithPrices extends Product {
  prices: Price[];
}

type Card = Database['public']['Tables']['cards']['Row'];
type Edition = Database['public']['Tables']['editions']['Row'];
type EditionCollection =
  Database['public']['Tables']['edition_collections']['Row'];

interface Props {
  products: ProductWithPrices[];
  cards: Card[];
  editions: Edition[];
  edition_collections: EditionCollection[];
}

export default function Pricing({
  products,
  cards,
  editions,
  edition_collections
}: Props) {
  const intervals = Array.from(
    new Set(
      products.flatMap((product) =>
        product?.prices?.map((price) => price?.interval)
      )
    )
  );
  const router = useRouter();

  function GetAmountOfElement(element: string) {
    const filteredArray = cards.filter(function (card) {
      return (
        card.element.toLowerCase() === element.toLowerCase() && card.owned > 0
      );
    });

    return filteredArray.length;
  }

  function GetAmountOfEdition(edition: string) {
    const filteredArray = cards.filter(function (card) {
      return (
        card.edition.toLowerCase() === edition.toLowerCase() && card.owned > 0
      );
    });

    return filteredArray.length;
  }

  function GetIsCompleteEdition(id: string, collected: number) {
    let totalCount = editions.find((ed) => ed.id == id)?.totalCards;

    return totalCount! <= collected;
  }

  function GetIsCompleteAll(id: string) {
    let collected = GetAmountOfEdition(id);
    if (id == 'promo-founders') {
      collected = GetAmountOfEdition('founders-promo');
    }
    let totalCount = editions.find((ed) => ed.id == id)?.totalCards;

    return totalCount! <= collected;
  }

  return (
    <section className="bg-black">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Collections
          </h1>
          <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl">
            Find each collection I have by their element on this page, then hit
            one of their buttons to find out more about that collection!
          </p>
        </div>
        {edition_collections.map((collection) => {
          return (
            <div key={collection.id}>
              <br />
              <br />
              <h3
                className={cn(
                  'text-2xl font-extrabold text-white sm:text-center sm:text-4xl',
                  {
                    'text-pink-500': GetIsCompleteAll('founders') ? true : false
                  }
                )}
              >
                {collection.header + ' '}Collection
              </h3>
              <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
                {products.map((product) => {
                  if (!collection.links.includes(product.id!)) return;
                  return (
                    <div
                      key={product.id}
                      className={cn(
                        'rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900',
                        {
                          'border border-pink-500': GetIsCompleteEdition(
                            product.id,
                            product.searchByElement
                              ? GetAmountOfElement(product.name!)
                              : GetAmountOfEdition(product.edition!)
                          )
                            ? true
                            : false
                        }
                      )}
                    >
                      <div className="p-6">
                        <h2 className="text-2xl font-semibold leading-6 text-white">
                          {product.name}
                        </h2>
                        <p className="mt-4 text-zinc-300">
                          {product.description}
                        </p>
                        <p className="mt-8">
                          <span className="text-5xl font-extrabold white">
                            {product.searchByElement
                              ? GetAmountOfElement(product.name!)
                              : GetAmountOfEdition(product.edition!)}
                          </span>
                          <span className="text-base font-medium text-zinc-100">
                            {' collected'}
                          </span>
                        </p>
                        <Button
                          variant="slim"
                          type="button"
                          onClick={() => {
                            if (product.searchByElement) {
                              router.push(
                                '/collections/' +
                                  product.edition?.toLowerCase() +
                                  '/' +
                                  product.name?.toLowerCase()
                              );
                            } else {
                              router.push(
                                '/collections/' + product.edition?.toLowerCase()
                              );
                            }
                          }}
                          className="block w-full py-2 mt-8 text-sm font-semibold text-center text-white rounded-md hover:bg-zinc-900"
                        >
                          View this Collection
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
