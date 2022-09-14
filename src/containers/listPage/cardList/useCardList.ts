import { useQuery } from 'react-query'

import { getList } from '../../../shared/apis/api'
import { CardType } from '../../../shared/types/types'

async function getCards(): Promise< CardType[]> {
  const { data } = await getList()
  return data
}

export function useCardList(): CardType[] {
  const fallback: [] = []
  const { data = fallback } = useQuery('all', getCards)
  return data
}
