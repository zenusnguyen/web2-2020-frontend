import styled from "styled-components";

const MyDatePicker = styled.div`
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
    margin-left: 120px;
    margin-top: 41px;
  }
`;

export default MyDatePicker;
