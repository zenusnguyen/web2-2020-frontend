import styled from "styled-components";

export const DepositStyled = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  .containerDeposit {
    padding-left: 75px;
    padding-top: 40px;
  }

  .selectAccount {
    p {
      /* font-family: Inter; */
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      /* identical to box height, or 24px */

      display: flex;
      align-items: center;

      /* Grayscale / Black */

      color: #333435;
    }
  }
  .back {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      margin-right: 10px;
    }
    .button {
      border: 0px;
      background-color: transparent;
    }
  }
  .titleWithButton {
    padding-right: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 55px;
    width: 100%;
  }
  .pageTitle {
    font-size: 32px;
    font-weight: bold;
  }
`;

const PersonalPage = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f7f9;
  width: 100%;
  margin-bottom: 40px;

  /* justify-content: flex-start; */
  .bodyContainer {
    margin-top: 65px;
    display: flex;
    flex-direction: column;
    padding-left: 75px;
    margin-bottom: 60px;
  }

  .pageTitle {
    font-size: 32px;
    font-weight: bold;
  }
  .title {
    font-size: 24px;
    font-weight: 600;
  }
  .back {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      margin-right: 10px;
    }
    .button {
      border: 0px;
      background-color: transparent;
    }
  }
  .titleWithButton {
    padding-right: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 55px;
    width: 100%;
  }
  .buttonGroup {
    display: flex;
    flex-direction: row;
  }
`;

export const Register = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f7f9;
  width: 100%;

  /* justify-content: flex-start; */

  .uploadImage {
    width: 350px;
    height: 100px;
    display: flex;
    justify-content: space-around;
  }
  .containerForm {
    padding-top: 40px;
    padding-left: 75px;
    display: flex;
    flex-direction: column;

    min-height: 508px;
    width: 350px;
    border-radius: 15px;
    /* align-items: center; */
    padding-bottom: 100px;
    /* justify-content: flex-start; */
  }
  .SignInTitle {
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
    width: 350px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* padding-top:20px; */
  }
  .registerButton {
    width: 350px;
    height: 50px;
    background-color: #feba46;
    border: 0px;
    color: white;
    border-radius: 5px;
  }
`;

export default PersonalPage;
