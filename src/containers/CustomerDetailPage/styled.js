import styled from "styled-components";

export const DepositStyled = styled.div`
  display: flex;
  flex-direction: row;

  .containerDeposit {
    padding-left: 75px;
    padding-top: 40px;
  }

  .selectAccount {
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      display: flex;
      align-items: center;
      color: #333435;
    }
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
    margin-bottom: 32px;

  }
  .pageTitle {
    font-size: 32px;
    font-weight: bold;
  }
`;

export const ListCardStyled = styled.div`
  .title {
    p {
      font-family: Inter;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 150%;
    }
  }
  .containerListCard {
  }
`;

const PersonalPage = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f7f9;
  width: 100%;
  min-height: 100vh;
  height: 100%;

  .bodyContainer {
    padding: 64px 75px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .pageTitle {
    font-weight: 600;
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
    padding-right: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 32px;
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
    padding-bottom: 100px;
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
