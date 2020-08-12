import styled from "styled-components";

const MaganerAccountStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f7f9;
  width: 100%;
  height: 100%;
  min-height: 100vh;

  .containerForm {
    padding: 64px 75px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .SignInTitle {
    font-size: 32px;
    font-weight: bold;
    line-height: 48px;
  }
  .titleWithButton {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 55px;
    width: 100%;
  }
  .crateBody {
    display: flex;
    flex-direction: column;
  }
  .spendCard {
    display: flex;
    flex-direction: column;
  }
  .selector {
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
  .accountNumber {
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 100px;
    input {
      width: 100%;
      height: 100%;
      background-color: white;
      border: 0px;
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 24px;
      font-weight: bold;
      padding-left: 25%;
    }
  }
  .selectCard {
    font-size: 16px;
    font-weight: 400;
  }
  .dualColumn {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: space-between; */
  }
  .example {
    margin-top: -150px;
    margin-left: 220px;
    display: flex;
    flex-direction: column;
    width: 400px;
    background-color: #f7d46e;
    /* background-color:#EFF1F2; */
    height: 350px;
    align-items: center;
    justify-content: center;
  }
`;

export default MaganerAccountStyled;
