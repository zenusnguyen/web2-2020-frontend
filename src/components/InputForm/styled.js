import styled from "styled-components";

const InputForm = styled.div`
  width: ${(props) => props.Width || "350px"};
  margin-bottom: 20px;

  p {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 0px;
  }
  input {
    padding-left: 16px;
    font-size: 16px;
    width: 100%;
    height: 48px;
  }
`;

export default InputForm;
