import * as t from "./cardIcon.style";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ListModal from "../../../containers/listPage/listModal/ListModal";
import { useIcon } from "./useCardIcon";
import { ProductsType } from "../../../containers/listPage/cardList/cardList.type";
import { useQueryClient } from "react-query";
import { useGetDetailQuery } from "../../../containers/detailPage/details/useGetDetailQuery";

const CardIcon = ({
  val,
  userLike,
}: {
  val: ProductsType;
  userLike: number[];
}) => {
  const [infoIsOpen, setInfoIsOpen] = useState<boolean>(false);
  const [plus, setPlus] = useState<number>(val.p_Like);
  const [include, setInculde] = useState<boolean>(userLike.includes(val.p_No));
  const { category } = useParams<{ category: string }>();
  const { keyParams } = useParams<{ keyParams: string }>();
  const navigate = useNavigate();
  const { mutate } = useIcon();
  const queryClient = useQueryClient();

  const data = useGetDetailQuery(String(val.p_No));

  //--찜하기 버튼
  const heartClick = () => {
    mutate(val.p_No, {
      onSuccess: () => {
        setInculde(!include);
        setPlus(include ? plus - 1 : plus + 1);
        queryClient.invalidateQueries("cardList");
      },
    });
  };

  return (
    <>
      <ListModal isOpen={infoIsOpen} handleClose={() => setInfoIsOpen(false)} />
      <t.CardCp>
        <t.IconDiv>
          <t.IconSpan>
            <t.MessageIcon
              onClick={() =>
                navigate({
                  pathname: `/detail/${val.p_No}`,
                  search: `category=${category}&keyword=${keyParams}`,
                })
              }
            />
            <t.Count>{val.p_Review}</t.Count>
          </t.IconSpan>
          <t.IconSpan>
            {include ? (
              <t.HeartIcon onClick={heartClick} />
            ) : (
              <t.EmptyHeartIcon onClick={heartClick} />
            )}
            <t.Count>{plus}</t.Count>
          </t.IconSpan>
          <t.CartIcon
            onClick={() => {
              setInfoIsOpen(true);
              data.refetch();
            }}
          />
        </t.IconDiv>
      </t.CardCp>
    </>
  );
};

export default CardIcon;
