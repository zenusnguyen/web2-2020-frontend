import styled from "styled-components";

const TextAreaForm = styled.div`
  width: ${(props) => props.Width || "350px"};
  margin-bottom: 20px;
  height: 122px;

  p {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 4px;
  }
  textarea {
    border: 1px solid #d9dadb;
    padding: 16px;
    border-radius: 4px;
    font-size: 16px;
    height: 96px;
    width: 100%;
    resize: none;
    margin: 0;
  }
`;

export default TextAreaForm;
