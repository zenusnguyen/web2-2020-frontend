import styled from "styled-components";

const TransferStyled = styled.div`
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
  .title {
    font-size: 32px;
    font-weight: bold;
    line-height: 48px;
  }
  .verify {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 350px;
  }
  .titleType {
    font-size: 16px;
    font-weight: 500;
  }
  .extraBanking { 
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
`;

export default TransferStyled;
