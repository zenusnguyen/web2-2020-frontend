import styled from "styled-components";

export const DepositStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f7f9;
  width: 100%;
  min-height: 100vh;
  height: 100%;

  .containerDeposit {
    padding: 64px 75px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .selectAccount {
    width: 350px;
    margin-bottom: 20px;
    p {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 4px;
    }
    input {
      height: 34px;
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
    font-weight: 600;
    font-size: 32px;
    line-height: 150%;
    margin: 0;
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

export default PersonalPage;
