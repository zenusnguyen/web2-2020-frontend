import React, { useState, useEffect } from "react";
import UploadPhotoStyled from "./styled";

export default function UpdatePage() {
  const [pic1, setPic1] = useState(null);
  const [pic2, setPic2] = useState(null);
  const [img1, setImgUrl1] = useState(null);
  const [img2, setImgUrl2] = useState(null);
  const getPreview = (img) =>
    img !== null
      ? {
          backgroundImage: "url(" + img + ")",
          backgroundSize: "cover",
        }
      : null;

  const handleChangePic = (e, pic) => {
    if (e.target.files[0].size >= 4 * 1024 * 1024) {
      alert("Max size of an image: 4MB");
    } else {
      if (pic === "pic1") {
        setPic1(e.target.files[0]);
        setImgUrl1(URL.createObjectURL(e.target.files[0]));
      } else if (pic === "pic2") {
        setPic2(e.target.files[0]);
        setImgUrl2(URL.createObjectURL(e.target.files[0]));
      } else {
      }
    }
  };
  return (
    <UploadPhotoStyled>
      <input
        accept="image/x-png,image/gif,image/jpeg"
        type="file"
        onChange={(e) => {
          handleChangePic(e, "pic1");
        }}
        style={getPreview(img1)}
        required
      />
    </UploadPhotoStyled>
  );
}
