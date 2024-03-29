import * as t from "./userInfoModal.style";
import { theme } from "../../../style/theme";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserInfoValidation } from "../../../shared/utils/yup";
import { useUserInfoModal } from "./useUserInfoModal";
import Modal from "../Modal";
import Profile from "../../signUpPage/profile/Profile";
import AddressForm from "../../signUpPage/addressForm/AddressForm";
import Input from "../../../elements/input/Input";
import { MainButton } from "../../../elements/buttons/Buttons";
import { useAppSelector } from "../../../redux/store";
import { ModalType, FormValueType } from "./userInfoModal.type";

const UserInfoModal = (props: ModalType) => {
  const TOKEN = localStorage.getItem("token");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  // const uName: string = userInfo.u_Name;
  // const uContact: string = userInfo.u_Phone;
  // const uGender: string = userInfo.u_Gender;
  // const uName = useAppSelector((state) => state.userSlice.userData.u_Name);
  // const uGender = useAppSelector((state) => state.userSlice.userData.u_Gender);
  // const uContact = useAppSelector((state) => state.userSlice.userData.u_Phone);
  const [imgUrl, setImgUrl] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [extraAddress, setExtraAddress] = useState("");
  const [formValue, setFormValue] = useState<FormValueType>({
    userName: "",
    gender: "",
    contact: "",
  });

  // react-hook-form 유효성 검사
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValueType>({
    mode: "onChange",
    resolver: yupResolver(UserInfoValidation),
    defaultValues: {
      userName: (userInfo?.u_Name && userInfo.u_Name) || "",
      gender: (userInfo?.u_Gender && userInfo.u_Gender) || "",
      contact: (userInfo?.u_Phone && userInfo.u_Phone) || "",
    },
  });

  const submitHandler = (data: FormValueType) => {
    setFormValue(data);
  };

  const userInfoData = {
    u_Name: formValue.userName,
    u_Address1: zipcode,
    u_Address2: address,
    u_Address3: extraAddress,
    u_Gender: formValue.gender,
    u_Phone: formValue.contact,
    u_Img: imgUrl,
  };

  // 유저 정보 수정 post 요청
  const { mutate, isSuccess } = useUserInfoModal(userInfoData);

  useEffect(() => {
    if (isSuccess) {
      alert(`${formValue.userName}님의 정보를 수정하였습니다!`);
    }
    // return () => {
    //   window.location.reload();
    // };
  }, [isSuccess]);

  const handelClick = () => {
    mutate();
  };

  return (
    <>
      {props.isOpen && (
        <Modal handleClose={() => props.handleClose()} isOpen={props.isOpen}>
          <t.Container>
            <t.InfoHeader>
              정보 수정
              <t.Close onClick={() => props.handleClose()} />
            </t.InfoHeader>
            <form onSubmit={handleSubmit(submitHandler)}>
              <t.InfoBody>
                <Profile imgUrl={imgUrl} setImgUrl={setImgUrl} />
                <t.DescTxt>이름</t.DescTxt>
                <Input
                  holderName="이름을(를) 입력하세요"
                  color={theme.fc14}
                  {...register("userName")}
                />
                {errors.userName && (
                  <t.ErrorMsg>{errors.userName.message}</t.ErrorMsg>
                )}
                <t.DescTxt>성별</t.DescTxt>
                <t.BtnWrapper>
                  <t.RadioBtn
                    type="radio"
                    value="남성"
                    {...register("gender")}
                  />
                  <span>남자</span>
                  <t.RadioBtn
                    type="radio"
                    value="여성"
                    {...register("gender")}
                  />
                  <span>여자</span>
                </t.BtnWrapper>
                {errors.gender && (
                  <t.ErrorMsg>{errors.gender.message}</t.ErrorMsg>
                )}
                <t.DescTxt>연락처</t.DescTxt>
                <Input
                  holderName="연락처"
                  color={theme.fc14}
                  {...register("contact")}
                />
                {errors.contact && (
                  <t.ErrorMsg>{errors.contact.message}</t.ErrorMsg>
                )}
                <t.DescTxt>주소</t.DescTxt>
                <AddressForm
                  zipcode={zipcode}
                  address={address}
                  extraAddress={extraAddress}
                  setZipcode={setZipcode}
                  setAddress={setAddress}
                  setExtraAddress={setExtraAddress}
                />
                <t.SubmitDiv>
                  {imgUrl.length &&
                  zipcode.length &&
                  address.length &&
                  extraAddress.length > 0 &&
                  formValue ? (
                    <MainButton
                      radius="30px"
                      fontSize={theme.fs14}
                      onClick={() => handelClick()}
                    >
                      {TOKEN ? "정보수정" : "가입하기"}
                    </MainButton>
                  ) : (
                    <MainButton
                      radius="30px"
                      fontSize={theme.fs14}
                      onClick={() => alert("모든 항목을 입력해주세요!")}
                    >
                      {TOKEN ? "정보수정" : "가입하기"}
                    </MainButton>
                  )}
                </t.SubmitDiv>
              </t.InfoBody>
            </form>
          </t.Container>
        </Modal>
      )}
    </>
  );
};
export default UserInfoModal;
