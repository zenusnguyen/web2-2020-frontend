import styled from "styled-components";

const MaganerAccountStyled = styled.div`
  /* position: absolute; */
  /* z-index: 2; */
  display: flex;
  flex-direction: row;
  background-color: #f5f7f9;
  width: 100%;
  height: 100%;
  /* justify-content: flex-start; */
  .containerForm {
    padding-top: 40px;
    padding-left: 75px;
    display: flex;
    flex-direction: column;

    min-height: 508px;
    width: 100%;
    border-radius: 15px;
    /* align-items: center; */
    padding-bottom: 100px;
    /* justify-content: flex-start; */
  }
  .SignInTitle {
    font-size: 32px;
    font-weight: bold;
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
    padding-right: 25%;
    height: 55px;
    width: 100%;
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
