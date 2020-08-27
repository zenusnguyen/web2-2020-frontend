import styled from "styled-components";

const MaganerAccountStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f7f9;
  width: 100%;
  min-height: 100vh;
  height: 100%;

  .containerForm {
    padding: 64px 75px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .titleWithButton {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 32px;
  }

  .SignInTitle {
    font-weight: 600;
    font-size: 32px;
    line-height: 150%;
    margin: 0;
  }

  /* .dualConfig {
    width: 350px;
  }

  .dualConfig {
    padding-right: 20%;
    display: flex;
    flex-direction: row;
    width: 100%;
  } */
`;
export const ConfigRowStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f7f9;
  margin-bottom: 32px;

  width: 100%;

  .title {
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    margin-bottom: 16px;
  }
  .containerInput {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
  }
  
  .child {
    flex-grow: 1;
    padding-right: 20px;
    min-width: 300px;
  }
`;
export default MaganerAccountStyled;
