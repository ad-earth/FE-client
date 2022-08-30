import React, { useRef, useState } from 'react'
import styled from 'styled-components'

export const CateDrop = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <>
      <BtnArea>
        <DropBtn name="pets" id="pet-select">
          <option value="">등록순</option>
          <option value="first" selected>
            인기순
          </option>
          <option value="cat">낮은가격순</option>
          <option value="hamster">높은가격순</option>
        </DropBtn>
      </BtnArea>
    </>
  )
}

const BtnArea = styled.div`
width: 100%
  padding: 0 30px
  margin: 0 20px;
  text-align: right;
`
const DropBtn = styled.select`
  text-align: right;
  cursor: pointer;
  color: #646464;
  padding: 0 25px;
  margin: 0 20px 15px;
  border: none;
  vertical-align: middle;
  transition: box-shadow 0.4s ease;
  outline-color: #fff;
`
