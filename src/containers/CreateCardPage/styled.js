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
    input {
      width: 100%;
      height: 60px;
      background-color: white;
      border-radius: 4px;
      border: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-weight: 600;
      font-size: 24px;
      line-height: 150%;
    }
  }
  .titleType {
    font-size: 16px;
    font-weight: 500;
  }
  .dualColumn {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .example {
    padding: 40px 32px 20px;
    display: flex;
    flex-direction: column;
    width: 400px;
    background: #feba46;
    border-radius: 16px;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-bottom: auto;
    p {
      color: white;
    }
  }
`;

export default MaganerAccountStyled;
