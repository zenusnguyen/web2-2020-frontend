import styled from "styled-components";

const SignInPageStyle = styled.div`
  background: linear-gradient(46.25deg, #283180 0%, #5272ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-family: "Inter", sans-serif;

  .SignInForm {
    display: flex;
    flex-direction: column;
    width: 462px;
    background-color: #ffffff;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
  }
  .SignInTitle {
    margin-top: 60px;
    margin-bottom: 32px;
    font-size: 32px;
    font-weight: bold;
  }
  .create {
    margin-top: 32px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    p {
      margin-bottom: 0;
    }
  }
  .createHere {
    margin-left: 5px;
    color: #3540a8;
    font-weight: 500;
  }
`;

export default SignInPageStyle;
