import styled from "styled-components";

const TextAreaForm = styled.div`
  width: ${(props) => props.Width || "350px"};
  height: 96px;
  margin-bottom: 20px;
  /* padding-bottom:20px; */
  p {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 0px;
  }
  textarea {
    padding-left: 16px;
    padding-top: 10px;
    font-size: 16px;
    width: 100%;
    height: 100%;
    resize: none;
  }
`;

export default TextAreaForm;
