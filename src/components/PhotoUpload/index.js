import React, { useState, useEffect } from "react";
import UploadPhotoStyled from "./styled";
import styled from "styled-components";
import AddIcon from "../../assets/add-outline.png";
export default function UpdatePage(props) {
  const [pic1, setPic1] = useState(null);
  const [pic2, setPic2] = useState(null);
  const [img1, setImgUrl1] = useState(`http://localhost:1337${props.value1}`);
  const [img2, setImgUrl2] = useState(`http://localhost:1337${props.value2}`);
  const getPreview = (img) =>
    img !== null
      ? {
          border: "0px",
          width: "100%",
          height: "100%",
          backgroundImage: "url(" + img + ")",
          backgroundSize: "cover",
          border: "0px",
        }
      : {
          backgroundImage: "url(" + AddIcon + ")",
          backgroundSize: "cover",
          border: "0px",
        };

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

  const Button = styled.button`
    /* Insert your favorite CSS code to style a button */

    width: 100px;
    height: 100px;
    /* background-color: white; */
    border-style: dashed;
  `;

  const handleClick1 = (event) => {
    document.getElementById("hiddenFileInput").click();
  };

  const handleClick2 = (event) => {
    document.getElementById("hiddenFileInput2").click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
  };

  return (
    <div style={{ marginBottom: "40px" }}>
      <p style={{ fontSize: "16px", fontWeight: "500" }}>Upload photo</p>
      <UploadPhotoStyled>
        <div>
          <Button onClick={handleClick1}>
            <img style={getPreview(img1)}></img>
          </Button>
          <input
            type="file"
            id="hiddenFileInput"
            onChange={(e) => {
              handleChangePic(e, "pic1");
            }}
            style={{ display: "none" }}
          />
          <p style={{ marginLeft: "50px", marginTop: "10px" }}>Front</p>
        </div>
        <div>
          <Button onClick={handleClick2}>
            <img style={getPreview(img2)}></img>
          </Button>
          <input
            type="file"
            id="hiddenFileInput2"
            onChange={(e) => {
              handleChangePic(e, "pic2");
            }}
            style={{ display: "none" }}
          />
          <p style={{ marginLeft: "50px", marginTop: "10px" }}>Back</p>
        </div>
      </UploadPhotoStyled>
    </div>
  );
}
