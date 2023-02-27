import * as t from "./profile.style";
import React, { useMemo, useRef, useState, useEffect } from "react";
import ReactS3Client from "react-aws-s3-typescript";
import { s3Config } from "../../../shared/utils/s3Config";
import { IConfig } from "../../../../node_modules/react-aws-s3-typescript/dist/types";
import { useAppSelector } from "../../../redux/store";
import { PropsType, UploadImg } from "./profile.type";

const Profile = ({ imgUrl, setImgUrl }: PropsType) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imgFile, setImgFile] = useState<UploadImg | null>(null);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  // const defaultImg = useAppSelector((state) => state.userSlice.userData.u_Img);

  const handleClickFileInput = () => {
    fileInputRef.current?.click();
  };

  const uploadProfile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const s3 = new ReactS3Client(s3Config as IConfig);
    const fileList = e.target.files;
    const fileLength = fileList?.length;
    if (fileLength && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);
      setImgFile({
        file: fileList[0],
        fileName: fileList[0].name,
        thumbnail: url,
        type: fileList[0].type.slice(0, 5),
      });
      try {
        const res = await s3
          .uploadFile(fileList[0], fileList[0].name)
          .then((data) => {
            setImgUrl(data.location);
          });
      } catch (err) {
        console.error(err);
      }
    }
  };

  const showImage = useMemo(() => {
    if (userInfo?.u_Img || imgFile == null) {
      return <t.UserImg src={userInfo?.u_Img} alt="default profile" />;
    }
    if (!userInfo?.u_Img && imgFile) {
      return <t.UserImg src={imgFile.thumbnail} alt={imgFile.type} />;
    }
  }, [imgFile, userInfo?.u_Img]);

  useEffect(() => {
    if (userInfo?.u_Img && !imgFile) {
      setImgUrl(userInfo?.u_Img);
    }
  }, [userInfo?.u_Img]);

  return (
    <t.ProfWrapper>
      {showImage}
      <t.IconDiv>
        <t.UploadIcon onClick={() => handleClickFileInput()} />
        <input
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          ref={fileInputRef}
          onChange={uploadProfile}
          style={{ display: "none" }}
        />
      </t.IconDiv>
    </t.ProfWrapper>
  );
};

export default Profile;
