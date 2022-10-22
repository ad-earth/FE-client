import * as t from "./sqSearchBar.style";
import { useRef } from "react";

const SqSearchBar = () => {
  const kewordRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = kewordRef.current!.value;
    console.log(enteredText);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <t.Div>
          <t.InputDiv>
            <t.SearchIcon onClick={submitHandler} />
            <input placeholder="검색" type="text" ref={kewordRef} />
            <t.Officon />
          </t.InputDiv>
        </t.Div>
      </form>
    </>
  );
};
export default SqSearchBar;
