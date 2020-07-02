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
    border-radius: 4px;
    width: 130px;
    height: 130px;
    border: 1px;
    background-color: white;
    border-style: dashed;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;

export default UploadPhotoStyled;
