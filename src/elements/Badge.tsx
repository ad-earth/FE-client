import React from "react";
import styled from "styled-components";

// 사각 선 뱃지

interface BadgeType {
  children?: React.ReactNode;
  type: "new" | "best" | "sale" | "soldout";
}

export const Badge = (props: BadgeType) => {
  return <BadgeBox type={props.type}>{props.children}</BadgeBox>;
};

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
