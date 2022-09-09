import { useQuery } from 'react-query'

import { getList } from '../../../shared/apis/api'
import { CardProducts } from '../../../shared/types/types'

async function getCards(): Promise<CardProducts[]> {
  const { data } = await getList()
  return data
}

export function useCardList(): CardProducts[] {
  const fallback: [] = []
  const { data = fallback } = useQuery('all', getCards)
  return data
}
