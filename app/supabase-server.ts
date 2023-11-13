import { Database } from '@/types_db';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { cache } from 'react';

export const createServerSupabaseClient = cache(() =>
  createServerComponentClient<Database>({ cookies })
);

export const getActiveProductsWithPrices = async () => {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from('products')
    .select('*, prices(*)')
    .eq('active', true)
    .eq('prices.active', true)
    .order('metadata->index')
    .order('unit_amount', { foreignTable: 'prices' });

  if (error) {
    console.log(error.message);
  }
  return data ?? [];
};

export const getCards = async () => {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from('cards')
    .select('*')
    .order('id');

  if (error) {
    console.log(error.message);
  }
  return data ?? [];
};

export const getEditions = async () => {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from('editions')
    .select('*')
    .order('id');

  if (error) {
    console.log(error.message);
  }
  return data ?? [];
};

