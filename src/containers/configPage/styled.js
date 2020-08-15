import styled from "styled-components";

const MaganerAccountStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f7f9;
  width: 100%;
  min-height: 100%;
  height: 100vh;

  .containerForm {
    padding: 64px 75px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .SignInTitle {
    font-weight: 600;
    font-size: 32px;
    line-height: 150%;
    margin: 0;
  }
  .dualConfig {
    width: 350px;
  }
  .selectTerm {
    width: 350px;
    margin-right: 7.4%;
    input {
      height: 35px;
    }
    p {
      margin-bottom: 5px;
    }
  }
  .titleWithButton {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 32px;
  }
  .dualConfig {
    padding-right: 20%;
    display: flex;
    flex-direction: row;
    width: 100%;
  }
`;
export const ConfigRowStyled = styled.div`
  .title {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
  }
  .containerInput {
    padding-right: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
export default MaganerAccountStyled;
