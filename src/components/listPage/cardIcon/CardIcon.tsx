import * as t from "./cardIcon.style";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useIcon } from "./useCardIconQuery";
import { ProductsType } from "../../../containers/listPage/cardList/cardList.type";

const CardIcon = ({ val, userLike }: { val: ProductsType; userLike: number[] }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate } = useIcon();
  const { category } = useParams<{ category: string }>();
  const { keyParams } = useParams<{ keyParams: string }>();
  const [plus, setPlus] = useState<number>(val.p_Like);
  const [include, setInculde] = useState<boolean>(userLike.includes(val.p_No));

  //--찜하기 버튼
  const heartClick = () => {
    mutate(val.p_No, {
      onSuccess: () => {
        setInculde(!include);
        setPlus(include ? plus - 1 : plus + 1);
        queryClient.invalidateQueries("cardList");
      },
      onError: () => {
        alert("로그인 후 사용가능합니다.");
      },
    });
  };

  const MessageClick = () => {
    navigate({
      pathname: `/detail/${val.p_No}`,
      search: `category=${category}&keyword=${keyParams}`,
    });
  };

  return (
    <>
      <t.CardCp>
        <t.IconDiv>
          <t.IconSpan>
            <t.MessageIcon onClick={MessageClick} />
            <t.Count>{val.p_Review}</t.Count>
          </t.IconSpan>
          <t.IconSpan>
            {include ? <t.HeartIcon onClick={heartClick} /> : <t.EmptyHeartIcon onClick={heartClick} />}
            <t.Count>{plus}</t.Count>
          </t.IconSpan>
        </t.IconDiv>
      </t.CardCp>
    </>
  );
};

export default CardIcon;
