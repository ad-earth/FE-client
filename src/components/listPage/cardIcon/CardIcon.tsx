import * as t from "./cardIcon.style";
import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ListModal from "../../../containers/listPage/listModal/ListModal";
import { useIcon } from "./useCardIcon";
import { ProductsType } from "../../../containers/listPage/cardList/cardList.type";
import { useQueryClient } from "react-query";
import { useGetDetailQuery } from "../../../containers/detailPage/details/useGetDetailQuery";
import { useAppSelector } from "../../../redux/store";
import { usePostLikeQuery } from "../../detailPage/buttons/usePostLikeQuery";

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

  const [productNo, setProductNo] = useState<number>(null);

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
  //-- 리스트 모달
  const { refetch } = useGetDetailQuery(
    val.p_No ? String(val.p_No) : null,
    keyParams !== undefined ? keyParams : null
  );
  const ModalClick = () => {
    setInfoIsOpen(true);
    setProductNo(val.p_No);
    refetch();
  };
  const detailData = useAppSelector((state) => state.detailSlice.details);

  const { isLike, likeQty } = useMemo(
    () => ({
      isLike: detailData?.userLike,
      likeQty: detailData?.product.p_Like,
    }),
    [detailData]
  );

  return (
    <>
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
          <ListModal
            isOpen={infoIsOpen}
            handleClose={() => setInfoIsOpen(false)}
          />
          <t.CartIcon onClick={ModalClick} />
        </t.IconDiv>
      </t.CardCp>
    </>
  );
};

export default CardIcon;
