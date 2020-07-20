import styled from "styled-components";

const UploadPhotoStyled = styled.div`
  width: 350px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  /* input{
   width:100%;
   height:100%;
   #file-upload-button{
background-color:black
   } */

  button {
    padding: 0px;
    border-radius: 4px;
    width: 130px;
    height: 130px;
    border: 1px dashed #d9dadb;
    background-color: white;
    border-style: dashed dotted;
    box-sizing: border-box;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;

export default UploadPhotoStyled;
