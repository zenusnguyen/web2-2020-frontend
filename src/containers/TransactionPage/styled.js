import styled from "styled-components";

const TransactionHistoryPage = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f7f9;
  width: 100%;
  height: 100vh;
  font-size: 16;
  font-weight: 500;

  .containerForm {
    padding: 40px 75px 0;
    display: flex;
    flex-direction: column;
    min-height: 508px;
    width: 100%;
    border-radius: 15px;
    padding-bottom: 100px;
  }
  .pageTitle {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 32px;
  }

  .selectInput {
    width: 350px;
    p {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 4px;
    }
    input {
      height: 34px;
    }
  }

  .filterSection {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .filterButton {
    width: 128px;
    height: 48px;
    background-color: #feba46;
    border: 0px;
    color: white;
    border-radius: 5px;
  }
`;



export const MyDatePickerStyle = styled.div`
  margin-bottom: 20px;
  /* position: absolute; */
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
    width: 280px;
    height: 48px;
    border: 1px solid #d9dadb;
    box-sizing: border-box;
    border-radius: 4px;
  }
  img {
    width: 20px;
    height: 20px;
    margin-left: 250px;
    margin-top: 41px;
    position: absolute;
  }
`;

  



export default TransactionHistoryPage;
