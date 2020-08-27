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
  .SignInTitle {
    font-weight: 600;
    font-size: 32px;
    line-height: 150%;
    margin-bottom: 32px;
  }
  .titleWithButton {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 32px;
  }
  .detailCard {
    position: absolute;
  }
`;

export default MaganerAccountStyled;
