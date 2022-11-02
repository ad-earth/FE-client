import * as t from "./cateDrop.style";
import { useState } from "react";
import { theme } from "../../../style/theme";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { editPagNo, editSort } from "../../../redux/reducer/listSlice";

const CateDrop = () => {
  const [open, setOpen] = useState(false);
  //-- reducer
  const { sort } = useAppSelector((state) => state.listSlice);
  const dispatch = useAppDispatch();

  //- 셀렉트 변경
  const handleChange = (e: SelectChangeEvent<typeof sort>) => {
    const value = e.target.value;
    dispatch(editSort(value));
    dispatch(editPagNo(1));
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <t.SelectWrap>
      <FormControl variant="standard" sx={{ m: 2, minWidth: 90 }} size="small">
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={sort}
          label="sort"
          onChange={handleChange}
          style={{ fontSize: `${theme.fs15}`, color: `${theme.fc08}` }}
        >
          <MenuItem value="recent">등록순</MenuItem>
          <MenuItem value="like">인기순</MenuItem>
          <MenuItem value="minprice">낮은가격순</MenuItem>
          <MenuItem value="maxprice">높은가격순</MenuItem>
        </Select>
      </FormControl>
    </t.SelectWrap>
  );
};

export default CateDrop;
