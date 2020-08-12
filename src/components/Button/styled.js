import styled from "styled-components";

const Button = styled.div`
  border: 0px;
  display: flex;
  margin-top: ${(props) => props.Top || "36px"};
  margin-left: ${(props) => props.Left || "24px"};
  width: ${(props) => props.Width || "350px"};
  height: ${(props) => props.Height || "48px"};
  background-color: ${(props) => props.BackgroundColor || "#FEBA46"};
  border-radius: ${(props) => props.BorderRadius || "8px"};
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  font-family: "Inter", sans-serif;
  p {
    margin: 0px;
    color: ${(props) => props.Color || "white"} !important;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
  }
  img {
    display: ${(props) => props.Display || "none"};
    width: 20px;
    height: 20px;
    border-style: none;
  }
`;

export default Button;
