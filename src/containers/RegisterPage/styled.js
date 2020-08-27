import styled from "styled-components";

const SignInPageStyle = styled.div`
  padding-top: 70px;
  padding-bottom: 90px;
  width: 100%;
  height: 100%;
  background: linear-gradient(46.25deg, #283180 0%, #5272ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  .Register {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    width: 462px;
    background-color: #ffffff;
    border-radius: 15px;
    align-items: center;
    /* justify-content: center; */
  }
  .verify {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 350px;

    button {
      margin-top: 20px;
      background-color: #feba46;
      width: 128px;
      height: 48px;
      border: 0px;
      border-radius: 8px;
    }
  }
  .SignInTitle {
    margin-top: 60px;
    margin-bottom: 32px;
    font-size: 32px;
    font-weight: bold;
  }
  .create {
    margin-top: 32px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    p {
      margin-bottom: 0;
    }
  }
  .createHere {
    margin-left: 5px;
    color: #3540a8;
    font-weight: 500;
  }
  .dualColumn {
    width: 350px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
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
  .registerButton {
    margin-top: 32px;
    width: 350px;
    height: 48px;
    background-color: #feba46;
    border: 0px;
    color: white;
    border-radius: 8px;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
  }
`;

export default SignInPageStyle;
