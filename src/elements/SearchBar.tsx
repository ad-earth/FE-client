import React from 'react'
import styled from 'styled-components'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

interface InputType {
    children?: React.ReactNode;
}

export const SearchBar = (props: InputType) => {
  return (
    <InputDiv><SearchInput/><SearchRoundedIcon/></InputDiv>
  )
}

const InputDiv = styled.div<InputType>`
`

const SearchInput = styled.div<InputType>`
`