import * as t from "./cardIcon.style";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useIcon } from "./useCardIconQuery";
import { ProductsType } from "../../../containers/listPage/cardList/cardList.type";
import ListModal from "../../modal/listModal/ListModal";
import { useGetDetailQuery } from "../../../containers/detailPage/details/useGetDetailQuery";
import { useAppDispatch } from "../../../redux/store";
import { setIsError } from "../../../redux/reducer/errorSlice";
import { editErrorNo } from "../../../redux/reducer/listSlice";

const CardIcon = ({
  val,
  userLike,
}: {
  val: ProductsType;
  userLike: number[];
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const { mutate } = useIcon();
  const { category } = useParams<{ category: string }>();
  const { keyParams } = useParams<{ keyParams: string }>();
  const [plus, setPlus] = useState<number>(val.p_Like);
  const [productNo, setProductNo] = useState<number>(null);
  const [infoIsOpen, setInfoIsOpen] = useState<boolean>(false);
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
        dispatch(setIsError(true));
        dispatch(editErrorNo(val.p_No));
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
            pNo={val.pNo}
          />
          <t.CartIcon onClick={ModalClick} />
        </t.IconDiv>
      </t.CardCp>
    </>
  );
};

export default CardIcon;
