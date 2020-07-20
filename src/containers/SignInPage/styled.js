import styled from "styled-components";

const SignInPageStyle = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#283180 0%, #5272ff 100%);
  display: flex;
  /* flex: 1; */
  align-items: center;
  justify-content: center;

  .SignInForm {
    display: flex;
    flex-direction: column;
    width: 462px;
    min-height: 508px;
    background-color: #ffffff;
    border-radius: 15px;
    align-items: center;
  }

  .SignInTitle {
    margin-top: 60px;
    font-size: 32px;
    font-weight: bold;
  }
  .create {
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .createHere {
    margin-left: 5px;
    color: blue;
  }
`;

export default SignInPageStyle;
