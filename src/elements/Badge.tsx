import React from "react";
import styled, { css } from "styled-components";

import { theme } from "../style/theme";

interface BadgeType {
  children?: React.ReactNode;
  type: "new" | "best" | "sale" | "soldout" | "ad";
}

export const Badge = (props: BadgeType) => {
  return <BadgeBox type={props.type}>{props.children}</BadgeBox>;
};

export const SquareBadge = () => {
  return <SqBadge>필수</SqBadge>;
};

const BadgeBox = styled.div<BadgeType>`
  ${({ type, theme }) => {
    if (type === "new") {
      return css`
        background-color: ${theme.bg16};
        color: ${theme.fc01};
        border: 1px solid ${theme.ls16};
      `;
    } else if (type === "best") {
      return css`
        background-color: ${theme.bg01};
        color: ${theme.fc19};
        border: 1px solid ${theme.ls07};
      `;
    } else if (type === "sale") {
      return css`
        background-color: ${theme.bg17};
        color: ${theme.fc01};
        border: 1px solid ${theme.ls17};
      `;
    } else if (type === "soldout" || "ad") {
      return css`
        background-color: ${theme.bg12};
        color: ${theme.fc01};
        border: 1px solid ${theme.ls12};
      `;
    }
  }};
  font-size: ${theme.fs11};
  font-weight: 400;
  text-align: center;
  padding: 2px 8px;
`;

const SqBadge = styled.div`
  width: 20px;
  font-size: ${theme.fs10};
  color: ${theme.fc09};
  border: 1px solid ${theme.rgba05};
  padding: 2px 4px;
`;
