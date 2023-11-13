'use client';
import { Database } from '@/types_db';

type Card = Database['public']['Tables']['cards']['Row'];

interface Props {
  cards: Card[];
  element: string;
  edition: string;
}

export default function CardPage({ cards, element, edition }: Props) {
  function GetAmountOfElement(element: string) {
    const filteredArray = cards.filter(function (card) {
      return card.element.toLowerCase() === element.toLowerCase();
    });

    let sum = 0;

    filteredArray.forEach((card) => {
      sum += card.owned;
    });

    return sum;
  }

  function GetAmountOfEdition(edition: string) {
    const filteredArray = cards.filter(function (card) {
      return card.edition.toLowerCase() === edition.toLowerCase();
    });

    let sum = 0;

    filteredArray.forEach((card) => {
      sum += card.owned;
    });

    return sum;
  }

  function GetAmountOfNumber(number: string) {
    const filteredArray = cards.filter(function (card) {
      return card.id.toLowerCase() === number.toLowerCase();
    });

    let sum = 0;

    filteredArray.forEach((card) => {
      sum += card.owned;
    });

    return sum;
  }

  return (
    <section className="bg-black">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            {edition == 'founders-promo' ? 'Founders Promo' : edition}{' '}
            {element != 'N/A' ? element : ''} Collection
          </h1>
        </div>
        <br />
        <br />
        <h3 className="text-2xl font-extrabold text-white sm:text-center sm:text-4xl">
          Normal
        </h3>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {cards.map((card: Card) => {
            if (card.edition.toLowerCase() != edition.toLowerCase()) return;
            if (card.element.toLowerCase() != element.toLowerCase()) return;
            if (card.variant != null) return;
            const priceString = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0
            }).format((card.price || 0) / 100);
            return (
              <div
                key={card.id}
                className={
                  'rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900'
                }
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold leading-6 text-white">
                    {card.name} | {card.id}
                  </h2>
                  <p className="mt-8">
                    <span className="text-5xl font-extrabold white">
                      {GetAmountOfNumber(card.id)}
                    </span>
                    <span className="text-base font-medium text-zinc-100">
                      {' collected'}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <br />
        <h3 className="text-2xl font-extrabold text-white sm:text-center sm:text-4xl">
          Holo
        </h3>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {cards.map((card: Card) => {
            if (card.edition.toLowerCase() != edition.toLowerCase()) return;
            if (card.element.toLowerCase() != element.toLowerCase()) return;
            if (card.variant != 'holo') return;
            const priceString = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0
            }).format((card.price || 0) / 100);
            return (
              <div
                key={card.id}
                className={
                  'rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900'
                }
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold leading-6 text-white">
                    {card.name} | {card.id}
                  </h2>
                  <br />
                  <h2 className="text-xl font-semibold leading-6 text-white">
                    Owned: {card.owned}
                  </h2>
                  <p className="mt-8">
                    <span className="text-5xl font-extrabold white">
                      {GetAmountOfNumber(card.id)}
                    </span>
                    <span className="text-base font-medium text-zinc-100">
                      {' collected'}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <br />
        <h3 className="text-2xl font-extrabold text-white sm:text-center sm:text-4xl">
          Full Art
        </h3>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {cards.map((card: Card) => {
            if (card.edition.toLowerCase() != edition.toLowerCase()) return;
            if (card.element.toLowerCase() != element.toLowerCase()) return;
            if (card.variant != 'fa') return;
            const priceString = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0
            }).format((card.price || 0) / 100);
            return (
              <div
                key={card.id}
                className={
                  'rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900'
                }
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold leading-6 text-white">
                    {card.name} | {card.id}
                  </h2>
                  <p className="mt-8">
                    <span className="text-5xl font-extrabold white">
                      {GetAmountOfNumber(card.id)}
                    </span>
                    <span className="text-base font-medium text-zinc-100">
                      {' collected'}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <br />
        <h3 className="text-2xl font-extrabold text-white sm:text-center sm:text-4xl">
          Stellar
        </h3>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {cards.map((card: Card) => {
            if (card.edition.toLowerCase() != edition.toLowerCase()) return;
            if (card.element.toLowerCase() != element.toLowerCase()) return;
            if (card.variant != 'stellar') return;
            const priceString = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0
            }).format((card.price || 0) / 100);
            return (
              <div
                key={card.id}
                className={
                  'rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900'
                }
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold leading-6 text-white">
                    {card.name} | {card.id}
                  </h2>
                  <p className="mt-8">
                    <span className="text-5xl font-extrabold white">
                      {GetAmountOfNumber(card.id)}
                    </span>
                    <span className="text-base font-medium text-zinc-100">
                      {' collected'}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <br />
        <h3 className="text-2xl font-extrabold text-white sm:text-center sm:text-4xl">
          Alt Art
        </h3>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {cards.map((card: Card) => {
            if (card.edition.toLowerCase() != edition.toLowerCase()) return;
            if (card.element.toLowerCase() != element.toLowerCase()) return;
            if (card.variant != 'alt') return;
            const priceString = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0
            }).format((card.price || 0) / 100);
            return (
              <div
                key={card.id}
                className={
                  'rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900'
                }
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold leading-6 text-white">
                    {card.name} | {card.id}
                  </h2>
                  <p className="mt-8">
                    <span className="text-5xl font-extrabold white">
                      {GetAmountOfNumber(card.id)}
                    </span>
                    <span className="text-base font-medium text-zinc-100">
                      {' collected'}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
