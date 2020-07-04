import styled from "styled-components";

const MaganerAccountStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #e5e5e5;
  width: 100%;
  font-size: 16;
  font-weight: 500;
  /* justify-content: flex-start; */
  .containerForm {
    padding-top: 40px;
    padding-left: 75px;
    display: flex;
    flex-direction: column;

    min-height: 508px;
    width: 100%;
    border-radius: 15px;
    /* align-items: center; */
    padding-bottom: 100px;
    /* justify-content: flex-start; */
  }
  .SignInTitle {
    font-size: 32px;
    font-weight: bold;
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
    display: flex;
    flex-direction: column;
    select {
      width: 350px;
      height: 50px;
      padding: 10px;
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
      padding-left: 30%;
    }
  }
  .selectCard {
    font-size: 16px;
    font-weight: 400;
  }
`;

export default MaganerAccountStyled;
