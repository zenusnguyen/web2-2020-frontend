import styled from "styled-components";

const Button = styled.div`
  button {
    border: 0px;
    display: flex;
    margin-top: ${(props) => props.Top || "36px"};
    width: ${(props) => props.Width || "350px"};
    height: ${(props) => props.Height || "48px"};
    background-color: ${(props) => props.BackgroundColor || "#FEBA46"};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    p {
      margin: 0px;
      color: ${(props) => props.Color || "white"};
    }
  }
`;

export default Button;
