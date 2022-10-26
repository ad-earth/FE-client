import * as t from "./badge.style";
import { BadgeType } from "./badge.type";

export const Badge = (props: BadgeType) => {
  return <t.BadgeBox type={props.type}>{props.children}</t.BadgeBox>;
};

export const SquareBadge = () => {
  return <t.SqBadge>필수</t.SqBadge>;
};
