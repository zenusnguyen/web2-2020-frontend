import styled from "styled-components";

const TransactionHistoryPage = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f7f9;
  font-size: 16;
  font-weight: 500;
  width: 100%;
  height: 100%;
  min-height: 100vh;

  .containerForm {
    padding: 64px 75px;
    display: flex;
    flex-direction: column;
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
    width: 100%;
    p {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 4px;
    }
    input {
      height: 33px;
    }
  }

  .filterSection {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
  }

  .child {
    flex-grow: 2;
    padding-right: 20px;
    min-width: 300px;
  }

  .child1 {
    flex-grow: 1;
  }

  .filterButton {
    width: 128px;
    height: 48px;
    background-color: #feba46;
    border: 0px;
    color: white;
    border-radius: 5px;
  }

  .customDatePickerWidth,
  .customDatePickerWidth > div.react-datepicker-wrapper,
  .customDatePickerWidth
    > div
    > div.react-datepicker__input-container
    .customDatePickerWidth
    > div
    > div.react-datepicker__input-container
    input {
    width: 100%;
  }
`;

export const MyDatePickerStyle = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  width: 100%;

  p {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 4px;
  }
  input {
    width: 100%;
    padding-left: 16px;
    font-size: 16px;
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
