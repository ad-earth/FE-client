import styled from "styled-components";
import { theme } from "../style/theme";

interface PropsType {
  width?: string;
  top?: string;
  left?: string;
  radius?: string;
  fcColor?: string;
  bgColor?: string;
  data: {
    id: number;
    cate: string;
    path: string;
  }[];
  isDropped?: boolean;
}

const MenuDrop = (props: PropsType) => {
  return (
    <MenuContainer {...props}>
      <ul>
        {props.data.map((data, i: number) => (
          <a href={data.path}>
            <li key={data.id}>{data.cate}</li>
          </a>
        ))}
      </ul>
    </MenuContainer>
  );
};

export default MenuDrop;

const MenuContainer = styled.div<PropsType>`
  width: ${(props) => (props.width ? props.width : "120px")};
  position: absolute;
  top: ${(props) => (props.top ? props.top : "60px")};
  left: ${(props) => (props.left ? props.left : "28%")};
  text-align: center;
  background-color: ${theme.bg01};
  box-shadow: 0 3px 6px ${theme.rgba03};
  border-radius: ${(props) => (props.radius ? props.radius : "15px")};
  border: 0px solid ${theme.ls03};
  opacity: ${(props) => (props.isDropped ? "1" : "0")};
  visibility: ${(props) => (props.isDropped ? "visible" : "hidden")};
  z-index: 9999;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  ul {
    overflow: hidden;
    border-radius: 15px;
  }
  li {
    font-size: ${theme.fs14};
    color: ${(props) => (props.fcColor ? props.fcColor : theme.fc15)};
    padding: 10px 0;
    background-clip: padding-box;
    :hover {
      background-color: ${(props) =>
        props.bgColor ? props.bgColor : theme.bg20};
      cursor: pointer;
    }
  }
  a {
    margin: 0;
    text-decoration: none;
  }
`;
