import React, {
  useMemo,
  useRef,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import * as t from "./Profile.style";
import ReactS3Client from "react-aws-s3-typescript";
import { s3Config } from "../../../shared/utils/s3Config";
import { IConfig } from "../../../../node_modules/react-aws-s3-typescript/dist/types";

interface PropsType {
  imgUrl: string;
  setImgUrl: Dispatch<SetStateAction<string>>;
}

type UploadImg = {
  file: File;
  fileName: string;
  thumbnail: string;
  type: string;
};

const defaultImg = localStorage.getItem("u_Img");

const Profile = ({ imgUrl, setImgUrl }: PropsType) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imgFile, setImgFile] = useState<UploadImg | null>(null);

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
    if (defaultImg || imgFile == null) {
      return <t.UserImg src={defaultImg} alt="default profile" />;
    }
    if (!defaultImg && imgFile) {
      return <t.UserImg src={imgFile.thumbnail} alt={imgFile.type} />;
    }
  }, [imgFile, defaultImg]);

  useEffect(() => {
    if (defaultImg && !imgFile) {
      setImgUrl(defaultImg);
    }
  }, [defaultImg]);

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
