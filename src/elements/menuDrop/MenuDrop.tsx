import * as t from "./menuDrop.style";
import { MenuDropType } from "./menuDrop.type";

const MenuDrop = (props: MenuDropType) => {
  return (
    <t.MenuContainer {...props}>
      <ul>
        {props.cateData.map((data, i: number) => (
          <a href={data.path} key={i}>
            <li>{data.cate}</li>
          </a>
        ))}
      </ul>
    </t.MenuContainer>
  );
};

export default MenuDrop;
