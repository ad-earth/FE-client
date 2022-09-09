export interface CardLiType {
  Cnt: number
  UserLike: number[]
  p_No: number
  p_Thumbnail: string[]
  p_Category: string
  a_Brand: string
  p_Name: string
  p_Cost: number
  p_Sale: boolean
  p_Discount: number
  p_Option: (string | number)[]
  p_New: boolean
  p_Best: boolean
  p_Soldout: boolean
  p_Desc: string
  p_Review: number
  p_Like: number
  ad_level: number
  type?: 'wish' | 'ad'
}
