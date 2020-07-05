import styled from "styled-components";

const MyDatePicker = styled.div`
  margin-bottom: 20px;
  /* position: absolute; */
  display: flex;
  flex-direction: row;
    margin-top: 25px;
  p {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 0px;
  }
  input {
    padding-left: 16px;
    font-size: 16px;
    width: 160px;
    height: 48.5px;
    /* margin-top: 40px; */
  }
  img {
    width: 20px;
    height: 20px;
    margin-left: 120px;
    margin-top: 15px;
    position: absolute;
    border-color: #D9DADB
  }
`;

export default MyDatePicker;
