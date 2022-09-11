import * as t from "./Profile.style";

interface DataType {
  // uploadProfileImg: () => (
  //   e: React.ChangeEvent<HTMLInputElement>
  // ) => Promise<void>;
  profileImg?: string;
}

const Profile = (props: DataType) => {
  return (
    <t.ProfWrapper>
      <t.UserImg src={props.profileImg} alt="userid" />
      <t.IconDiv>
        <t.UploadIcon />
        <input
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          // onChange={props.uploadProfileImg}
          style={{ display: "none" }}
        />
      </t.IconDiv>
    </t.ProfWrapper>
  );
};

export default Profile;
