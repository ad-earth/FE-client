export interface CardType {

  p_Thumbnail: string
  a_Brand: string
  p_Name: string
  p_Cost: number
  p_Sale: boolean
  p_Discount: number
  p_Option: (string | number)[]
  type?: 'wish' | 'ad'
  p_New: boolean
  p_Best: boolean
  p_Soldout: boolean
}
