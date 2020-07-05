import styled from "styled-components";

const Register = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 462px;
  min-height: 508px;
  background-color: #ffffff;
  border-radius: 15px;
  align-items: center;
  /* justify-content: center; */

  .SignInTitle {
    margin-top: 60px;
    font-size: 32px;
    font-weight: bold;
  }
  .create {
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .createHere {
    margin-left: 5px;
    color: blue;
  }
  .dualColumn {
    margin-top: 40px;
    width: 350px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* padding-top:20px; */
  }
  .uploadImage {
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
  }
  .registerButton {
    width: 350px;
    height: 50px;
    background-color: #feba46;
    border: 0px;
    color: white;
    border-radius: 5px;
  }
  .address {
    width: 350px;
    height: 96px;
    margin-bottom: 20px;
    /* padding-bottom:20px; */
    p {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 0px;
    }
    textarea {
      padding-left: 16px;
      padding-top: 10px;
      font-size: 16px;
      width: 100%;
      height: 100%;
      resize: none;
    }
  }
`;

export default Register;
