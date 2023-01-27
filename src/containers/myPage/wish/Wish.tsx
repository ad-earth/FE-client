import * as t from "./wish.style";
import WishCard from "../../../components/myPage/wishCard/WishCard";
import useGetWishQuery from "./useGetWishQuery";
import { WishListType } from "./wish.type";
import useIntersectHandler from "../../../hooks/useIntersectHandler";

export default function Wish() {
  const {
    isLoading,
    data: wishList,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetWishQuery();

  const target = useIntersectHandler(() => {
    if (!hasNextPage || isFetchingNextPage) return;
    fetchNextPage();
  });

  if (isLoading) return <p>Loading...</p>;
  if (!wishList.wishData) return <span>No data found</span>;
  if (wishList.cnt === 0)
    return <t.DataNull>위시리스트가 없습니다.</t.DataNull>;

  return (
    <section>
      <t.Title>
        위시리스트 <span>{wishList.cnt}</span>
      </t.Title>
      <t.CardContent>
        {wishList.wishData.map((list: WishListType, i: number) => (
          <t.List key={i}>
            <WishCard list={list} />
          </t.List>
        ))}
      </t.CardContent>
      {isFetching && !isFetchingNextPage ? (
        "Loading more..."
      ) : (
        <div ref={target}></div>
      )}
    </section>
  );
}
