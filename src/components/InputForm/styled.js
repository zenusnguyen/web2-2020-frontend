import styled from "styled-components";

const InputForm = styled.div`
  width: ${(props) => props.Width || "350px"};
  margin-bottom: 20px;
  margin-top: ${(props) => props.Top || "0px"};
  margin-right: ${(props) => props.Right || "32px"};
  p {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 4px;
  }
  input {
    padding-left: 16px;
    font-size: 16px;
    width: 100%;
    height: 48px;
    border: 1px solid #d9dadb;
    border-radius: 4px;
  }
`;

export default InputForm;
