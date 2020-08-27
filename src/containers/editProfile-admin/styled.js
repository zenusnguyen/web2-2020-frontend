import styled from "styled-components";

const PersonalPage = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f7f9;
  width: 100%;
  height: 100%;
  min-height: 100vh;

  .bodyContainer {
    padding: 64px 75px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .pageTitle {
    font-weight: bold;
    font-size: 32px;
    line-height: 150%;
    margin: 0;
  }
  .title {
    font-size: 24px;
    font-weight: 600;
  }
  .back {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #828485;
    img {
      margin-right: 10px;
    }
    .button {
      border: 0px;
      background-color: transparent;
    }
  }
  .titleWithButton {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 32px;
  }
  .buttonGroup {
    display: flex;
    flex-direction: row;
  }
`;

export const MyDatePickerStyle = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  margin-top: 0px;
  p {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 4px;
  }
  input {
    padding-left: 16px;
    font-size: 16px;
    width: 160px;
    height: 48px;
    border: 1px solid #d9dadb;
    box-sizing: border-box;
    border-radius: 4px;
  }
  img {
    position: absolute;
    width: 20px;
    height: 20px;
    margin-left: 120px;
    margin-top: 41px;
  }
`;

export const Register = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f7f9;
  width: 100%;
  min-height: 100vh;
  height: 100%;

.uploadImage {
    width: 350px;
    display: flex;
    button {
      border: none;
      width: 100px;
      height: 100px;
      background-color: white;
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='%23D9DADBFF' stroke-width='2' stroke-dasharray='6' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
      border-radius: 4px;
    }
    img {
      width: 30px;
      height: 30px;
    }
  }
  .containerForm {
    padding: 64px 75px;
    display: flex;
    flex-direction: column;
    width: 350px;
    padding-bottom: 100px;
  }
  .SignInTitle {
    font-weight: bold;
    font-size: 32px;
    line-height: 150%;
    margin-bottom: 32px;
  }
    .back {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #828485;
    img {
      margin-right: 10px;
    }
    .button {
      border: 0px;
      background-color: transparent;
    }
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
    width: 350px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .registerButton {
    margin-top: 32px;
    width: 187px;
    height: 48px;
    border: 0px;
    color: white;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    background: #4F6EF6;
    border-radius: 8px;
  }
`;

export default PersonalPage;
