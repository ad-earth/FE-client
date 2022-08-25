import React from "react";
import styled from "styled-components";
interface BadgeType {
  children?: React.ReactNode;
  type: "new" | "best" | "sale" | "soldout";
}

export const Badge = (props: BadgeType) => {
  return <BadgeBox type={props.type}>{props.children}</BadgeBox>;
};

export const SquareBadge = () => {
  return <SqBadge>필수</SqBadge>;
}

const BadgeBox = styled.div<BadgeType>`
  background-color: ${({ type, theme }) =>
    theme.badgeBackground[type || "new"]};
  color: ${({ type, theme }) => theme.badgeColor[type || "new"]};
  border: ${({ type, theme }) => theme.badgeBorder[type || "new"]};
  font-size: 11px;
  font-weight: 400;
  text-align: center;
  padding: 2px 8px;
`;

const SqBadge = styled.div`
width: 20px;
font-size: ${({theme}) => theme.fontSize.xsmall};
color: ${({theme}) => theme.colors.gray2};
border: 1px solid rgba(33,33,33,0.2);
padding: 2px 4px;
`